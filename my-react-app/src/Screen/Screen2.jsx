export const Screen2 = () => {
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
 <h4  style={{color:"white"}}> Without AIS140</h4><br/>
 <h6  style={{color:"white"}}> No real-time visibility of vehicle location</h6><br/>
 <h6  style={{color:"white"}}> Delayed response during emergencies or accidents</h6><br/>
 <h6  style={{color:"white"}}> Difficulty meeting government compliance requirements
  Poor monitoring of driver behavior</h6><br/>
 <h6  style={{color:"white"}}> Limited control over vehicle misuse or unauthorized movement</h6><br/>
</div>
</div>

<div class="rounded-[20px] mr-35 ml-5 h-101 bg-black outline outline-green-800">
   <div class="m-3 grid grid-cols-1">
<h4 style={{color:"white"}}   >With AIS140</h4><br/>
<h6  style={{color:"white"}}>Real-time visibility of all vehicles 24/7</h6><br/>
<h6  style={{color:"white"}}> Instant emergency alerts and SOS response</h6><br/>
<h6  style={{color:"white"}}>Full government compliance guaranteed</h6><br/>
<h6  style={{color:"white"}}>Complete driver behavior monitoring</h6><br/>
<h6  style={{color:"white"}}>Full control with geofencing and route tracking</h6><br/>
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
 <h6 style={{color:"#c9c9c9",fontWeight:"bold"}}>An AIS140 vehicle tracking system continuously transmits vehicle data, triggers instant alerts, and maintains logs required for compliance and operational control.</h6>

</div>





</div>

</>
  );
};