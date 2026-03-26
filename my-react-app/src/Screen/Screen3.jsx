import React, { useRef, useState, useEffect } from "react";
import { Lock } from "lucide-react";

export const Screen3 = () => {
  const cards = Array.from({ length: 8 });
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragVelocity, setDragVelocity] = useState(0);
  const [lastDragTime, setLastDragTime] = useState(0);
  const [lastDragX, setLastDragX] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [hasAutoScrolled, setHasAutoScrolled] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isSnapping, setIsSnapping] = useState(false);

  const clonedCards = [...cards, ...cards, ...cards];
  const cardWidth = 250;
  const gap = 20;
  const totalCardWidth = cardWidth + gap;
  const containerPadding = 40;

  // Auto-scroll on view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && !hasAutoScrolled && !isAutoScrolling && startAutoScroll(),
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAutoScrolled, isAutoScrolling]);

  // Update current card index based on scroll position
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isAutoScrolling || isSnapping) return;
      
      const scrollPos = container.scrollLeft;
      const cards = container.children;
      let closest = 0, minDist = Infinity;
      
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const viewCenter = scrollPos + container.clientWidth / 2;
        const distance = Math.abs(cardCenter - viewCenter);
        if (distance < minDist) { minDist = distance; closest = i; }
      }
      
      setCurrentCardIndex(closest % cards.length);
      
      const totalWidth = container.scrollWidth;
      const cloneWidth = totalWidth / 3;
      if (scrollPos <= cloneWidth * 0.05) container.scrollLeft = cloneWidth;
      else if (scrollPos >= cloneWidth * 1.95) container.scrollLeft = cloneWidth;
    };
    
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isAutoScrolling, isSnapping]);

  const scrollToCard = (cardIndex) => {
    const container = scrollRef.current;
    if (!container || isAutoScrolling) return;
    
    const cardElements = container.children;
    let targetCard = null;
    
    // Find the target card in the visible set
    for (let i = 0; i < cardElements.length; i++) {
      if (i % cards.length === cardIndex) {
        targetCard = cardElements[i];
        break;
      }
    }
    
    if (targetCard) {
      // Calculate scroll position to center the card
      const containerWidth = container.clientWidth;
      const targetCardCenter = targetCard.offsetLeft + targetCard.offsetWidth / 2;
      const scrollTo = targetCardCenter - containerWidth / 2;
      
      container.scrollTo({ left: scrollTo, behavior: 'smooth' });
      setCurrentCardIndex(cardIndex);
    }
  };

  const nextCard = () => {
    if (isAutoScrolling || !hasAutoScrolled) return;
    const nextIndex = (currentCardIndex + 1) % cards.length;
    scrollToCard(nextIndex);
  };

  const prevCard = () => {
    if (isAutoScrolling || !hasAutoScrolled) return;
    const prevIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    scrollToCard(prevIndex);
  };

  const snapToNearestCard = () => {
    const container = scrollRef.current;
    if (!container || isAutoScrolling) return;
    
    setIsSnapping(true);
    const cardElements = container.children;
    let closestCard = null;
    let minDist = Infinity;
    let closestIndex = 0;
    const viewCenter = container.scrollLeft + container.clientWidth / 2;
    
    for (let i = 0; i < cardElements.length; i++) {
      const card = cardElements[i];
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - viewCenter);
      if (distance < minDist) { 
        minDist = distance; 
        closestCard = card; 
        closestIndex = i;
      }
    }
    
    if (closestCard) {
      // Snap to show card centered
      const scrollTo = closestCard.offsetLeft - container.clientWidth / 2 + closestCard.offsetWidth / 2;
      container.scrollTo({ left: scrollTo, behavior: 'smooth' });
      setTimeout(() => {
        setCurrentCardIndex(closestIndex % cards.length);
        setIsSnapping(false);
      }, 300);
    } else {
      setIsSnapping(false);
    }
  };

  const startAutoScroll = () => {
    if (!scrollRef.current || hasAutoScrolled) return;
    
    setIsAutoScrolling(true);
    const container = scrollRef.current;
    const startPos = container.scrollLeft;
    const targetPos = container.scrollWidth / 3 + (cards.length * totalCardWidth);
    const duration = 5000;
    let startTime = null;
    
    const animate = (time) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      container.scrollLeft = startPos + (targetPos - startPos) * easeOut;
      
      if (progress < 1) requestAnimationFrame(animate);
      else {
        setIsAutoScrolling(false);
        setHasAutoScrolled(true);
        setTimeout(() => {
          container.scrollLeft = container.scrollWidth / 3;
          snapToNearestCard();
        }, 100);
      }
    };
    
    requestAnimationFrame(animate);
  };

  const handleMouseDown = (e) => {
    if (isAutoScrolling || !hasAutoScrolled || e.button !== 0) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setLastDragTime(Date.now());
    setLastDragX(e.pageX);
    scrollRef.current.style.scrollBehavior = 'auto';
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isAutoScrolling) return;
    e.preventDefault();
    const now = Date.now();
    const deltaX = e.pageX - lastDragX;
    const deltaTime = now - lastDragTime;
    if (deltaTime > 0) setDragVelocity((deltaX / deltaTime) * 16);
    
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft - (x - startX) * 1.2;
    setLastDragX(e.pageX);
    setLastDragTime(now);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (Math.abs(dragVelocity) > 0.2 && !isAutoScrolling) {
      const container = scrollRef.current;
      const startScroll = container.scrollLeft;
      let momentum = dragVelocity * 15;
      let startTime = null;
      
      const applyMomentum = (time) => {
        if (!startTime) startTime = time;
        const elapsed = time - startTime;
        if (elapsed < 500 && Math.abs(momentum) > 0.5) {
          container.scrollLeft = startScroll + momentum * Math.pow(1 - elapsed / 500, 2);
          momentum *= 0.95;
          requestAnimationFrame(applyMomentum);
        } else snapToNearestCard();
      };
      requestAnimationFrame(applyMomentum);
    } else snapToNearestCard();
    setDragVelocity(0);
  };

  // Lock vertical scroll during auto-scroll
  useEffect(() => {
    const preventScroll = (e) => isAutoScrolling && e.preventDefault();
    if (isAutoScrolling) {
      window.addEventListener('wheel', preventScroll, { passive: false });
      document.body.style.overflow = 'hidden';
    } else {
      window.removeEventListener('wheel', preventScroll);
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('wheel', preventScroll);
      document.body.style.overflow = '';
    };
  }, [isAutoScrolling]);

  return (
    <div className="pl-16 pr-16" style={{ backgroundColor: "#000000" }}>
      <div ref={sectionRef}>
        <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
            <button style={{ backgroundColor: "#ff73003b", color: "#fd7302", padding: "1px 12px", fontSize: "13px", borderRadius: "20px", border: "1px solid #ff5100" }}>
              . Key Features
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "20px", gap: "10px" }}>
            <h1 style={{ color: "white", fontSize: "50px" }}>AIS 140 GPS Tracker – Key Features</h1>
            <h6 style={{ color: "#c0c0c0e7" }}>Comprehensive tracking capabilities designed for compliance and operational excellence.</h6>
            {isAutoScrolling && <div style={{ color: "#ff7300", marginTop: "10px" }}>Auto-scrolling through features...</div>}
          </div>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
              display: "flex",
              overflowX: "auto",
              gap: `${gap}px`,
              padding: `0 ${containerPadding}px`,
              scrollbarWidth: "none",
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: isDragging ? "none" : "auto",
              opacity: isAutoScrolling ? 0.9 : 1,
              transition: "opacity 0.3s ease",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {clonedCards.map((_, index) => (
              <div
                key={index}
                className="card"
                style={{
                  minWidth: `${cardWidth}px`,
                  height: "200px",
                  backgroundColor: "#111",
                  border: currentCardIndex === (index % cards.length) && !isAutoScrolling 
                    ? "2px solid #ff7300" 
                    : "1px solid #333",
                  borderRadius: "10px",
                  padding: "15px",
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "10px",
                  transition: "all 0.3s ease",
                  transform: currentCardIndex === (index % cards.length) && !isAutoScrolling 
                    ? "scale(1.02)" 
                    : "scale(1)",
                }}
              >
                <Lock size={30} color="#ff7300" />
                <h1 style={{ color: "white", fontSize: "18px" }} className="card-title">
                  Feature {(index % cards.length) + 1}
                </h1>
                <p style={{ color: "#aaa", fontSize: "14px" }} className="card-description">
                  This is a sample description for feature {(index % cards.length) + 1}.
                </p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px", marginBottom: "40px" }}>
            <button 
              onClick={prevCard} 
              className="nav-button" 
              style={{ 
                width: "50px", 
                height: "50px", 
                borderRadius: "50%", 
                backgroundColor: "#333", 
                color: "white", 
                border: "none", 
                fontSize: "24px", 
                cursor: "pointer", 
                transition: "all 0.3s ease", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                opacity: !hasAutoScrolled ? 0.5 : 1,
                pointerEvents: !hasAutoScrolled ? "none" : "auto"
              }}
              disabled={!hasAutoScrolled}
            >
              ←
            </button>
            <button 
              onClick={nextCard} 
              className="nav-button" 
              style={{ 
                width: "50px", 
                height: "50px", 
                borderRadius: "50%", 
                backgroundColor: "#333", 
                color: "white", 
                border: "none", 
                fontSize: "24px", 
                cursor: "pointer", 
                transition: "all 0.3s ease", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                opacity: !hasAutoScrolled ? 0.5 : 1,
                pointerEvents: !hasAutoScrolled ? "none" : "auto"
              }}
              disabled={!hasAutoScrolled}
            >
              →
            </button>
          </div>
        </div>

        <style>{`
          .card:hover {
            background-color: #ff7300 !important;
            border-color: #ff7300 !important;
            transform: scale(1.05) !important;
          }
          .card:hover .card-title,
          .card:hover .card-description {
            color: #000 !important;
          }
          .nav-button:hover {
            background-color: #ff7300 !important;
            color: #000 !important;
            transform: scale(1.1);
          }
          div::-webkit-scrollbar {
            display: none;
          }
          .card {
            transition: all 0.3s ease;
          }
        `}</style>
      </div>
    </div>
  );
};