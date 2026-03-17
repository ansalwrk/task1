import React from "react";
import screen2 from "../assets/screen2.png";

export const Screen1 = () => {
  // Reusable button style to keep code clean
  const circleButtonStyle = {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#ff5100",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "8px",
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "1",
    minWidth: "80px",
  };

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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "60px",
          maxWidth: "1200px",
          width: "100%",
          alignItems: "center",
        }}
      >
        {/* Left Content Side */}
        <div style={{ flex: "1.2", minWidth: "320px" }}>
          <button
            style={{
              backgroundColor: "#b3390023",
              color: "#ff5100",
              padding: "8px 18px",
              fontSize: "13px",
              borderRadius: "20px",
              fontWeight: "bold",
              border: "1px solid #ff5100",
              marginBottom: "20px",
            }}
          >
           Government Mandate
          </button>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 2.8rem)",
              color: "white",
              lineHeight: "1.2",
              margin: "0 0 20px 0",
            }}
          >
            What is the AIS140 <br /> GPS Tracking System?
          </h1>

          <p
            style={{
              fontWeight: "300",
              color: "#ffffffb7",
              lineHeight: "1.7",
              fontSize: "1.05rem",
              margin: "0 0 35px 0",
              maxWidth: "550px",
            }}
          >
            AIS 140 is an Indian government-mandated standard for vehicle tracking
            systems, issued by the Automotive Industry Standards Committee (AISC).
            It ensures real-time vehicle monitoring and passenger safety.
            <br /><br />
            An AIS140 GPS tracker integrates location tracking, emergency alerts, and
            secure data transmission to approved servers.
          </p>

<div class="grid grid-cols-2 gap-4">
  <div style={{
              backgroundColor: "#111111",
              padding: "30px",
              borderRadius: "28px",
              width: "100%",
              maxWidth: "500px",
              border: "1px solid #222",
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
            }}><h6  style={{
              color:"white",
            }}> <div style={{
              backgroundColor: "#b3390023",
              color: "#ff5100",
              padding: "8px 18px",
              fontSize: "13px",
              borderRadius: "20px",
              fontWeight: "bold",
              border: "1px solid #ff5100",
              marginBottom: "20px",
            }}
          ></div>01    Real-time GPS Tracking</h6> </div>
            
  <div style={{
              backgroundColor: "#111111",
              padding: "30px",
              borderRadius: "28px",
              width: "100%",
              maxWidth: "500px",
              border: "1px solid #222",
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
            }}><h6  style={{
              color:"white",
            }}> <div style={{
              backgroundColor: "#b3390023",
              color: "#ff5100",
              padding: "8px 18px",
              fontSize: "13px",
              borderRadius: "20px",
              fontWeight: "bold",
              border: "1px solid #ff5100",
              marginBottom: "20px",
            }}
          ></div>02  Emergency SOS Alerts</h6>
            </div>

  <div style={{
              backgroundColor: "#111111",
              padding: "30px",
              borderRadius: "28px",
              width: "100%",
              maxWidth: "500px",
              border: "1px solid #222",
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
            }}><h6  style={{
              color:"white",
            }}> <div style={{
              backgroundColor: "#b3390023",
              color: "#ff5100",
              padding: "8px 18px",
              fontSize: "13px",
              borderRadius: "20px",
              fontWeight: "bold",
              border: "1px solid #ff5100",
              marginBottom: "20px",
            }}
          ></div>03   Secure Data Transmission  </h6>
            </div>
  <div style={{
              backgroundColor: "#111111",
              padding: "30px",
              borderRadius: "28px",
              width: "100%",
              maxWidth: "500px",
              border: "1px solid #222",
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
            }}><h6  style={{
              color:"white",
            }}> <div style={{
              backgroundColor: "#b3390023",
              color: "#ff5100",
              padding: "8px 18px",
              fontSize: "13px",
              borderRadius: "20px",
              fontWeight: "bold",
              border: "1px solid #ff5100",
              marginBottom: "20px",
            }}
          ></div>04 Compliance Reporting</h6>
            </div>
</div>



        </div>

        {/* Right Card Side */}
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
              backgroundColor: "#111111",
              padding: "30px",
              borderRadius: "28px",
              width: "100%",
              maxWidth: "500px",
              border: "1px solid #222",
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
            }}
          >
            <img
              src={screen2}
              alt="AIS140 Device"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "16px",
                marginBottom: "30px",
              }}
            />

            {/* Bottom Steps Section */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <div style={columnStyle}>
                <button style={circleButtonStyle}>1</button>
                <p style={{ color: "white", fontSize: "11px", margin: 0 }}>Vehicle</p>
              </div>

              <div style={columnStyle}>
                <button style={circleButtonStyle}>2</button>
                <p style={{ color: "white", fontSize: "11px", margin: 0 }}>GPS Device</p>
              </div>

              <div style={columnStyle}>
                <button style={circleButtonStyle}>3</button>
                <p style={{ color: "white", fontSize: "11px", margin: 0, textAlign: "center" }}>Cloud Server</p>
              </div>

              <div style={columnStyle}>
                <button style={circleButtonStyle}>4</button>
                <p style={{ color: "white", fontSize: "11px", margin: 0 }}>Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};