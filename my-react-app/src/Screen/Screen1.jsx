import screen2 from "../assets/screen2.png";
export const Screen1 = () => {
  return (
  
<>

<div
  className="screen2"
  style={{
    backgroundColor: "#ff0000fa",
    padding: "20px",
    position: "absolute",
    width: "30%",
    height: "30%"
  }}
>
  <img
    src={screen2}
    alt="screen2.png"
    style={{
      position: "absolute",
      height: "90%",
      width: "100%",
      marginTop: "-2",
    }}
  />
</div>




<div className="screen1-box1">
  <button
    style={{
      position:"absolute",
      backgroundColor: "#b3390023",
      color: "#ff5100",
      padding: "10px 20px",
      cursor: "pointer",
      fontSize: "75%",
      borderRadius: "20px",
      marginTop: "40%",
      marginLeft: "4%",
      fontStyle: "revert,",
      fontWeight: "bolder",
      borderColor: "#ff5100",
    }}
  >
Government Mandate
  </button>
</div>



<div className="2nd-heading">
  <h1
  style={{
    position:"absolute",
    fontSize:"250%",
    marginTop:"45%",
    marginLeft:"4%",
    color: "white",
    fontFamily: "Helvetica, Arial, sans-serif",


  }}

  >
 What is the AIS140 GPS Tracking <br/>System?
 </h1>
</div>


<div className="2nd-p">
  <p
  style={{
    position:"absolute",
    marginTop:"55%",
    marginLeft:"5%",
    fontWeight:"lighter",
    color: "#ffffffb7",
    width:"51%",
    fontFamily: "Helvetica, Arial, sans-serif",

  }}

  >
<p class="fs-5"> <p class="fst-normal">AIS 140 is an Indian government-mandated standard for vehicle tracking <br/>systems, issued by the Automotive Industry Standards Committee (AISC). <br/>It ensures real-time vehicle monitoring, emergency response, and<br/> passenger safety, especially for public and commercial vehicles.</p>
</p></p>
</div>
















</>



  );
};