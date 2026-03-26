import React, { useRef, useState } from "react";
import { Lock } from "lucide-react";

export const Screen3 = () => {
  const cards = Array.from({ length: 8 });

  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (e.button !== 2) return; // ✅ RIGHT CLICK ONLY

    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div style={{ backgroundColor: "#000000" }}>
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
              backgroundColor: "#ff73003b",
              color: "#fd7302",
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
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onContextMenu={(e) => e.preventDefault()} // 🚀 disable right-click menu
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "20px",
            padding: "40px",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {cards.map((_, index) => (
            <div
              key={index}
              style={{
                minWidth: "250px",
                height: "200px",
                backgroundColor: "#111",
                border: "1px solid #333",
                borderRadius: "10px",
                padding: "15px",
                flexShrink: 0,
                scrollSnapAlign: "start",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
                transition: "all 0.4s ease",
                cursor: "pointer",
              }}
              className="card"
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
                Feature {index + 1}
              </h1>

              <p
                style={{
                  color: "#aaa",
                  fontSize: "14px",
                }}
              >
                This is a sample description for feature {index + 1}.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hover Styles */}
      <style>
        {`
          .card:hover {
            background-color: #ff7300;
            border-color: #ff7300;
          }

          .card:hover .card-title {
            color: #000;
          }

          .card:hover p {
            color: #000;
          }

          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </>
  );
};