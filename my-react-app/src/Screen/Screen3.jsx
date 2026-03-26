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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSnapping, setIsSnapping] = useState(false);

  // Clone cards for infinite loop effect
  const clonedCards = [...cards, ...cards, ...cards];
  const cardWidth = 290; // 250px minWidth + 40px gap

  // Intersection Observer to detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoScrolled && !isAutoScrolling) {
            startAutoScroll();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAutoScrolled, isAutoScrolling]);

  // Center snap detection while scrolling
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isAutoScrolling || isSnapping) return;
      
      const scrollPosition = container.scrollLeft;
      const cardElements = container.children;
      
      // Find which card is closest to center
      let closestIndex = 0;
      let minDistance = Infinity;
      
      for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];
        const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
        const viewportCenter = scrollPosition + (container.clientWidth / 2);
        const distance = Math.abs(cardCenter - viewportCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }
      
      // Calculate actual index
      const actualIndex = closestIndex % cards.length;
      setActiveIndex(actualIndex);
      
      // Handle infinite loop reset
      const totalWidth = container.scrollWidth;
      const cloneSetWidth = totalWidth / 3;
      
      if (scrollPosition <= cloneSetWidth * 0.05) {
        container.scrollLeft = cloneSetWidth;
      } else if (scrollPosition >= cloneSetWidth * 1.95) {
        container.scrollLeft = cloneSetWidth;
      }
    };
    
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [cards.length, isAutoScrolling, isSnapping]);

  // Snap to center function with momentum
  const snapToNearestCard = () => {
    const container = scrollRef.current;
    if (!container || isAutoScrolling) return;
    
    setIsSnapping(true);
    const cardElements = container.children;
    let closestCard = null;
    let minDistance = Infinity;
    let closestIndex = 0;
    
    for (let i = 0; i < cardElements.length; i++) {
      const card = cardElements[i];
      const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
      const viewportCenter = container.scrollLeft + (container.clientWidth / 2);
      const distance = Math.abs(cardCenter - viewportCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestCard = card;
        closestIndex = i;
      }
    }
    
    if (closestCard) {
      const scrollTo = closestCard.offsetLeft - (container.clientWidth / 2) + (closestCard.offsetWidth / 2);
      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
      
      // Update active index after snap
      setTimeout(() => {
        const actualIndex = closestIndex % cards.length;
        setActiveIndex(actualIndex);
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
    const totalWidth = container.scrollWidth;
    const middleSetStart = totalWidth / 3;
    const targetPosition = middleSetStart + (cards.length * cardWidth);
    
    let startPosition = container.scrollLeft;
    let startTime = null;
    const duration = 3000;
    
    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const newPosition = startPosition + (targetPosition - startPosition) * easeOutCubic;
      container.scrollLeft = newPosition;
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        container.scrollLeft = targetPosition;
        setIsAutoScrolling(false);
        setHasAutoScrolled(true);
        
        setTimeout(() => {
          const middlePosition = totalWidth / 3;
          container.scrollLeft = middlePosition;
          snapToNearestCard();
        }, 100);
      }
    };
    
    requestAnimationFrame(animateScroll);
  };

  // Mouse swipe handlers with momentum
  const handleMouseDown = (e) => {
    if (isAutoScrolling || !hasAutoScrolled) return;
    if (e.button !== 0) return;
    
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setDragVelocity(0);
    setLastDragTime(Date.now());
    setLastDragX(e.pageX);
    
    // Disable smooth scrolling during drag
    scrollRef.current.style.scrollBehavior = 'auto';
    
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isAutoScrolling) return;
    
    e.preventDefault();
    const currentTime = Date.now();
    const currentX = e.pageX;
    const deltaX = currentX - lastDragX;
    const deltaTime = currentTime - lastDragTime;
    
    // Calculate velocity (pixels per millisecond)
    if (deltaTime > 0) {
      const velocity = (deltaX / deltaTime) * 16;
      setDragVelocity(velocity);
    }
    
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
    
    setLastDragX(currentX);
    setLastDragTime(currentTime);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Apply momentum if velocity is significant
    if (Math.abs(dragVelocity) > 0.2 && !isAutoScrolling) {
      const container = scrollRef.current;
      const initialScrollLeft = container.scrollLeft;
      let momentum = dragVelocity * 15;
      let startTime = null;
      let animationFrame;
      
      const applyMomentum = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const duration = 500;
        
        if (elapsed < duration && Math.abs(momentum) > 0.5) {
          const progress = 1 - (elapsed / duration);
          const easeOut = Math.pow(progress, 2);
          const currentMomentum = momentum * easeOut;
          
          container.scrollLeft = initialScrollLeft + currentMomentum;
          
          momentum *= 0.95;
          
          animationFrame = requestAnimationFrame(applyMomentum);
        } else {
          cancelAnimationFrame(animationFrame);
          snapToNearestCard();
        }
      };
      
      animationFrame = requestAnimationFrame(applyMomentum);
    } else {
      snapToNearestCard();
    }
    
    setDragVelocity(0);
  };

  // Prevent vertical scrolling while auto-scrolling
  useEffect(() => {
    const preventVerticalScroll = (e) => {
      if (isAutoScrolling) {
        e.preventDefault();
      }
    };

    if (isAutoScrolling) {
      window.addEventListener('wheel', preventVerticalScroll, { passive: false });
      document.body.style.overflow = 'hidden';
    } else {
      window.removeEventListener('wheel', preventVerticalScroll);
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('wheel', preventVerticalScroll);
      document.body.style.overflow = '';
    };
  }, [isAutoScrolling]);

  // Clean up drag state on unmount
  useEffect(() => {
    return () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };
  }, [isDragging]);

  return (
    <div ref={sectionRef}>
      <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
        {/* Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <button
            style={{
              alignContent: "center",
              backgroundColor: "#ff9100d7",
              color: "#81542e",
              padding: "1px 12px",
              fontSize: "13px",
              borderRadius: "20px",
              fontWeight: "bold",
              border: "1px solid #ff5100",
            }}
          >
            . Key Features
          </button>
        </div>

        {/* Heading */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
            gap: "10px",
          }}
        >
          <h1 style={{ color: "white", fontSize: "50px" }}>
            AIS 140 GPS Tracker – Key Features
          </h1>
          <h6 style={{ color: "#c0c0c0e7" }}>
            Comprehensive tracking capabilities designed for compliance and
            operational excellence.
          </h6>
          {isAutoScrolling && (
            <div style={{ color: "#ff7300", marginTop: "10px" }}>
              Auto-scrolling through features...
            </div>
          )}
        </div>

        {/* Scrollable Cards with Mouse Swipe - gap-x-10 (40px gap) */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "40px",
            padding: "40px",
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
                minWidth: "250px",
                height: "200px",
                backgroundColor: "#111",
                border: "1px solid #333",
                borderRadius: "10px",
                padding: "15px",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            >
              <div>
                <Lock size={30} color="#ff7300" />
              </div>

              <h1
                style={{
                  color: "white",
                  fontSize: "18px",
                  transition: "0.3s",
                }}
                className="card-title"
              >
                Feature {(index % cards.length) + 1}
              </h1>

              <p
                style={{
                  color: "#aaa",
                  fontSize: "14px",
                  transition: "0.3s",
                }}
                className="card-description"
              >
                This is a sample description for feature {(index % cards.length) + 1}.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Styles - Hover effects only on cursor hover */}
      <style>
        {`
          .card:hover {
            background-color: #ff730041 !important;
            border-color: #ff7300 !important;
            transform: scale(1.05);
          }

          .card:hover .card-title {
            color: #000 !important;
          }

          .card:hover .card-description {
            color: #000 !important;
          }

          div::-webkit-scrollbar {
            display: none;
          }
          
          .card {
            transition: all 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};