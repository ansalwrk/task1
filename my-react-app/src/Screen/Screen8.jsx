import { Check,Wrench ,SignalHigh,Headphones ,Layers } from 'lucide-react';
import screen8 from "../assets/screen4img.png";
export const Screen8 = () => {


return (

<>


<div style={{

  backgroundColor:"#000000",padding:"150px 0px 70px 0px "}}     >       
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 md:ml-10">

          </div>

  <div className="grid grid-cols-1  sm:grid-cols-2 md:gap-8 m-2 md:m-3">
    <div className="pl-13 ">


        <img 
          src={screen8} 
          alt="BG" 
          style={{ 


            width: "90%", height: "72%", 
            objectFit: "cover", 
            justifyContent:"center",
            zIndex: 0, 
            borderRadius:"30px",
            marginTop:"10rem"
          }} 
        />
</div>
    
<div className="grid  pr-5 mr-10">
    <div >
            <div style={{ 
              backgroundColor: "#b3420023", 
              color: "#ff7300", 
              padding: "8px 16px", 
              border: "1px solid #ff510013", 
              borderRadius: "20px", 
              fontWeight: "bold", 
              display: "inline-block", 
              marginBottom: "15px",
              fontSize:"0.8rem" 
            }}>
              Why GPSCop
            </div>


        
          <h1
            style={{
              fontSize: "2.1rem",
              color: "white",
              lineHeight: "1.2",
              fontWeight:"bolder",
              margin: "0 0 20px 0",
            }}
          >
           Why GPSCop AIS 140 Vehicle Tracking System?
          </h1>
          <p style={{color:"#d3d3d3b7",fontSize:"17px"}}  >We provide end-to-end GPS tracking solutions with certified devices,
            <br/> robust software, and dedicated support.</p>
          



     
    <div className="mb-2.5" style={{backgroundColor: "#44444480", borderRadius: "10px",padding:"15px 0px 15px 0px",
      border: "1px solid #504e4e00",display:"flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{marginLeft:"15px",backgroundColor: "#ff770721", color: "#ff8800", padding: "5px 10px", fontSize: "20px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff880000",}}><  Check/></div>
    <div>
       <h4  style={{color:"white",fontSize:"16px"}}>Trusted AIS140-compatible tracking solutions</h4>
    </div>
    </div>
    

    <div className="mb-2.5" style={{ backgroundColor: "#44444480",  padding: "15px 0px 15px 0px", borderRadius: "10px",
      border: "1px solid #504e4e00", display: "flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{ marginLeft:"15px",   backgroundColor: "#ff770721", color: "#ff8800", padding: "5px 10px", fontSize: "25px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff880000",}}>  <Wrench />   </div>
    <div>
       <h4  style={{color:"white",fontSize:"16px"}}> Reliable hardware with proven performance</h4>
    </div>
    </div>



    <div  className="mb-2.5" style={{ backgroundColor: "#44444480",  padding: "15px 0px 15px 0px", borderRadius: "10px",
      border: "1px solid #504e4e00", display: "flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{ marginLeft:"15px",   backgroundColor: "#ff770721", color: "#ff8800", padding: "5px 10px", fontSize: "25px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff880000",}}>   <SignalHigh />      </div>
    <div>
       <h4  style={{color:"white",fontSize:"16px"}}> Easy integration with dashboards & reports</h4>
    </div>
    </div>

  
    <div  className="mb-2.5" style={{  backgroundColor: "#44444480",  padding: "15px 0px 15px 0px", borderRadius: "10px",
      border: "1px solid #504e4e00", display: "flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{ marginLeft:"15px",   backgroundColor: "#ff770721", color: "#ff8800", padding: "5px 10px", fontSize: "25px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff880000",}}>   <Headphones />      </div>
    <div>
       <h4  style={{color:"white",fontSize:"16px"}}> Dedicated technical support & onboarding</h4>
    </div>
    </div>

  
    <div  className="mb-2.5" style={{ backgroundColor: "#44444480",  padding: "15px 0px 15px 0px", borderRadius: "10px",
      border: "1px solid #504e4e00", display: "flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{  marginLeft:"15px",  backgroundColor: "#ff770721", color: "#ff8800", padding: "5px 10px", fontSize: "25px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff880000",}}>     <Layers />        </div>
    <div>
       <h4  style={{color:"white",fontSize:"16px"}}> Scalable for single vehicles to large fleets</h4>
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






