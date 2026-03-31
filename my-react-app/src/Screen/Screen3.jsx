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
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [autoScrollTimer, setAutoScrollTimer] = useState(null);
  const [userInteracted, setUserInteracted] = useState(false);
  
  const cardWidth = 280;
  const gap = 24;
  const totalCardWidth = cardWidth + gap;
  const cardsToShow = 4;

  // Create 3 sets of cards for infinite loop
  const clonedCards = [...cards, ...cards, ...cards];

  // Enhanced smooth scroll function with better easing
  const smoothScrollTo = (targetScroll, duration = 500) => {
    const container = scrollRef.current;
    if (!container) return;

    const startScroll = container.scrollLeft;
    const distance = targetScroll - startScroll;
    const startTime = performance.now();
    
    setIsAutoScrolling(true);
    
    // Smoother easing function
    const easeInOutCubic = (t) => {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);
      
      const newScroll = startScroll + distance * easeProgress;
      container.scrollLeft = newScroll;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAutoScrolling(false);
      }
    };
    
    requestAnimationFrame(animate);
  };

  // Function to snap to valid position showing exactly 4 full cards
  const snapToValidPosition = () => {
    const container = scrollRef.current;
    if (!container || isAutoScrolling) return;

    const currentScroll = container.scrollLeft;
    
    // Calculate which card should be the first visible card
    let targetIndex = Math.round(currentScroll / totalCardWidth);
    const maxStartIndex = clonedCards.length - cardsToShow;
    
    // Ensure targetIndex stays within bounds
    targetIndex = Math.max(0, Math.min(targetIndex, maxStartIndex));
    
    const targetScroll = targetIndex * totalCardWidth;
    
    if (Math.abs(currentScroll - targetScroll) > 2) {
      smoothScrollTo(targetScroll, 350);
      
      // Update current card index based on first visible card
      const firstVisibleCardIndex = targetIndex % cards.length;
      setCurrentCardIndex(firstVisibleCardIndex);
    } else {
      const firstVisibleCardIndex = targetIndex % cards.length;
      setCurrentCardIndex(firstVisibleCardIndex);
    }
  };

  // Handle infinite loop by resetting position
  const handleInfiniteLoop = () => {
    const container = scrollRef.current;
    if (!container || isAutoScrolling) return;

    const scrollPos = container.scrollLeft;
    const singleSetWidth = cards.length * totalCardWidth;
    const middleSetStart = singleSetWidth;
    const middleSetEnd = singleSetWidth * 2;
    
    // If we're at the leftmost set (first clone set)
    if (scrollPos < singleSetWidth) {
      const newPos = scrollPos + singleSetWidth;
      container.scrollLeft = newPos;
    } 
    // If we're at the rightmost set (last clone set)
    else if (scrollPos >= middleSetEnd) {
      const newPos = scrollPos - singleSetWidth;
      container.scrollLeft = newPos;
    }
  };

  // Auto scroll function - moves one card from right to left
  const autoScrollNext = () => {
    const container = scrollRef.current;
    if (!container || isAutoScrolling || isDragging || userInteracted) return;
    
    // Get current scroll position
    const currentScroll = container.scrollLeft;
    const currentFirstIndex = Math.round(currentScroll / totalCardWidth);
    const currentCardMod = currentFirstIndex % cards.length;
    
    // Calculate target card index (next card)
    const targetCardIndex = (currentCardMod + 1) % cards.length;
    
    // Calculate the difference
    let diff = targetCardIndex - currentCardMod;
    if (diff <= 0) diff += cards.length;
    
    // Calculate target first index
    let targetFirstIndex = currentFirstIndex + diff;
    
    // Get the middle set boundaries
    const singleSetWidth = cards.length * totalCardWidth;
    const middleSetStart = singleSetWidth;
    const middleSetEnd = singleSetWidth * 2;
    
    // Calculate target scroll position
    let targetScroll = targetFirstIndex * totalCardWidth;
    
    // Ensure target scroll is within the visible range
    const minScroll = middleSetStart - (cardsToShow * totalCardWidth);
    const maxScroll = middleSetEnd;
    
    if (targetScroll < minScroll) {
      targetScroll += singleSetWidth;
    } else if (targetScroll > maxScroll) {
      targetScroll -= singleSetWidth;
    }
    
    // Smooth scroll to target
    smoothScrollTo(targetScroll, 500);
    setCurrentCardIndex(targetCardIndex);
    
    // After scrolling completes, ensure proper position
    setTimeout(() => {
      if (!isAutoScrolling && !isDragging && !userInteracted) {
        handleInfiniteLoop();
      }
    }, 520);
  };

  // Start auto-scroll timer
  const startAutoScroll = () => {
    if (autoScrollTimer) {
      clearInterval(autoScrollTimer);
    }
    const timer = setInterval(() => {
      autoScrollNext();
    }, 3000);
    setAutoScrollTimer(timer);
  };

  // Stop auto-scroll timer
  const stopAutoScroll = () => {
    if (autoScrollTimer) {
      clearInterval(autoScrollTimer);
      setAutoScrollTimer(null);
    }
  };

  // Reset user interaction and restart auto-scroll
  const handleUserInteraction = () => {
    setUserInteracted(true);
    stopAutoScroll();
    
    // Restart auto-scroll after 5 seconds of no interaction
    setTimeout(() => {
      setUserInteracted(false);
      startAutoScroll();
    }, 5000);
  };

  // Initial scroll position and start auto-scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const singleSetWidth = cards.length * totalCardWidth;
      const middlePosition = singleSetWidth;
      container.scrollLeft = middlePosition;
      
      // Calculate initial card index
      const firstVisibleIndex = Math.round(middlePosition / totalCardWidth);
      const actualCardIndex = firstVisibleIndex % cards.length;
      setCurrentCardIndex(actualCardIndex);
    }
    
    // Start auto-scroll
    startAutoScroll();
    
    // Cleanup on unmount
    return () => {
      stopAutoScroll();
    };
  }, []);

  // Handle scroll events
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollTimeout;
    
    const handleScroll = () => {
      // Skip during auto scrolling
      if (isAutoScrolling) return;
      
      const scrollPos = container.scrollLeft;
      
      // Calculate which card is the first visible card during scrolling
      const firstVisibleIndex = Math.round(scrollPos / totalCardWidth);
      const actualCardIndex = firstVisibleIndex % cards.length;
      setCurrentCardIndex(actualCardIndex);
      
      // Clear previous timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);
      
      // After scrolling stops, snap to valid position
      scrollTimeout = setTimeout(() => {
        if (!isDragging && !isAutoScrolling) {
          snapToValidPosition();
          handleInfiniteLoop();
        }
      }, 100);
    };
    
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isDragging, isAutoScrolling]);

  const scrollToCard = (direction) => {
    const container = scrollRef.current;
    if (!container || isAutoScrolling) return;

    // User clicked button, handle interaction
    handleUserInteraction();

    // Get current scroll position
    const currentScroll = container.scrollLeft;
    const currentFirstIndex = Math.round(currentScroll / totalCardWidth);
    const currentCardMod = currentFirstIndex % cards.length;
    
    // Calculate target card index based on direction
    let targetCardIndex;
    if (direction === 'next') {
      targetCardIndex = (currentCardMod + 1) % cards.length;
    } else {
      targetCardIndex = (currentCardMod - 1 + cards.length) % cards.length;
    }
    
    // Calculate the difference
    let diff = targetCardIndex - currentCardMod;
    if (direction === 'next' && diff <= 0) diff += cards.length;
    if (direction === 'prev' && diff >= 0) diff -= cards.length;
    
    // Calculate target first index
    let targetFirstIndex = currentFirstIndex + diff;
    
    // Get the middle set boundaries
    const singleSetWidth = cards.length * totalCardWidth;
    const middleSetStart = singleSetWidth;
    const middleSetEnd = singleSetWidth * 2;
    
    // Calculate target scroll position
    let targetScroll = targetFirstIndex * totalCardWidth;
    
    // Ensure target scroll is within the visible range
    const minScroll = middleSetStart - (cardsToShow * totalCardWidth);
    const maxScroll = middleSetEnd;
    
    if (targetScroll < minScroll) {
      targetScroll += singleSetWidth;
    } else if (targetScroll > maxScroll) {
      targetScroll -= singleSetWidth;
    }
    
    // Smooth scroll to target with longer duration for smoother motion
    smoothScrollTo(targetScroll, 550);
    setCurrentCardIndex(targetCardIndex);
    
    // After scrolling completes, ensure proper position
    setTimeout(() => {
      if (!isAutoScrolling) {
        handleInfiniteLoop();
      }
    }, 560);
  };

  const nextCard = () => scrollToCard('next');
  const prevCard = () => scrollToCard('prev');

  const handleMouseDown = (e) => {
    if (e.button !== 0 || isAutoScrolling) return;
    handleUserInteraction(); // User is interacting
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isAutoScrolling) return;
    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft - (x - startX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Snap to valid position after swipe ends
    setTimeout(() => {
      if (!isAutoScrolling) {
        snapToValidPosition();
        handleInfiniteLoop();
      }
    }, 10);
  };

  return (
    <div className="pl-16 pr-16 " style={{ backgroundColor: "#000000" }}>
      <div style={{ backgroundColor: "#000000", minHeight: "80vh" }}>
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
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  transition: "all 0.3s ease",
                  transform: isActive && !isAutoScrolling ? "scale(1.02)" : "scale(1)",
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
                    marginBottom: "16px",
                    marginTop: "0px",
                  }}
                >
                  <IconComponent size={30} color="#ffffff" />
                </div>

                <h1
                  className="card-title"
                  style={{
                    color: "white",
                    fontSize: "18px",
                    margin: 0,
                    marginBottom: "12px",
                    fontWeight: "600",
                    lineHeight: "1.3",
                    textAlign: "left",
                    width: "100%",
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
                    textAlign: "left",
                    width: "100%",
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
              backgroundColor: "#ff730021",
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
              backgroundColor: "#ff730021",
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