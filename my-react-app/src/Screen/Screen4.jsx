import { Cog ,Heart,Shield,Laptop, ShieldOff } from 'lucide-react';
import screen4 from "../assets/screen4img.png";
export const Screen4 = () => {


return (

<>


<div style={{ backgroundColor:"#080400",}}>
    <div style={{paddingBottom:"4rem",marginTop:"-6rem"}}     >
    <div style={{ 

              backgroundColor: "#d45b0b52", 
              color: "#ff7b00c5", 
              padding: "5px 16px",  
              borderRadius: "20px", 
              fontWeight: "bold", 
              marginTop:"5rem",
              marginLeft:"65px",
              fontSize:"13px",
              display: "inline-block", 
              marginBottom: "15px",  width:"6%"
            }}>
Benefits
            </div>


<div>       
 <div className="grid grid-cols-1  ml-4 md:ml-10">
           
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 md:mx-12 lg:mx-16">

    <div >
      <h1
            style={{
              fontSize: "2.1rem",
              color: "white",
              fontWeight:"bolder",
              lineHeight: "1.2",
              margin: "0 0 20px 0",
            }}
          >
            Benefits of Using AIS 140 GPS<br/> Tracking Devices
          </h1>
          <div className="grid gap-y-3 mr-10">
      
          <div style={{ backgroundColor: "#47464665",  padding: "9px", borderRadius: "10px",
                border: "1px solid #504e4e00",display:"flex",  alignItems: "center", gap: "15px",  }} >
       
            <div style={{    backgroundColor: "#f0540c42", color: "#ff7b00", padding: "6px 12px", fontSize: "20px",
    borderRadius: "12px",marginLeft:"8px", fontWeight: "bold", border: "1px solid #ff880031",}}> <Shield/> </div>
              <div>
                 <h4  style={{color:"white",fontSize:"1.2rem"}}>          Government Compliance Made Easy             </h4>
                <p style={{ color:"#c0c0c0",fontSize:"0.9rem  "}}>     Meets AIS 140 regulations required for approved vehicle categories.       </p>
              </div>
            </div>
          <div >
            
    <div style={{ backgroundColor:"#47464665",  padding: "9px", borderRadius: "10px",
      border: "1px solid #504e4e00",display:"flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#f0540c42", color: "#ff7b00", padding: "6px 12px", fontSize: "20px",
    borderRadius: "12px",marginLeft:"8px", fontWeight: "bold", border: "1px solid #ff880031",}}><Heart /></div>
    <div>
       <h4  style={{color:"white",fontSize:"1.2rem"}}>     Improved Passenger & Driver Safety        </h4>
       <p style={{ color:"#c0c0c0",fontSize:"0.9rem  "}}>       Faster emergency response and continuous monitoring.     </p>
    </div>
    </div>
    </div>
    

    <div >
    <div style={{ backgroundColor: "#47464665",  padding: "9px", borderRadius: "10px",
      border: "1px solid #504e4e00",display:"flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#f0540c42", color: "#ff7b00", padding: "6px 12px", fontSize: "20px",
    borderRadius: "12px",marginLeft:"8px", fontWeight: "bold", border: "1px solid #ff880031",}}> < Cog  /> </div>
    <div>
       <h4  style={{color:"white",fontSize:"1.2rem"}}>     Better Fleet Control       </h4>
       <p style={{ color:"#c0c0c0",fontSize:"0.9rem  "}}>      Monitor vehicle usage, routes, and driving behavior efficiently.      </p>
    </div>
    </div>
    </div>


        <div >
    <div style={{ backgroundColor: "#47464665",  padding: "9px", borderRadius: "10px",
      border: "1px solid #504e4e00",display:"flex",  alignItems: "center", gap: "1px",  }} >
       
      <div style={{    backgroundColor: "#f0540c42", color: "#ff7b00", padding: "6px 12px", fontSize: "20px",
    borderRadius: "12px",marginLeft:"8px", fontWeight: "bold", border: "1px solid #ff880031",}}> < ShieldOff   /> </div>
    <div>
       <h4  style={{color:"white",fontSize:"1.2rem"}}>    Reduced Operational Risks        </h4>
       <p style={{ color:"#c0c0c0",fontSize:"0.9rem  "}}>        Prevent unauthorized usage, theft, and misuse.    </p>
    </div>
    </div>
    </div>


        <div >
    <div style={{ backgroundColor: "#47464665",  padding: "9px", borderRadius: "10px",
      border: "1px solid #504e4e00",display:"flex",  alignItems: "center", gap: "1px",  }} >
       
      <div style={{    backgroundColor: "#f0540c42", color: "#ff7b00", padding: "6px 12px", fontSize: "20px",
    borderRadius: "12px",marginLeft:"8px", fontWeight: "bold", border: "1px solid #ff880031",}}> <  Laptop   /> </div>
    <div>
       <h4  style={{color:"white",fontSize:"1.2rem"}}>   Centralized Monitoring         </h4>
       <p style={{ color:"#c0c0c0",fontSize:"0.9rem  "}}>      Access vehicle data from the web or mobile dashboard anytime.      </p>
    </div>
    
    </div>
    </div>
    
</div >


    

</div>    

<div>


        <img 
          src={screen4} 
          alt="BG" 
          style={{ 


            width: "100%", height: "80%", 
            objectFit: "cover", 
            justifyContent:"center",
            zIndex: 0, 
            borderRadius:"30px",
            marginTop:"6rem"
          }} 
        />
</div>
</div>

</div>
</div>
</div>
</div>









           


</>
  );
};






