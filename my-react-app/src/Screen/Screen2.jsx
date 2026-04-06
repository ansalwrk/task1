import { Eye, Check, X, Clock, CardSim, User, Car } from 'lucide-react';

export const Screen2 = () => {
  return (
    <>
      <div style={{ overflow: "hidden", backgroundColor: "#292929" }}>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px", marginBottom: "20px" }}>
          <button
            style={{
              alignContent: "center",
              backgroundColor: "#ff07072c",
              color: "#ff3737ef",
              padding: "2px 15px",
              fontSize: "1px",
              borderRadius: "20px",
              fontWeight: "bold",
              border: "1px solid #ff51002a",
            }}
          >
            <h6 style={{ fontSize: "13px" }}>⚠︎ Common Challenges</h6>
          </button>
        </div>

        <div
          className="screen2head"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0px 20px 30px 20px",
            marginTop: "-5px"
          }}
        >
          <h2 style={{ color: "white", fontSize: "2.2rem", fontWeight: "bolder", marginBottom: "12px" }}>
            Challenges Without AIS140 Tracking
          </h2>

          <h6 style={{ color: "#c0c0c0e7", fontWeight: "normal", fontSize: "1.1rem" }}>
            Operating vehicles without proper tracking leads to compliance issues and safety risks.
          </h6>
        </div>

        <div className="grid grid-cols-1 mx-30 md:grid-cols-2 gap-5 md:gap-6 px-4 lg:px-8">
          <div
            className="rounded-[20px] h-auto lg:h-[404px] bg-black outline p-6"
            style={{ border: "1px solid #401d1d" }}
          >
            <div className="grid grid-cols-1">
              <div
                style={{
                  backgroundColor: "#11111100",
                  padding: "8px 10px",
                  borderRadius: "20px",
                  border: "1px solid #00000000",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "4px",
                  marginTop: "10px"
                }}
              >
                <div
                  style={{
                    backgroundColor: "#2a1919",
                    color: "#ff0000",
                    padding: "6px 12px",
                    borderRadius: "12px",
                    fontWeight: "bold",
                    border: "1px solid #ff000000",
                    minWidth: "54px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <X size={30} color="#ef4343" />
                </div>
                <h4 style={{ color: "white" }}> Without AIS140</h4>
              </div>

              {[
                { icon: Eye, text: "No real-time visibility of vehicle location" },
                { icon: Clock, text: "Delayed response during emergencies or accidents" },
                { icon: CardSim, text: "Difficulty meeting government compliance requirements" },
                { icon: User, text: "Poor monitoring of driver behavior" },
                { icon: Car, text: "Limited control over vehicle misuse or unauthorized movement" }
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#00000000",
                    padding: "8px 10px",
                    borderRadius: "20px",
                    border: "1px solid #00000000",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#2a1919",
                      color: "#ff0000",
                      padding: "6px 12px",
                      fontSize: "13px",
                      borderRadius: "12px",
                      fontWeight: "bold",
                      border: "1px solid #ff000000",
                      minWidth: "54px",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <item.icon size={18} color="#ef4343" />
                  </div>
                  <h6 style={{ color: "#ffffff9c", margin: 0 }}>{item.text}</h6>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-[20px] h-auto lg:h-[404px] bg-black outline p-6"
            style={{ border: "1px solid #173723" }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom:"-20px" }}>
              <button
                style={{
                  backgroundColor: "#15261b",
                  color: "#1fc45d",
                  padding: "2px 12px",
                  fontSize: "12px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  border: "1px solid #ff510000",
                }}
              >
                <>Recommended</>
              </button>
            </div>

            <div
              style={{
                backgroundColor: "#11111100",
                padding: "8px 10px",
                borderRadius: "20px",
                border: "1px solid #00000000",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "4px",
                marginTop: "10px"
              }}
            >
              <div
                style={{
                  backgroundColor: "#21b60d4b",
                  color: "#00ff0d",
                  padding: "5px 10px",
                  borderRadius: "12px",
                  fontWeight: "normal",
                  border: "1px solid #00ff0d1c",
                  minWidth: "54px",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <Check size={30} color="#37ff00" />
              </div>
              <h4 style={{ color: "white" }}> With AIS140</h4>
            </div>

            {[
              "Real-time visibility of all vehicles 24/7",
              "Instant emergency alerts and SOS response",
              "Full government compliance guaranteed",
              "Complete driver behavior monitoring",
              "Full control with geofencing and route tracking"
            ].map((text, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#00000000",
                  padding: "8px 10px",
                  borderRadius: "20px",
                  border: "1px solid #00000000",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#21b60d4b",
                    color: "#00ff0d",
                    padding: "6px 12px",
                    fontSize: "13px",
                    borderRadius: "12px",
                    fontWeight: "normal",
                    border: "1px solid #00ff0d1c",
                    minWidth: "54px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <Check size={18} color="#37ff00" />
                </div>
                <h6 style={{ color: "white", margin: 0 }}>{text}</h6>
              </div>
            ))}
          </div>
        </div>

        <div
          className="screen2head"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "30px 20px 40px 20px",
            gap: "7px",
          }}
        >
          <p style={{ color: "#c9c9c9be", fontWeight: "normal", fontSize: "18px", lineHeight: "1.5" }}>
            An AIS140 vehicle tracking system continuously transmits vehicle data, triggers instant alerts, and maintains logs required for compliance and operational<br/> control.
          </p>
        </div>
      </div>
<section id ="Features"></section>
      <div style={{ backgroundColor: "#000000", padding: "20px 0 40px 0" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <button
            style={{
              marginTop:"90px",
              alignContent: "center",
              backgroundColor: "#22140b",
              color: "#f97012",
              padding: "6px 16px",
              fontSize: "13px",
              borderRadius: "20px",
              fontWeight: "bold",
              border: "1px solid #ff5100",
            }}
          >
            <>Key Features</>
          </button>
        </div>

        <div
          className="screen2head"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "12px",
            padding: "0 20px",
            }}
        >
          <h1 style={{ color: "white", fontSize: "42px", marginBottom: "8px" }}>AIS 140 GPS Tracker – Key Features</h1>

          <h6 style={{ color: "#777777e7", fontSize: "1rem", fontWeight: "normal" }}>
            Comprehensive tracking capabilities designed for compliance and operational excellence.
          </h6>
        </div>
      </div>
      
    </>
  );
};