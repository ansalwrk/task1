import React from "react";

import hero from "../assets/hero-bg.jpg";
import gps1 from "../assets/gps1.png";


export const Home = () => {
  return (
    <> 
    
    <div className="font-sans ...">
      <style>
        {`
          /* Only things that physically cannot be inline */
          @keyframes floatBeat {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-20px) scale(1.05); }
          }

          @media (max-width: 1024px) {
            .hero-content { flex-direction: column !important; text-align: center !important; }
            .text-container { align-items: center !important; display: flex !important; flex-direction: column !important; }
            .hero-p { margin: 20px auto !important; }
            .btn-group, .stats-bar { justify-content: center !important; }
            .image-container { margin-top: 50px !important; }
            .hero-h1 { font-size: 2.5rem !important; }
          }

          @media (max-width: 600px) {
            .hero-h1 { font-size: 1.8rem !important; }
            .btn-group { flex-direction: column !important; width: 100% !important; }
            .btn-group button { width: 100% !important; }
          }
        `}
      </style>

      <section 
        className="hero-section" 
        style={{ 
          position: "relative", 
          minHeight: "auto", 
          display: "flex", 
          alignItems: "flex-start",
          overflow: "hidden", 
           background: "linear-gradient(135deg, #000000 0%, rgba(0, 0, 0, 0.86) 100%)", 
           opacity:"10"
        }}
      >
        {/* Background Image */}
        <img 
          src={hero} 
          alt="BG" 
          style={{ 
            position: "absolute", 
            top: 0, left: 0, 
            width: "100%", height: "100%", 
            objectFit: "cover", 
            opacity: 0.1, 
            zIndex: 0 
          }} 
        />

        <div 
          className="hero-content" 
          style={{ 
            position: "relative", 
            zIndex: 2, 
            maxWidth: "1200px", 
            margin: "0 auto", 
            display: "flex", 
            alignItems: "center", 
            width: "100%", 
            marginLeft:"4rem",
          
          }}
        >
          {/* Left Text Side */}
          <div className="text-container" style={{ flex: 1 }}>
            <div style={{ 
              backgroundColor: "#b3390023", 
              color: "#ff7b00", 
              padding: "8px 16px", 
              border: "1px solid #5c2c0d", 
              borderRadius: "20px", 
              fontWeight:"bold", 
              display: "inline-block", 
              fontSize:"0.9rem",
              marginBottom:"1.2rem"
            }}>
              Government Certified AIS 140 Devices
            </div>

            <h1 style={{ fontWeight:"bolder",lineHeight: "1.0",margin:"0",marginBottom:"5px",fontSize: "3.6rem",}}>
            <span className="hero-h1" style={{ 
              color: "white" }}
              >AIS140 GPS Tracker for</span>

            <span className="hero-h1" 
            style={{ color: "white",  
             }}></span>
            <span className="hero-h1" 
            style={{ color: "#f07503", marginRight:"20px" }}
            > Government-Compliant</span>

            <span className="hero-h1" 
            style={{ color: "white"}}
            >Vehicle Tracking</span>
            </h1>
             

            <p className="hero-p" 
            style={{ color: "#ffffffb2", 
            fontSize: "1.3rem", 
            margin: "20px 0", 
            marginBottom:"2rem",
            maxWidth: "900px", }}>
              Ensure AIS140 compliance with a reliable GPS tracking solution designed for public transport, commercial fleets, and regulated vehicles.
            </p>

            <div className="btn-group" style={{ display: "flex", marginBottom:"2.5rem", gap: "15px", flexWrap: "wrap" }}>
              <button style={{ backgroundColor: "#ff7b00", color: "white", padding: "15px 30px", border: "none", borderRadius: "10px", cursor: "pointer", fontSize: "18px", fontWeight: "bold" }}>
                View AIS 140 Devices
              </button>
              <button style={{ backgroundColor: "#55555531", color: "white", padding: "15px 30px", border: "1px solid white", borderRadius: "10px", cursor: "pointer", fontSize: "18px" }}>
                Talk to Expert
              </button>
            </div>
            <div style={{ backgroundColor: "#a0a0a04f", height: "0.1px" }}></div>
            

            <div className="stats-bar" style={{ display: "flex", gap: "30px", marginTop: "40px",marginBottom:"1rem", alignItems: "center" }}>
              <div style={{ textAlign: "center" }}>
                <h2 style={{ color: "#ff5100", margin: 0 }}>500+</h2>
                <small style={{ color: "white" }}>Fleet Partners</small>
              </div>
              <div style={{ color: "#ffffff6c", fontSize: "1.4rem" }}>|</div>
              <div style={{ textAlign: "center" }}>
                <h2 style={{ color: "#ff5100", margin: 0 }}>50K+</h2>
                <small style={{ color: "white" }}>Devices Installed</small>
              </div>
              <div style={{ color: "#ffffff6c", fontSize: "1.4rem" }}>|</div>
              <div style={{ textAlign: "center" }}>
                <h2 style={{ color: "#ff5100", margin: 0 }}>99.9%</h2>
                <small style={{ color: "white" }}>Uptime</small>
              </div>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="image-container" style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
            <img 
              src={gps1} 
              alt="GPS" 
              style={{ 
                width: "85%", 
                maxWidth: "100%",
                transform: "translate(140px, 310px)",
                animation: "floatBeat 8s ease-in-out infinite", 
                filter: "drop-shadow(0 0 15px #ff9305e0)" 
              }} 
            />
          </div>

        </div>
      </section>
    </div>
    </>
  );
};