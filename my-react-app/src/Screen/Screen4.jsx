import { Cog, Heart, Shield, Laptop, ShieldOff } from 'lucide-react';
import screen4 from "../assets/screen4img.png";

export const Screen4 = () => {
  return (
    <section id="Benefits">
      <div style={{ backgroundColor: "#080400" }}>
        <div style={{ paddingBottom: "4rem", marginTop: "-6rem" }}>
          <div
            style={{
              backgroundColor: "#d45b0b52",
              color: "#ff7b00c5",
              padding: "5px 16px",
              borderRadius: "20px",
              fontWeight: "bold",
              marginTop: "5rem",
              marginLeft: "65px",
              fontSize: "13px",
              display: "inline-block",
              marginBottom: "15px",
              width: "auto",
            }}
          >
            Benefits
          </div>

          <div>
            <div className="grid grid-cols-1 ml-4 md:ml-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 md:mx-12 lg:mx-16">
                <div>
                  <h1
                    style={{
                      fontSize: "2.1rem",
                      color: "white",
                      fontWeight: "bolder",
                      lineHeight: "1.2",
                      margin: "0 0 20px 0",
                    }}
                  >
                    Benefits of Using AIS 140 GPS<br /> Tracking Devices
                  </h1>
                  <div className="grid gap-y-3 mr-10">
                    <div
                      style={{
                        backgroundColor: "#47464665",
                        padding: "12px",
                        borderRadius: "10px",
                        border: "1px solid #504e4e00",
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#f0540c42",
                          color: "#ff7b00",
                          padding: "8px",
                          fontSize: "20px",
                          borderRadius: "12px",
                          fontWeight: "bold",
                          border: "1px solid #ff880031",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: "44px",
                          height: "44px",
                        }}
                      >
                        <Shield size={20} />
                      </div>
                      <div>
                        <h4 style={{ color: "white", fontSize: "1.2rem", margin: "0 0 5px 0" }}>
                          Government Compliance Made Easy
                        </h4>
                        <p style={{ color: "#c0c0c0", fontSize: "0.9rem", margin: 0 }}>
                          Meets AIS 140 regulations required for approved vehicle categories.
                        </p>
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: "#47464665",
                        padding: "12px",
                        borderRadius: "10px",
                        border: "1px solid #504e4e00",
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#f0540c42",
                          color: "#ff7b00",
                          padding: "8px",
                          fontSize: "20px",
                          borderRadius: "12px",
                          fontWeight: "bold",
                          border: "1px solid #ff880031",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: "44px",
                          height: "44px",
                        }}
                      >
                        <Heart size={20} />
                      </div>
                      <div>
                        <h4 style={{ color: "white", fontSize: "1.2rem", margin: "0 0 5px 0" }}>
                          Improved Passenger & Driver Safety
                        </h4>
                        <p style={{ color: "#c0c0c0", fontSize: "0.9rem", margin: 0 }}>
                          Faster emergency response and continuous monitoring.
                        </p>
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: "#47464665",
                        padding: "12px",
                        borderRadius: "10px",
                        border: "1px solid #504e4e00",
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#f0540c42",
                          color: "#ff7b00",
                          padding: "8px",
                          fontSize: "20px",
                          borderRadius: "12px",
                          fontWeight: "bold",
                          border: "1px solid #ff880031",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: "44px",
                          height: "44px",
                        }}
                      >
                        <Cog size={20} />
                      </div>
                      <div>
                        <h4 style={{ color: "white", fontSize: "1.2rem", margin: "0 0 5px 0" }}>
                          Better Fleet Control
                        </h4>
                        <p style={{ color: "#c0c0c0", fontSize: "0.9rem", margin: 0 }}>
                          Monitor vehicle usage, routes, and driving behavior efficiently.
                        </p>
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: "#47464665",
                        padding: "12px",
                        borderRadius: "10px",
                        border: "1px solid #504e4e00",
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#f0540c42",
                          color: "#ff7b00",
                          padding: "8px",
                          fontSize: "20px",
                          borderRadius: "12px",
                          fontWeight: "bold",
                          border: "1px solid #ff880031",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: "44px",
                          height: "44px",
                        }}
                      >
                        <ShieldOff size={20} />
                      </div>
                      <div>
                        <h4 style={{ color: "white", fontSize: "1.2rem", margin: "0 0 5px 0" }}>
                          Reduced Operational Risks
                        </h4>
                        <p style={{ color: "#c0c0c0", fontSize: "0.9rem", margin: 0 }}>
                          Prevent unauthorized usage, theft, and misuse.
                        </p>
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: "#47464665",
                        padding: "12px",
                        borderRadius: "10px",
                        border: "1px solid #504e4e00",
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#f0540c42",
                          color: "#ff7b00",
                          padding: "8px",
                          fontSize: "20px",
                          borderRadius: "12px",
                          fontWeight: "bold",
                          border: "1px solid #ff880031",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: "44px",
                          height: "44px",
                        }}
                      >
                        <Laptop size={20} />
                      </div>
                      <div>
                        <h4 style={{ color: "white", fontSize: "1.2rem", margin: "0 0 5px 0" }}>
                          Centralized Monitoring
                        </h4>
                        <p style={{ color: "#c0c0c0", fontSize: "0.9rem", margin: 0 }}>
                          Access vehicle data from the web or mobile dashboard anytime.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <img
                    src={screen4}
                    alt="BG"
                    style={{
                      width: "90%",
                      height: "80%",
                      objectFit: "cover",
                      justifyContent: "center",
                      zIndex: 0,
                      borderRadius: "30px",
                      marginTop: "6rem",
                    }}
                  />
                </div>    <section id ="Industries"></section>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};