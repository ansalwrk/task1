import hero from "../assets/hero-bg.jpg";
import gps1 from "../assets/gps1.png";
export const Home = () => {
  return (

  
<>


<div className="homebg"

style={{
  display:"flex",
  marginTop:"0"
}}
>
<img
  src={hero}
  alt="hero-bg.jpg"
  style={{
    position: "absolute",
    height:"90%",
    width: "100%",
    marginTop: "0",


  }}
/>

<bg
    style={{
        position: "absolute",
        backgroundColor: "#000000cc",
        marginTop: "0",
        height:"100%",
        width: "100%",

    }}

/>

</div>

      <div className="home-box1">
    <button
      style={{
        position:"absolute",
        backgroundColor: "#b3390023",
        color: "#ff5100",
        padding: "10px 20px",
        cursor: "pointer",
        fontSize: "100%",
        borderRadius: "20px",
        marginTop: "-12.5%",
        marginLeft: "70px",
        fontStyle: "revert,",
        fontWeight: "bolder",
        borderColor: "#ff5100",
      }}
    >
  Government Certified AIS 140 Devices
    </button>
  </div>













<head-text1
    style={{
        position: "absolute",

        fontSize: "130%",
        fontWeight: "bold",
        marginTop: "-7%",
        marginLeft: "4%",     
    }}
> 
  <span
>    
           <h1 style={{ color: "white", }}>AIS140 GPS Tracker for</h1>
            <h1 style={{ color: "#f04e03", }}>Government-Compliant </h1>  
            <h1 style={{ color: "white" }}>Vehicle Tracking</h1>
      </span>

</head-text1>

<head-text2
    style={{
        position: "absolute",
        color: "white",
        fontSize: "60px",
        fontWeight: "bold",
        marginTop: "-3%",
        marginLeft: "4%",
        width: "500px",
    }}
>
  
</head-text2>
    

<head-textp
    style={{
        position: "absolute",
        color: "#ffffffb2",
        fontSize: "20px",
        fontWeight:"bold",
        marginTop: "14%",
        marginLeft: "4%",
        width: "600px",
        
    }}
>
    Ensure AIS140 compliance with a reliable GPS tracking solution designed for public transport, commercial fleets, and regulated vehicles.
</head-textp>


<div className="home-box2">
  <button
    style={{    
        position:"absolute",    
        backgroundColor: "#ff5100",
        color: "white",
        padding: "10px 20px",           
        cursor: "pointer",
        fontSize: "20px",
        borderRadius: "10px",
        marginTop: "22%",
        marginLeft: "5%",
        fontStyle: "revert,",
        width: "290px",
    }}
    >
         View AIS 140 Devices     
     </button>
</div>   

<div className="home-box2">
  <button
    style={{    
        position:"absolute",    
        backgroundColor: "#55555531",
        color: "white",
        padding: "10px 20px",           
        cursor: "pointer",
        fontSize: "20px",
        borderRadius: "10px",
        marginTop: "22%",
        marginLeft: "29%",
        fontStyle: "revert,",
        width: "230px",
        borderColor:"white",
    }}
    >
         Talk to Expert    
     </button>
</div> 








<div className="gps1">

  <img
    src={gps1}
    alt="gps1"
    style={{
      position: "absolute",
      marginTop: "-10%",
      marginLeft: "55%",
      height:"65",
      width: "35%",
      animation: "floatBeat 4s ease-in-out infinite",
      filter: "drop-shadow(0 0 10px #ff9305e0) drop-shadow(0 0 20px #ff9305e0)"
    }}
  />

  <style>
    {`
      @keyframes floatBeat {
        0% {
          transform: translateY(0px) scale(1);
          filter: drop-shadow(0 0 10px ##ff9305e0);
        }

        25% {
          transform: translateY(-10px) scale(1.03);
          filter: drop-shadow(0 0 15px #ff9305e0);
        }

        50% {
          transform: translateY(-15px) scale(1.06);
          filter: drop-shadow(0 0 25px #ff9305e0);
        }

        75% {
          transform: translateY(-10px) scale(1.03);
          filter: drop-shadow(0 0 15px #ff9305e0);
        }

        100% {
          transform: translateY(0px) scale(1);
          filter: drop-shadow(0 0 10px #ff9305e0);
        }
      }
    `}
  </style>

</div>






<div
  style={{
    position: "absolute",
    marginTop: "29%",
    marginLeft: "5%",
    display: "flex",
    alignItems: "center",
    gap: "30px"
  }}
>
  <span
    style={{
      color: "rgb(255, 81, 0)",
      fontSize: "10px",
      textAlign: "center",
    }}
  >
    <h1>500+</h1>
    <h6 style={{ color: "white" }}>Fleet Partners</h6>
  </span>




      <span
    style={{
      color: "rgb(255, 81, 0)",
      fontSize: "px",
      fontWeight:"lighter",
      textAlign: "center",
    }}
  >
    <h2 style={{ color: "#ffffff6c" , fontWeight:"lighter",}}>|</h2>
  </span>





  <span
    style={{
      color: "rgb(255, 81, 0)",
      fontSize: "10px",
      fontWeight: "bolder",
      textAlign: "center",
    }}
  >
    <h1>50K+</h1>
    <h6 style={{ color: "white",fontWeight:"lighter" }}>Devices Installed</h6>
  </span>





<span
    style={{
      color: "rgb(255, 81, 0)",
      fontSize: "px",
      fontWeight:"lighter",
      textAlign: "center",
    }}
  >
    <h2 style={{ color: "#ffffff6c" , fontWeight:"lighter",}}>|</h2>
  </span>



  <span
    style={{
      color: "rgb(255, 81, 0)",
      fontSize: "10px",
      fontWeight: "bolder",
      textAlign: "center",
    }}
  >
    <h1>99.9%</h1>
    <h6 style={{ color: "white" }}>Uptime</h6>
  </span>
</div>






</>
  );
};