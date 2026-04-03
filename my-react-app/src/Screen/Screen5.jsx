import { useState } from 'react';
import { Bus, Van, Car, FlaskConical, Building2, ArrowRight } from 'lucide-react';

export const Screen5 = () => {
  const [selectedCard, setSelectedCard] = useState({
    icon: Car,
    title: "Taxi & Fleet Services",
    description: "Cab aggregators, rental fleets",
    details: "Improves accountability and trip monitoring"
  });
  
  const [activeCardId, setActiveCardId] = useState(5);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const cardsData = [
    {
      id: 1,
      icon: Bus,
      title: "Public Transport Operators",
      description: "City buses, school buses, staff transport",
      details: "Ensures passenger safety and regulatory compliance"
    },
    {
      id: 2,
      icon: Van,
      title: "Commercial & Logistics Fleets",
      description: "Goods carriers, delivery vehicles",
      details: "Real-time tracking and fleet optimization"
    },
    {
      id: 3,
      icon: FlaskConical,
      title: "Hazardous Goods Vehicles",
      description: "Fuel, chemicals, mining vehicles",
      details: "Emergency alerts and route monitoring"
    },
    {
      id: 4,
      icon: Building2,
      title: "Government & Contract Vehicles",
      description: "Municipal fleets, contractor vehicles",
      details: "Transparent operations and accountability"
    },
    {
      id: 5,
      icon: Car,
      title: "Taxi & Fleet Services",
      description: "Cab aggregators, rental fleets",
      details: "Improves accountability and trip monitoring"
    }
  ];

  const handleCardClick = (card) => {
    setSelectedCard({
      icon: card.icon,
      title: card.title,
      description: card.description,
      details: card.details
    });
    setActiveCardId(card.id);
  };

  return (
    <>
      <div className='all' style={{ overflow: "hidden", backgroundColor: "#2e2925" }}>

        <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
          <button style={{ alignContent: "center", backgroundColor: "#ff73003b", color: "#fd7302", padding: "6px 16px",
              fontSize: "13px", borderRadius: "20px", fontWeight: "bold", border: "1px solid #ff5100", }}>
            <>Industry Solutions</> </button>
        </div>

        <div className="screen2head"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "30px"
          }}
        >
          <h1 style={{ color: "white", fontSize: "50px", marginBottom: "10px" }}>Who Needs an AIS140 GPS Tracker?</h1>
          <h6 style={{ color: "#c0c0c0e7", margin: 0 }}> AIS140 is mandatory for various commercial and public transport categories across India. </h6>
        </div>

        <div className="grid grid-cols-1 mb-10 md:grid-cols-2 pl-0 mx-10 md:mx-12 lg:mx-16" style={{ gap: "20px" }}>
          <div className="grid" style={{ gap: "15px" }}>
            {cardsData.map((card) => (
              <div 
                key={card.id} 
                onClick={() => handleCardClick(card)}
                onMouseEnter={() => setHoveredCardId(card.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                style={{ cursor: "pointer" }}
              >
                <div style={{ 
                  backgroundColor: "#000000", 
                  padding: "14px 15px", 
                  borderRadius: "10px",
                  border: activeCardId === card.id ? "1px solid #99999900" : "1px solid #504e4e00", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between",
                  gap: "15px",
                  transition: "all 0.3s ease",
                  backgroundColor: activeCardId === card.id ? "#ff7300" : "#000000"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "15px", flex: 1 }}>
                    <div style={{ 
                      backgroundColor: activeCardId === card.id ? "#fa8d44" : "#2b1d14", 
                      color: activeCardId === card.id ? "#ffffff" : "#f97015", 
                      padding: "12px 12px", 
                      fontSize: "20px",
                      borderRadius: "12px", 
                      fontWeight: "bold", 
                      border: "1px solid #ff88000c",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: "44px",
                      minHeight: "44px"
                    }}>
                      <card.icon size={24} style={{ color: activeCardId === card.id ? "#ffffff" : "#f97015" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ color: "white", fontSize: "16px", margin: 0, marginBottom: "4px" }}>{card.title}</h4>
                      <p style={{ color: "#cacaca", fontSize: "14px", margin: 0 }}>{card.description}</p>
                    </div>
                  </div>
                  {(hoveredCardId === card.id || activeCardId === card.id) && (
                    <div style={{ marginRight: "10px" }}>
                      <ArrowRight size={20} color="#ffffff" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1" style={{ marginLeft: "20px" }}>
            <div style={{ backgroundColor: "#160f08", padding: "30px", borderRadius: "20px",
                border: "1px solid  #4e504e00", height: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "24px" }}>
                <div style={{ backgroundColor: "#f97015", display: "flex",
                    color: "#ffffff", justifyContent: "center", alignItems: "center", width: "85px", height: "80px",
                    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff880000" }}>
                  <selectedCard.icon size={50} />
                </div>
                <div style={{ width: "100%" }}>
                  <h4 style={{ color: "white", fontSize: "30px", fontWeight: "bolder", margin: 0, padding: 0, lineHeight: "1.2" }}>{selectedCard.title}</h4>
                  <p style={{ color: "#ff7300", fontWeight: "bold", margin: 0, padding: 0, marginTop: "12px", lineHeight: "1.2" }}>{selectedCard.description}</p>
                  <h6 style={{ color: "#cfcfcf", fontWeight: "lighter", fontSize: "20px", margin: 0, padding: 0, marginTop: "16px", lineHeight: "1.3" }}>{selectedCard.details}</h6>
                </div>
                <div style={{ display: "flex", gap: "12px", justifyContent: "flex-start", width: "100%", flexWrap: "wrap" }}>
                  <div style={{
                      backgroundColor: "#b3390023",
                      color: "#ff5100",
                      padding: "8px 16px",
                      border: "1px solid #ff510000",
                      borderRadius: "20px",
                      fontWeight: "bold",
                      display: "inline-block",
                      fontSize: "12px"
                    }}>
                    AIS 140 Certified
                  </div>
                  <div style={{
                      backgroundColor: "#b3390023",
                      color: "#ff5100",
                      padding: "8px 16px",
                      border: "1px solid #ff510000",
                      borderRadius: "20px",
                      fontWeight: "bold",
                      display: "inline-block",
                      fontSize: "12px",
                    }}>
                    VLTD Approved
                  </div>
                  <div style={{
                      backgroundColor: "#b3390023",
                      color: "#ff5100",
                      padding: "8px 16px",
                      border: "1px solid #ff510000",
                      borderRadius: "20px",
                      fontWeight: "bold",
                      display: "inline-block",
                      fontSize: "12px"
                    }}>
                    IRNSS/GPS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
    </>
  );
};