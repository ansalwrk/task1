import React from "react";
import screen2 from "../assets/screen2.png";

export const Screen1 = () => {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5%",
        boxSizing: "border-box",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      {/* Main Container: Responsive Flex */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "40px",
          maxWidth: "1200px",
          width: "100%",
          alignItems: "center",
        }}
      >
        {/* Left Content Side */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <button
            style={{
              backgroundColor: "#b3390023",
              color: "#ff5100",
              padding: "10px 20px",
              fontSize: "14px",
              borderRadius: "20px",
              fontWeight: "bolder",
              border: "1px solid #ff5100",
              marginBottom: "24px",
              cursor: "pointer",
            }}
          >
            Government Mandate
          </button>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "white",
              lineHeight: "1.2",
              margin: "0 0 20px 0",
            }}
          >
            What is the AIS140 GPS Tracking System?
          </h1>

          <p
            style={{
              fontWeight: "lighter",
              color: "#ffffffb7",
              lineHeight: "1.6",
              fontSize: "1.1rem",
              margin: "0 0 30px 0",
              maxWidth: "600px",
            }}
          >
            AIS 140 is an Indian government-mandated standard for vehicle tracking
            systems, issued by the Automotive Industry Standards Committee (AISC).
            It ensures real-time vehicle monitoring, emergency response, and
            passenger safety, especially for public and commercial vehicles.
            <br /><br />
            An AIS140 GPS tracker integrates location tracking, emergency alerts, and
            secure data transmission to approved servers, helping fleet owners and
            transport authorities maintain compliance and safety.
          </p>


        </div>

        {/* Right Image Side */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#1a1a1a",
              padding: "20px",
              borderRadius: "24px",
              width: "100%",
              maxWidth: "500px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src={screen2}
              alt="AIS140 Device"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};