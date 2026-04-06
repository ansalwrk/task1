import React from "react";
import screen2 from "../assets/screen2.png";
import { Shield ,BetweenHorizontalStart,Laptop, Satellite } from 'lucide-react';

export const Screen1 = () => {
  // Reusable Styles
  const circleButtonStyle = {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#f97015",
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

  const featureCardStyle = {
    backgroundColor: "#262626",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #222",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const numberBadgeStyle = {
    backgroundColor: "#b3390023",
    color: "#ff5100",
    padding: "9px 9px",
    fontSize: "12px",
    borderRadius: "8px",
    fontWeight: "bold",
    border: "1px solid #d39b2213",
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
        padding: "",
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
          marginTop:"4rem"
        }}
      >
        {/* Left Content Side */}
        <div style={{ flex: "1.2", minWidth: "320px" }}>
          <button
            style={{
              backgroundColor: "#b365003f",
              color: "#ff7300",
              padding: "4px 17px",
              fontSize: "13px",
              borderRadius: "20px",
              fontWeight: "bold",
              display:"flex",
              border: "1px solid #ff51001a",
              marginBottom: "15px",
            
            }}
          >
            <i class="bi bi-shield"></i> <Shield size={20} color="#ff5100" style={{ marginRight:"10px"}}/> Government Mandate
          </button>
          

          <h1
            style={{
              fontSize: "2.2rem",
              color: "white",
              lineHeight: "1.2",
              margin: "0 0 20px 0",
              fontWeight:"bolder",
              Width:"1250px"
            }}
          >
            What is the AIS140 GPS Tracking System?
          </h1>

          <p
            style={{
              fontWeight: "300",
              color: "#ffffff81",
              lineHeight: "1.7",
              fontSize: "17px",
              margin: "0 0 35px 0",
              maxWidth: "650px",
              fontWeight:"lighter"
            }}
          >AIS 140 is an Indian government-mandated standard for vehicle tracking systems,
           issued by the Automotive Industry Standards Committee (AISC). <br/>It ensures real-time vehicle monitoring,
            emergency response, and <br/>  passenger safety, especially for public and commercial vehicles.
            <br/><br/>
          An AIS140 GPS tracker integrates location tracking,
          emergency alerts, and secure data transmission to approved servers,
           helping fleet owners and transport authorities maintain compliance and safety.







          </p>

          {/* Features Grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 pb-5 gap-3"  
          
          style={{  color: "#dddddd", margin: "0",  }}>

            <div style={featureCardStyle}>
              <div style={numberBadgeStyle}><Satellite size={20} color="#f97015" /></div>
              <h6 style={{ fontSize:"15px",fontstyle:"Inter,system-ui,sans-serif",fontWeight:"bold"}}>Real-time GPS Tracking</h6>
            </div>

            <div style={featureCardStyle}>
              <div style={numberBadgeStyle}><Shield size={20} color="#f97015"/></div>
              <h6 style={{ fontSize:"15px",fontstyle:"Inter,system-ui,sans-serif",fontWeight:"bold"}}>Emergency SOS Alerts</h6>
            </div>

            <div style={featureCardStyle}>
              <div style={numberBadgeStyle}><BetweenHorizontalStart size={20} color="#f97015"/></div>
              <h6 style={{ fontSize:"15px",fontstyle:"Inter,system-ui,sans-serif",fontWeight:"bold"}}>Secure Data Transmission</h6>
            </div>

            <div style={featureCardStyle}>
              <div style={numberBadgeStyle}><Laptop size={20} color="#f97015" /></div>
              <h6 style={{ fontSize:"15px",fontstyle:"Inter,system-ui,sans-serif",fontWeight:"bold"}}>Compliance Reporting</h6>
            </div>
          </div>
        </div>

        {/* Right Card Side */}
        <div style={{ flex: "1", minWidth: "300px", display: "flex", justifyContent: "center" }}>
          <div
            style={{
              backgroundColor: "#262626",
              padding: "30px",
              marginBottom:"0rem",
              borderRadius: "28px",
              width: "100%",
              maxWidth: "800px",
              border: "1px solid #222",
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
            }}
          ><h1 style={{fontSize:"1.2rem",textAlign:"center",fontWeight:"bold",color:"white"}}>How AIS140 Tracking Works</h1>
            <img
              src={screen2}
              alt="AIS140 Device"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                marginBottom: "30px",
              }}
            />
          

            <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
              <div style={columnStyle}>
                <button style={circleButtonStyle}>1</button>
                <p style={{ color: "#a6a69a", fontSize: "12px", margin: 0 }}>Vehicle</p>
              </div>
              <div style={columnStyle}>
                <button style={circleButtonStyle}>2</button>
                <p style={{ color: "#a6a69a", fontSize: "12px", margin: 0 }}>GPS Device</p>
              </div>
              <div style={columnStyle}>
                <button style={circleButtonStyle}>3</button>
                <p style={{ color: "#a6a69a", fontSize: "12px", margin: 0, textAlign: "center" }}>Cloud Server</p>
              </div>
              <div style={columnStyle}>
                <button style={circleButtonStyle}>4</button>
                <p style={{ color: "#a6a69a", fontSize: "12px", margin: 0 }}>Dashboard</p>
                <br/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};