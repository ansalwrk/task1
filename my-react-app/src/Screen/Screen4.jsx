import { Cog ,Heart,Shield,Laptop, ShieldOff } from 'lucide-react';
import screen4 from "../assets/screen4img.png";
export const Screen4 = () => {


return (

<>


<div style={{ 

  backgroundColor:"#181310",marginTop:"-6rem"}}     >       
 <div className="grid grid-cols-1  ml-4 md:ml-10">
           <div style={{ 

              backgroundColor: "#b3390067", 
              color: "#ff5100", 
              padding: "8px 16px",  
              borderRadius: "20px", 
              fontWeight: "bold", 
              marginTop:"5rem",
              fontSize:"13px",
              display: "inline-block", 
              marginBottom: "15px",  width:"6%"
            }}>
Benefits
            </div>


<div>
          <h1
            style={{
              fontSize: "",
              color: "white",
              fontWeight:"bolder",
              lineHeight: "1.2",
              margin: "0 0 20px 0",
            }}
          >
            Benefits of Using AIS 140 GPS<br/> Tracking Devices
          </h1>






  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 md:mx-12 lg:mx-16">

    <div >
          <div className="grid gap-y-2 mr-10">
      
          <div style={{ backgroundColor: "#353535a8",  padding: "5px", borderRadius: "20px",
                border: "1px solid #504e4e",display:"flex",  alignItems: "center", gap: "15px",  }} >
       
            <div style={{    backgroundColor: "#b9630096", color: "#ff8800", padding: "6px 12px", fontSize: "20px",
             borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff8800",}}> <Shield/> </div>
              <div>
                 <h4  style={{color:"white",fontSize:"20px"}}>          Government Compliance Made Easy             </h4>
                <p style={{ color:"white",fontSize:"3"}}>     Meets AIS 140 regulations required for approved vehicle categories.       </p>
              </div>
            </div>
          <div >
            
    <div style={{ backgroundColor:"#353535a8",  padding: "5x", borderRadius: "20px",
      border: "1px solid #504e4e",display:"flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#b9630096", color: "#ff8800", padding: "6px 12px", fontSize: "20px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff8800",}}><Heart /></div>
    <div>
       <h4  style={{color:"white",fontSize:"20px"}}>     Improved Passenger & Driver Safety        </h4>
       <p style={{color:"white",fontSize:"3"}}>       Faster emergency response and continuous monitoring.     </p>
    </div>
    </div>
    </div>
    

    <div >
    <div style={{ backgroundColor: "#353535a8",  padding: "5px", borderRadius: "20px",
      border: "1px solid #504e4e",display:"flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#b9630096", color: "#ff8800", padding: "6px 12px", fontSize: "20px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff8800",}}> < Cog  /> </div>
    <div>
       <h4  style={{color:"white",fontSize:"20px"}}>     Better Fleet Control       </h4>
       <p style={{ color:"white",fontSize:"3"}}>      Monitor vehicle usage, routes, and driving behavior efficiently.      </p>
    </div>
    </div>
    </div>


        <div >
    <div style={{ backgroundColor: "#353535a8",  padding: "5px", borderRadius: "20px",
      border: "1px solid #504e4e",display:"flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#b9630096", color: "#ff8800", padding: "6px 12px", fontSize: "20px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff8800",}}> < ShieldOff   /> </div>
    <div>
       <h4  style={{color:"white",fontSize:"20px"}}>    Reduced Operational Risks        </h4>
       <p style={{color:"white",fontSize:"3"}}>        Prevent unauthorized usage, theft, and misuse.    </p>
    </div>
    </div>
    </div>


        <div >
    <div style={{ backgroundColor: "#353535a8",  padding: "5px", borderRadius: "20px",
      border: "1px solid #504e4e",display:"flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#b9630096", color: "#ff8800", padding: "6px 12px", fontSize: "20px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff8800",}}> <  Laptop   /> </div>
    <div>
       <h4  style={{color:"white",fontSize:"20px"}}>   Centralized Monitoring         </h4>
       <p style={{color:"white",fontSize:"3"}}>      Access vehicle data from the web or mobile dashboard anytime.      </p>
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
            borderRadius:"30px"
          }} 
        />
</div>
</div>

</div>
</div>
</div>










           


</>
  );
};






