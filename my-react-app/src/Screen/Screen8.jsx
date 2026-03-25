import { Check,Wrench ,SignalHigh,Headphones ,Layers } from 'lucide-react';
import screen8 from "../assets/screen4img.png";
export const Screen8 = () => {


return (

<>


<div style={{

  backgroundColor:"#000000",padding:"150px 0px 0px 0px "}}     >       
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 md:ml-10">

          </div>






  <div className="grid grid-cols-1 pl-10  sm:grid-cols-2 gap-4 md:gap-8 m-2 md:m-3">




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


        <div className="grid gap-y-2 mx-10 mr-10">
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
          <p style={{color:"#d3d3d3",fontSize:"18px"}}  >We provide end-to-end GPS tracking solutions with certified devices,<br/> robust software, and dedicated support.</p>
          



        
    <div style={{ backgroundColor: "#44444480", borderRadius: "20px",padding:"10px",
      border: "1px solid #504e4e",display:"flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#b9630096", color: "#ff8800", padding: "6px 12px", fontSize: "20px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff8800",}}><  Check/></div>
    <div>
       <h4  style={{color:"white",fontSize:"20px"}}>Trusted AIS140-compatible tracking solutions</h4>
    </div>
    </div>

    <div style={{ backgroundColor: "#44444480",  padding: "10px", borderRadius: "20px",
      border: "1px solid #504e4e", display: "flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#b9630096", color: "#ff8800", padding: "6px 12px", fontSize: "25px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff8800",}}>  <Wrench />   </div>
    <div>
       <h4  style={{color:"white",fontSize:"20px"}}> Reliable hardware with proven performance</h4>
    </div>
    </div>



    <div style={{ backgroundColor: "#44444480",  padding: "10px", borderRadius: "20px",
      border: "1px solid #504e4e", display: "flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#b9630096", color: "#ff8800", padding: "6px 12px", fontSize: "25px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff8800",}}>   <SignalHigh />      </div>
    <div>
       <h4  style={{color:"white",fontSize:"20px"}}> Easy integration with dashboards & reports</h4>
    </div>
    </div>

  
    <div style={{ backgroundColor: "#44444480",  padding: "10px", borderRadius: "20px",
      border: "1px solid #504e4e", display: "flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#b9630096", color: "#ff8800", padding: "6px 12px", fontSize: "25px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff8800",}}>   <Headphones />      </div>
    <div>
       <h4  style={{color:"white",fontSize:"20px"}}> Dedicated technical support & onboarding</h4>
    </div>
    </div>

  
    <div style={{ backgroundColor: "#44444480",  padding: "10px", borderRadius: "20px",
      border: "1px solid #504e4e", display: "flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#b9630096", color: "#ff8800", padding: "6px 12px", fontSize: "25px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff8800",}}>     <Layers />        </div>
    <div>
       <h4  style={{color:"white",fontSize:"20px"}}> Scalable for single vehicles to large fleets</h4>
    </div>
    </div>
    </div>
    </div>





























</div>
<br/>
</div>












        
</>
  );
};






