import React from "react";
import screen2 from "../assets/screen2.png";

export const Screen1 = () => {
  return (
    <>
      <div
        className="screen1full"
        style={{
          display: "flex",
          flexDirection: "row", // Side-by-side layout
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "#000000",
          padding: "5%",
          boxSizing: "border-box",
          flexWrap: "wrap"
        }}
      >
        <div 
          className="content-left" 
          style={{ 
            flex: "1", 
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            gap: "20px" 
          }}
        >
          <div className="screen1-box1">
            <button
              style={{
                backgroundColor: "#b3390023",
                color: "#ff5100",
                padding: "10px 20px",
                cursor: "pointer",
                fontSize: "14px",
                borderRadius: "20px",
                fontWeight: "bolder",
                border: "1px solid #ff5100",
              }}
            >
              Government Mandate
            </button>
          </div>

          <div className="2nd-heading">
            <h1
              style={{
                fontSize: "2.5rem",
                color: "white",
                margin: 0,
                fontFamily: "Helvetica, Arial, sans-serif",
                lineHeight: "1.2"
              }}
            >
              What is the AIS140 GPS Tracking <br /> System?
            </h1>
          </div>

          <div className="2nd-p">
            <p
              style={{
                fontWeight: "lighter",
                color: "#ffffffb7", // Adjusted color to be visible on dark bg
                maxWidth: "90%",
                fontFamily: "Helvetica, Arial, sans-serif",
                lineHeight: "1.6",
                margin: 0
              }}
            >
              AIS 140 is an Indian government-mandated standard for vehicle tracking<br/>
              systems, issued by the Automotive Industry Standards Committee (AISC).<br/>
              It ensures real-time vehicle monitoring, emergency response, and<br/>
              passenger safety, especially for public and commercial vehicles.<br/>
              <br/>
              An AIS140 GPS tracker integrates location tracking, emergency alerts, and<br/>
              secure data transmission to approved servers, helping fleet owners and<br/>
              transport authorities maintain compliance and safety.<br/>
            </p>
          </div>
        </div>

        {/* Right Side: Image Container */}
        <div
          className="screen2"
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "30px",
            padding: "0px"
          }}
        >
          <div style={{
            backgroundColor: "#292929fa",
            padding: "20px",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: "500px"
          }}>
            <img
              src={screen2}
              alt="screen2"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>

        
        </div>
      </div>
    </>
  );
};