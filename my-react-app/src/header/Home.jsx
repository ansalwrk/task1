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



    <div className="home-box">
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


    







</>


  );
};