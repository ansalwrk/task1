import hero from "../assets/hero-bg.jpg";
export const Home = () => {
  return (

  
<>




<img
  src={hero}
  alt="hero-bg.jpg"
  style={{
    position: "absolute",
    height:"87%",
    width: "100%",
    marginTop: "-135px",


  }}
/>

<bg
    style={{
        position: "absolute",
        backgroundColor: "#000000cc",
        marginTop: "-135px",
        height:"100%",
        width: "100%",

    }}

/>



    <div className="home-box1">
  <button
    style={{
      position:"absolute",
      backgroundColor: "#b3390023",
      color: "#ff5100",
      padding: "10px 20px",
      cursor: "pointer",
      fontSize: "13px",
      borderRadius: "20px",
      marginTop: "-133px",
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
        color: "white",
        fontSize: "60px",
        fontWeight: "bold",
        marginTop: "-7%",
        marginLeft: "4%",
        width: "550px",
        
    }}
>
    AIS140 GPS Tracker
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
    for
</head-text2>
    

    <head-text3
    style={{
        position: "absolute",
        color: "#ff5100",
        fontSize: "60px",
        fontWeight: "bold",
        marginTop: "-3%",
        marginLeft: "12%",
        width: "500px",
    }}
>
    Government-
</head-text3>

<head-text4
    style={{
        position: "absolute",
        color: "#ff5100",
        fontSize: "60px",
        fontWeight: "bold",
        marginTop: "1%",
        marginLeft: "4%",
        width: "500px",
        
    }}
>
    Compliant 
</head-text4>

<head-text5
    style={{
        position: "absolute",
        color: "#ffffff",
        fontSize: "60px",
        fontWeight: "bold",
        marginTop: "1%",
        marginLeft: "27%",
        width: "500px",
        
    }}
>
    Vehicle
</head-text5>
<head-text5
    style={{
        position: "absolute",
        color: "#ffffff",
        fontSize: "60px",
        fontWeight: "bold",
        marginTop: "6%",
        marginLeft: "4%",
        width: "500px",
        
    }}
>
    Tracking
</head-text5>

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


































</>


  );
};