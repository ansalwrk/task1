import { Cog ,Heart,Shield,Laptop, ShieldOff } from 'lucide-react';
import screen8 from "../assets/screen4img.png";
export const Screen8 = () => {


return (

<>


<div style={{

  backgroundColor:"#000000",padding:"150px 0px 0px 0px "}}     >       
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 md:ml-10">

          </div>






  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 m-2 md:m-3">




    <div>


        <img 
          src={screen8} 
          alt="BG" 
          style={{ 


            width: "100%", height: "80%", 
            objectFit: "cover", 
            justifyContent:"center",
            zIndex: 0, 
            borderRadius:"30px"
          }} 
        />
</div>
    

    <div >
            <div style={{ 
              backgroundColor: "#b3390023", 
              color: "#ff5100", 
              padding: "8px 16px", 
              border: "1px solid #ff5100", 
              borderRadius: "20px", 
              fontWeight: "bold", 
              display: "inline-block", 
              marginBottom: "15px" 
            }}>
              Why GPSCop
            </div>


        <div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 2.8rem)",
              color: "white",
              lineHeight: "1.2",
              margin: "0 0 20px 0",
            }}
          >
           Why GPSCop AIS 140 Vehicle Tracking System?
          </h1>
          <p>We provide end-to-end GPS tracking solutions with certified devices, robust software, and dedicated support.</p>
          </div>



        
    <div style={{ backgroundColor: "#44444480",  padding: "10px", borderRadius: "20px",
      border: "1px solid #504e4e",display:"flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#b9630096", color: "#ff8800", padding: "6px 12px", fontSize: "20px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff8800",}}><Shield /></div>
    <div>
       <h4  style={{color:"white",fontSize:"20px"}}> Government Compliance Made Easy</h4>
       <p style={{ color:"white",}}> Meets AIS 140 regulations required for approved vehicle categories.</p>
    </div>
    </div>
<br/>
    <div style={{ backgroundColor: "#44444480",  padding: "10px", borderRadius: "20px",
      border: "1px solid #504e4e", display: "flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#b9630096", color: "#ff8800", padding: "6px 12px", fontSize: "25px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff8800",}}><Heart /></div>
    <div>
       <h4  style={{color:"white",fontSize:"20px"}}> Improved Passenger & Driver Safety</h4>
       <p style={{ color:"white",}}> Faster emergency response and continuous monitoring.</p>
    </div>
    </div>


<br/>
    <div style={{ backgroundColor: "#44444480",  padding: "10px", borderRadius: "20px",
      border: "1px solid #504e4e", display: "flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#b9630096", color: "#ff8800", padding: "6px 12px", fontSize: "25px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff8800",}}><Cog/></div>
    <div>
       <h4  style={{color:"white",fontSize:"20px"}}> Better Fleet Control</h4>
       <p style={{ color:"white",}}>Monitor vehicle usage, routes, and driving behavior efficiently.</p>
    </div>
    </div>

    <br/>
    <div style={{ backgroundColor: "#44444480",  padding: "10px", borderRadius: "20px",
      border: "1px solid #504e4e", display: "flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#b9630096", color: "#ff8800", padding: "6px 12px", fontSize: "25px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff8800",}}><ShieldOff /></div>
    <div>
       <h4  style={{color:"white",fontSize:"20px"}}> Reduced Operational Risks</h4>
       <p style={{ color:"white",}}>Prevent unauthorized usage, theft, and misuse.</p>
    </div>
    </div>

    <br/>
    <div style={{ backgroundColor: "#44444480",  padding: "10px", borderRadius: "20px",
      border: "1px solid #504e4e", display: "flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#b9630096", color: "#ff8800", padding: "6px 12px", fontSize: "25px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff8800",}}><Laptop /></div>
    <div>
       <h4  style={{color:"white",fontSize:"20px"}}> Centralized Monitoring</h4>
       <p style={{ color:"white",}}>Access vehicle data from the web or mobile dashboard anytime.</p>
       
    </div>
    </div>
    </div>
    





























</div>
<br/>
</div>












        
</>
  );
};






