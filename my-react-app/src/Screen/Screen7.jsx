import { Zap } from 'lucide-react';
import screen6 from "../assets/screen6.png";

export const Screen7 = () => {

  const fontStyle = {
    fontFamily: "Poppins, Inter, system-ui, sans-serif"
  };

  return (
    <>
      <div style={{ backgroundColor: "#000000", padding: "70px 0px 0px 0px" }}>
        <div className="grid grid-cols-1 mx-20">
          
          {/* Row 1 - Left Aligned Only */}
          <div style={{ 
            backgroundColor: "#0e0e0e", 
            padding: "18px", 
            borderRadius: "15px 15px 0px 0px",
            border: "1px solid #52525256",
            display: "flex", 
            alignItems: "center", 
            gap: "5px",
            justifyContent: "flex-start", // This ensures left alignment
            ...fontStyle
          }}>
            <div style={{ 
              backgroundColor: "#b9630000", 
              color: "#ff8800", 
              padding: "6px 12px", 
              fontSize: "19px",
              borderRadius: "12px", 
              fontWeight: "bold", 
              border: "1px solid #ff880000",
            }}><Zap /></div>
            <div>
              <h4 style={{ color: "white", fontSize: "19px", ...fontStyle }}>2G vs 4G – Quick Comparison</h4>
            </div>
          </div>

          {/* Row 2 - Center Aligned */}
          <div 
            className="grid grid-cols-3" 
            style={{ 
              backgroundColor: "#52525256", 
              border: "0.0.10px solid #e2090900",
              padding: "16px",
              textAlign: "center",
              ...fontStyle
            }}
          >
            <h4 style={{ color: "#e2e2e2",textAlign:"left", fontSize: "15px", ...fontStyle }}>Feature</h4>
            <h4 style={{ color: "#e2e2e2", fontSize: "15px", ...fontStyle }}>2G Device</h4>
            <h4 style={{ color: "#e2e2e2", fontSize: "15px", ...fontStyle }}>4G Device</h4>
          </div>

          {/* Row 3 and below - Center Aligned */}
          <div 
            className="grid grid-cols-3" 
            style={{ 
              backgroundColor: "#111111f3", 
              border: "0.1px solid #52525256",
              padding: "16px",
              textAlign: "center",
              ...fontStyle
            }}
          >
            <h4 style={{ color: "#858585",textAlign:"left", fontSize: "15px", ...fontStyle }}>Data Speed</h4>
            <h4 style={{ color: "#858585", fontSize: "15px", ...fontStyle }}>Basic</h4>
            <h4 style={{ color: "#ff5e00", fontSize: "15px", ...fontStyle }}>High-speed</h4>
          </div>
          
          <div 
            className="grid grid-cols-3" 
            style={{ 
              backgroundColor: "#111111f3", 
              border: "0.1px solid #52525256",
              padding: "16px",
              textAlign: "center",
              ...fontStyle
            }}
          >
            <h4 style={{ color: "#858585",textAlign:"left", fontSize: "15px", ...fontStyle }}>Network Coverage</h4>
            <h4 style={{ color: "#858585", fontSize: "15px", ...fontStyle }}>Urban areas</h4>
            <h4 style={{ color: "#ff5e00", fontSize: "15px", ...fontStyle }}>Pan-India</h4>
          </div>
          
          <div 
            className="grid grid-cols-3" 
            style={{ 
              backgroundColor: "#111111f3", 
              border: "0.1px solid #52525256",
              padding: "16px",
              textAlign: "center",
              ...fontStyle
            }}
          >
            <h4 style={{ color: "#858585", textAlign:"left", fontSize: "15px", ...fontStyle }}>Accuracy</h4>
            <h4 style={{ color: "#858585", fontSize: "15px", ...fontStyle }}>Standard GPS</h4>
            <h4 style={{ color: "#ff5e00", fontSize: "15px", ...fontStyle }}>Multi-constellation GNSS</h4>
          </div>
          
          <div 
            className="grid grid-cols-3" 
            style={{ 
              backgroundColor: "#111111f3", 
              border: "0.1px solid #52525256",
              padding: "16px",
              textAlign: "center",
              ...fontStyle
            }}
          >
            <h4 style={{ color: "#858585",textAlign:"left", fontSize: "15px", ...fontStyle }}>Future-proof</h4>
            <h4 style={{ color: "#858585", fontSize: "15px", ...fontStyle }}>Limited</h4>
            <h4 style={{ color: "#ff5e00", fontSize: "15px", ...fontStyle }}>Yes</h4>
          </div>

          <div 
            className="grid grid-cols-3" 
            style={{ 
              borderRadius: "0px 0px 15px 15px",
              backgroundColor: "#111111f3", 
              border: "0.1px solid #52525256",
              padding: "16px",
              textAlign: "center",
              ...fontStyle
            }}
          >
            <h4 style={{ color: "#858585",textAlign:"left", fontSize: "15px", ...fontStyle }}>Price</h4>
            <h4 style={{ color: "#858585", fontSize: "15px", ...fontStyle }}>Lower</h4>
            <h4 style={{ color: "#ff5e00", fontSize: "15px", ...fontStyle }}>Premium</h4>
          </div>
        </div>
      </div>
    </>
  );
};