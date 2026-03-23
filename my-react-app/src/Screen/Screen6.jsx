import {   }from 'lucide-react';
export const Screen6 = () => {


return  (
<>
<div
        style={{  overflow: "hidden",  backgroundColor: "#000000"  }}>




    <div style={{  display: "flex",    justifyContent: "center",    padding: "40px"   }}>
         <button style={{  alignContent:"center",    backgroundColor: "#ff73003b",   color: "#fd7302",       padding: "1px 12px",
              fontSize: "13px",         borderRadius: "20px",            fontWeight: "bold",      border: "1px solid #ff5100",}}>
          <>Our Devices</> </button>
    </div>

    <div className="screen2head"
style={{
    display: "flex",
    flexDirection: "column", // Stacks items vertically
    alignItems: "center",    
    textAlign: "center",     
    padding: "20px",         
    gap: "10px"              
  }}
>
  <h5     style={{color:"white", fontSize:"40px"}}       >AIS 140 Device Types – 2G & 4G</h5>
  
  <h5 style={{color:"#c0c0c0e7"}}>Choose the right device based on your coverage needs and deployment scale. </h5>
  
  </div>







<div className="grid grid-cols-2 gap-4">



<div className="mx-10">
    <div style={{ backgroundColor: "#000000", padding:"20px 20px",height:"auto", borderRadius: "20px",
      border: "1px solid #504e4e",display:"flex",  alignItems: "center", gap: "15px",  }} >


      <div style={{    backgroundColor: "#b9630096", color: "#ff8800", padding: "6px 12px", fontSize: "20px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff8800",}}>oihoih</div>
    <div>
       <h4  style={{color:"white",fontSize:"20px"}}>AIS 140 GPS Tracker – 2G</h4>
    </div>
</div>
</div>



<div className="mx-10">

    <div style={{ backgroundColor: "#000000", padding:"20px 20px",height:"auto", borderRadius: "20px",
      border: "1px solid #504e4e",display:"flex",  alignItems: "center", gap: "15px",  }} >


     <div style={{    backgroundColor: "#b9630096", color: "#ff8800", padding: "6px 12px", fontSize: "20px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff8800",}}>igi</div>


      


</div>


</div>
</div>
















</div>
</>

);

};