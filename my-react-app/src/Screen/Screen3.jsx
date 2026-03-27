import React, { useRef, useState, useEffect } from "react";
import {
  Lock,
  ArrowRight,
  ArrowLeft,
  MapPin,
  CircleAlert,
  Gauge,
  Power,
  Map,
  Clock,
  Battery,
} from "lucide-react";

export const Screen3 = () => {
  const cards = [
    {
      icon: Lock,
      title: "Secure Data Transmission",
      desc: "Supports encrypted data transfer via approved protocols.",
    },
    {
      icon: MapPin,
      title: "Live Vehicle Location Tracking",
      desc: "Track vehicles in real time with accurate GPS positioning.",
    },
    {
      icon: CircleAlert,
      title: "Emergency & SOS Alerts",
      desc: "Instant alerts during emergencies, crashes, or panic situations.",
    },
    {
      icon: Gauge,
      title: "Overspeed & Route Violation Alerts",
      desc: "Get notified when vehicles exceed speed limits or deviate from routes.",
    },
    {
      icon: Power,
      title: "Ignition & Power Status Monitoring",
      desc: "Know when the vehicle is turned ON/OFF, or power is disconnected.",
    },
    {
      icon: Map,
      title: "Geofencing (Auto & Manual)",
      desc: "Set virtual boundaries and receive alerts when entering or exiting.",
    },
    {
      icon: Clock,
      title: "Trip History & Playback",
      desc: "Review past trips, routes, and movement history at any time.",
    },
    {
      icon: Battery,
      title: "Internal Backup Battery",
      desc: "Continues tracking even during power loss.",
    },
  ];

  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragVelocity, setDragVelocity] = useState(0);
  const [lastDragTime, setLastDragTime] = useState(0);
  const [lastDragX, setLastDragX] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);

  const clonedCards = [...cards, ...cards, ...cards, ...cards, ...cards];
  const cardWidth = 280;
  const gap = 24;
  const totalCardWidth = cardWidth + gap;

  // Initial scroll position
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const containerWidth = container.clientWidth;
      const initialScroll =
        (clonedCards.length / 3) * totalCardWidth -
        containerWidth / 2 +
        cardWidth / 2;
      container.scrollLeft = initialScroll;
    }
  }, []);

  // Handle scroll events and infinite loop
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Skip updating current card during programmatic smooth scroll
      if (isProgrammaticScroll) return;
      
      const scrollPos = container.scrollLeft;
      let closest = 0;
      let minDist = Infinity;

      Array.from(container.children).forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const viewCenter = scrollPos + container.clientWidth / 2;
        const distance = Math.abs(cardCenter - viewCenter);

        if (distance < minDist) {
          minDist = distance;
          closest = i;
        }
      });

      setCurrentCardIndex(closest % cards.length);

      const totalWidth = container.scrollWidth;
      const cloneWidth = totalWidth / 5;
      const threshold = cloneWidth;

      if (scrollPos <= threshold) {
        container.scrollLeft = cloneWidth * 2 + (scrollPos % cloneWidth);
      } else if (scrollPos >= totalWidth - threshold) {
        container.scrollLeft = cloneWidth * 2 + (scrollPos - (totalWidth - cloneWidth * 2));
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [isProgrammaticScroll, cards.length]);

  const scrollToCard = (cardIndex) => {
    const container = scrollRef.current;
    if (!container) return;

    setIsProgrammaticScroll(true);
    
    const cardElements = Array.from(container.children);
    const middleStart = Math.floor(cardElements.length / 3);
    const middleEnd = Math.floor((cardElements.length * 2) / 3);

    let targetCard = cardElements.find(
      (_, i) => i >= middleStart && i < middleEnd && i % cards.length === cardIndex
    );

    if (!targetCard) {
      targetCard = cardElements.find((_, i) => i % cards.length === cardIndex);
    }

    if (targetCard) {
      const containerWidth = container.clientWidth;
      const targetCardCenter = targetCard.offsetLeft + targetCard.offsetWidth / 2;
      const scrollTo = targetCardCenter - containerWidth / 2;

      // Use smooth scrolling behavior
      container.scrollTo({ 
        left: scrollTo, 
        behavior: "smooth" 
      });
      
      setCurrentCardIndex(cardIndex);

      // Wait for smooth scroll to complete before re-enabling scroll handler
      setTimeout(() => {
        setIsProgrammaticScroll(false);
        
        // Fix infinite loop position after smooth scroll
        const totalWidth = container.scrollWidth;
        const cloneWidth = totalWidth / 5;
        const currentScroll = container.scrollLeft;

        if (currentScroll <= cloneWidth || currentScroll >= totalWidth - cloneWidth) {
          container.scrollLeft =
            currentScroll <= cloneWidth
              ? cloneWidth * 2 + currentScroll
              : cloneWidth * 2 - (totalWidth - currentScroll);
        }
      }, 600); // Slightly longer than the smooth scroll duration
    } else {
      setIsProgrammaticScroll(false);
    }
  };

  const nextCard = () => scrollToCard((currentCardIndex + 1) % cards.length);
  const prevCard = () =>
    scrollToCard((currentCardIndex - 1 + cards.length) % cards.length);

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setLastDragTime(Date.now());
    setLastDragX(e.pageX);
    scrollRef.current.style.scrollBehavior = "auto";
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const now = Date.now();
    const deltaX = e.pageX - lastDragX;
    const deltaTime = now - lastDragTime;

    if (deltaTime > 0) {
      setDragVelocity((deltaX / deltaTime) * 16);
    }

    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft - (x - startX) * 1.2;
    setLastDragX(e.pageX);
    setLastDragTime(now);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(dragVelocity) > 0.2) {
      const container = scrollRef.current;
      let momentum = dragVelocity * 15;
      let startTime = null;
      let animationId = null;

      const applyMomentum = (time) => {
        if (!startTime) startTime = time;
        const elapsed = time - startTime;

        if (elapsed < 500 && Math.abs(momentum) > 0.5) {
          container.scrollLeft = container.scrollLeft + momentum;
          momentum *= 0.95;
          animationId = requestAnimationFrame(applyMomentum);
        } else {
          if (animationId) cancelAnimationFrame(animationId);
        }
      };

      animationId = requestAnimationFrame(applyMomentum);
    }

    setDragVelocity(0);
  };

  return (
    <div className="pl-16 pr-16" style={{ backgroundColor: "#000000" }}>
      <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
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
            padding: "20px 0",
            scrollbarWidth: "none",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: isDragging ? "none" : "auto",
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
          }}
        >
          {clonedCards.map((card, index) => {
            const IconComponent = card.icon;
            const isActive = currentCardIndex === index % cards.length;

            return (
              <div
                key={index}
                className="card"
                style={{
                  minWidth: `${cardWidth}px`,
                  width: `${cardWidth}px`,
                  height: "230px",
                  backgroundColor: "#111",
                  border: "1px solid #333",
                  borderRadius: "16px",
                  padding: "20px",
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "12px",
                  transition: "all 0.3s ease",
                  transform: isActive ? "scale(1.02)" : "scale(1)",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#ff7300",
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                  }}
                >
                  <IconComponent size={30} color="#ffffff" />
                </div>

                <h1
                  className="card-title"
                  style={{
                    color: "white",
                    fontSize: "16px",
                    margin: 0,
                    fontWeight: "600",
                    lineHeight: "1.3",
                  }}
                >
                  {card.title}
                </h1>

                <p
                  className="card-description"
                  style={{
                    color: "#aaa",
                    fontSize: "13px",
                    margin: 0,
                    lineHeight: "1.4",
                  }}
                >
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
            marginBottom: "40px",
          }}
        >
          <button
            onClick={prevCard}
            className="nav-button"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              
              color: "white",
              backgroundColor:"#ff730021",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#c55900c0",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
          >
            <ArrowLeft size={24} />
          </button>

          <button
            onClick={nextCard}
            className="nav-button"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor:"#ff730021",
              color: "white",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#c55900c0",
              borderWidth: "2px",
              borderStyle: "solid",              
            }}
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      <style>{`
        .card:hover {
          background-color: #ff730017 !important;
          border-color: #ff7300 !important;
          transform: scale(1.05) !important;
        }
        
        .card:hover .card-title,
        .card:hover .card-description {
          color: #ffffff !important;
        }
        
        .card:hover div[style*="background-color: #ff7300"] {
          background-color: #ffffff !important;
        }
        
        .card:hover svg {
          color: #ff7300 !important;
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
  );
};