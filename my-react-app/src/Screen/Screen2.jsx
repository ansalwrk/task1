export const Screen2 = () => {


  const circleButtonStyle = {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#ff5100",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "8px",
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "1",
    minWidth: "80px",
  };

  const orrangecard = {
    backgroundColor: "#111111",
    padding: "24px",
    borderRadius: "20px",
    border: "1px solid #222",
    display: "flex",
    alignItems: "center",
    gap: "15px",
  };

  const numberBadgeStyle = {
    backgroundColor: "#b3390023",
    color: "#ff5100",
    padding: "6px 12px",
    fontSize: "13px",
    borderRadius: "12px",
    fontWeight: "bold",
    border: "1px solid #ff5100",
  };






  
  return (
<>


<div
        style={{  overflow: "hidden",  backgroundColor: "#292929"  }}
        >
    <div style={{  display: "flex",    justifyContent: "center",    padding: "40px"   }}
    >
          <button 
          style={{  alignContent:"center",    backgroundColor: "#ff070723",   color: "#ff1504",       padding: "1px 12px",
              fontSize: "13px",         borderRadius: "20px",            fontWeight: "bold",      border: "1px solid #ff5100",}}
                   >
          <h6>⚠︎ Common Challenges</h6> </button>
    </div>
    

<div className="screen2head"
style={{
    display: "flex",
    flexDirection: "column", // Stacks items vertically
    alignItems: "center",    // Centers items horizontally
    textAlign: "center",     // Centers the text itself
    padding: "20px",         // Added some breathing room
    gap: "10px"              // Modern way to add space between the H2 and P
  }}
>
  <h2      style={{color:"white"}}       >Challenges Without AIS140 Tracking</h2>
  
  <h6 style={{color:"#c0c0c0e7"}}>  Operating vehicles without proper tracking leads to compliance issues and safety risks.       </h6>
  
  </div>

<div class="grid grid-cols-2 ">

<div class="rounded-[20px] ml-35 mr-5 h-101 bg-black outline outline-red-800 "> 


  <div class="m-3 grid grid-cols-1">
    <div style={{ backgroundColor: "#11111100",  padding: "10px", borderRadius: "20px",
      border: "1px solid #00000000", display: "flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#b60d0d4b", color: "#ff0000", padding: "6px 12px", fontSize: "13px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff0000",}}>❌</div>
       <h4  style={{color:"white"}}> Without AIS140</h4><br/>
    </div>




    <div style={{ backgroundColor: "#00000000",  padding: "10px", borderRadius: "20px",
      border: "1px solid #00000000", display: "flex",  alignItems: "center", gap: "15px",  }} >
        
      <div style={{    backgroundColor: "#b60d0d4b", color: "#ff0000", padding: "6px 12px", fontSize: "13px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff0000",}}>❌</div>
       <h6  style={{color:"#ffffff9c"}}>No real-time visibility of vehicle location</h6>
    </div>




    <div style={{ backgroundColor: "#00000000",  padding: "10px", borderRadius: "20px",
      border: "1px solid #00000000", display: "flex",  alignItems: "center", gap: "15px",  }} >
        
      <div style={{    backgroundColor: "#b60d0d4b", color: "#ff0000", padding: "6px 12px", fontSize: "13px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff0000",}}>❌</div>
       <h6  style={{color:"#ffffff9c"}}>Delayed response during emergencies or accidents</h6>
    </div>




    <div style={{ backgroundColor: "#00000000",  padding: "10px", borderRadius: "20px",
      border: "1px solid #00000000", display: "flex",  alignItems: "center", gap: "15px",  }} >
        
      <div style={{    backgroundColor: "#b60d0d4b", color: "#ff0000", padding: "6px 12px", fontSize: "13px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff0000",}}>❌</div>
       <h6  style={{color:"#ffffff9c"}}>Difficulty meeting government compliance requirements</h6>
    </div>





    <div style={{ backgroundColor: "#00000000",  padding: "10px", borderRadius: "20px",
      border: "1px solid #00000000", display: "flex",  alignItems: "center", gap: "15px",  }} >
        
      <div style={{    backgroundColor: "#b60d0d4b", color: "#ff0000", padding: "6px 12px", fontSize: "13px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff0000",}}>❌</div>
       <h6  style={{color:"#ffffff9c"}}>Poor monitoring of driver behavior</h6>
    </div>




        <div style={{ backgroundColor: "#00000000",  padding: "10px", borderRadius: "20px",
      border: "1px solid #00000000", display: "flex",  alignItems: "center", gap: "15px",  }} >
        
      <div style={{    backgroundColor: "#b60d0d4b", color: "#ff0000", padding: "6px 12px", fontSize: "13px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff0000",}}>❌</div>
       <h6  style={{color:"#ffffff9c"}}> Limited control over vehicle misuse or unauthorized movement</h6>
    </div>






</div>
</div>

<div class="rounded-[20px] mr-35 ml-5 h-101 bg-black outline outline-green-800">
   <div class="m-3 grid grid-cols-1">









    <div style={{ backgroundColor: "#11111100",  padding: "10px", borderRadius: "20px",
      border: "1px solid #00000000", display: "flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#21b60d4b", color: "#00ff0d", padding: "6px 12px", fontSize: "15px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #00ff0d1c",}}>✔️</div>
       <h4  style={{color:"white"}}> Without AIS140</h4><br/>
    </div>


    <div style={{ backgroundColor: "#00000000",  padding: "10px", borderRadius: "20px",
      border: "1px solid #00000000", display: "flex",  alignItems: "center", gap: "15px",  }} >
        
      <div style={{    backgroundColor: "#21b60d4b", color: "#00ff0d", padding: "6px 12px", fontSize: "13px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #00ff0d1c",}}>✔️</div>
       <h6  style={{color:"white"}}>Real-time visibility of all vehicles 24/7</h6>
    </div>

    <div style={{ backgroundColor: "#00000000",  padding: "10px", borderRadius: "20px",
      border: "1px solid #00000000", display: "flex",  alignItems: "center", gap: "15px",  }} >
        
      <div style={{    backgroundColor: "#21b60d4b", color: "#00ff0d", padding: "6px 12px", fontSize: "13px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #00ff0d1c",}}>✔️</div>
       <h6  style={{color:"white"}}>Instant emergency alerts and SOS response</h6>
    </div>    



    <div style={{ backgroundColor: "#00000000",  padding: "10px", borderRadius: "20px",
      border: "1px solid #00000000", display: "flex",  alignItems: "center", gap: "15px",  }} >
        
      <div style={{    backgroundColor: "#21b60d4b", color: "#00ff0d", padding: "6px 12px", fontSize: "13px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #00ff0d1c",}}>✔️</div>
       <h6  style={{color:"white"}}>Full government compliance guaranteed</h6>
    </div>


        <div style={{ backgroundColor: "#00000000",  padding: "10px", borderRadius: "20px",
      border: "1px solid #00000000", display: "flex",  alignItems: "center", gap: "15px",  }} >
        
      <div style={{    backgroundColor: "#21b60d4b", color: "#00ff0d", padding: "6px 12px", fontSize: "13px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #00ff0d1c",}}>✔️</div>
       <h6  style={{color:"white"}}>Complete driver behavior monitoring</h6>
    </div>


        <div style={{ backgroundColor: "#00000000",  padding: "10px", borderRadius: "20px",
      border: "1px solid #00000000", display: "flex",  alignItems: "center", gap: "15px",  }} >
        
      <div style={{    backgroundColor: "#21b60d4b", color: "#00ff0df5", padding: "6px 12px", fontSize: "13px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #00ff0d1c",}}>✔️</div>
       <h6  style={{color:"white"}}>Full control with geofencing and route tracking</h6>
    </div>


</div>
</div>
</div>

<div className="screen2head"
style={{
    display: "flex",
    flexDirection: "column", // Stacks items vertically
    alignItems: "center",    // Centers items horizontally
    textAlign: "center",     // Centers the text itself
    padding: "20px",         // Added some breathing room
    gap: "10px"              // Modern way to add space between the H2 and P
  }}
>
 <p style={{color:"#c9c9c9",fontWeight:"bold"}}>An AIS140 vehicle tracking system continuously transmits vehicle data, triggers instant alerts, and maintains logs required for compliance and operational control.</p>

</div>





</div>

</>
  );
};