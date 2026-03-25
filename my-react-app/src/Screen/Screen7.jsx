import {Zap  }from 'lucide-react';
import screen6 from "../assets/screen6.png";

export const Screen7 = () => {


return  (
<>
<div style={{backgroundColor:"#000000" , padding:"70px 0px 0px 0px" }}>

<div className="grid grid-cols-1 mx-15">
    
        
    <div style={{ backgroundColor: "#0e0e0e",  padding: "20px", borderRadius: "30px 30px 0px 0px",
      border: "1px solid #504e4e",display:"flex",  alignItems: "center", gap: "15px",  }} >
       
      <div style={{    backgroundColor: "#b9630096", color: "#ff8800", padding: "6px 12px", fontSize: "20px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff8800",}}><Zap /></div>
    <div>
       <h4  style={{color:"white",fontSize:"20px"}}> 2G vs 4G – Quick Comparison</h4>
      </div>
      </div>

                    
                                <div 
                                             className="grid grid-cols-3  " 
                                             style={{ 
                                             backgroundColor: "#525252f3", 
                                             border: "1px solid #504e4e",
                                             padding: "10px",
                                             textAlign: "left" // Centers text within each equal column
                                             }}
  >

                                <h4 className="2/4" style={{color:"white",fontSize:"20px"}}>       Feature    </h4>
                                <h4  style={{color:"white",fontSize:"20px"}}>                    2G Device      </h4>
                                <h4  style={{color:"white",fontSize:"20px"}}    >                 4G Device    </h4> 

                         
                            </div>

                                                
                                <div 
                                             className="grid grid-cols-3  " 
                                             style={{ 
                                             backgroundColor: "#111111f3", 
                                             border: "1px solid #504e4e",
                                             padding: "10px",
                                             textAlign: "left" // Centers text within each equal column
                                             }}
  >

                                <h4 className="2/4" style={{color:"white",fontSize:"20px"}}>      Data Speed   </h4>
                                <h4  style={{color:"white",fontSize:"20px"}}>                  	Basic     </h4>
                                <h4  style={{color:"#ff5e00",fontSize:"20px"}} >                 High-speed   </h4> 

                         
                            </div>                    
                                <div 
                                             className="grid grid-cols-3  " 
                                             style={{ 
                                             backgroundColor: "#111111f3", 
                                             border: "1px solid #504e4e",
                                             padding: "10px",
                                             textAlign: "left" // Centers text within each equal column
                                             }}
  >

                                <h4 className="2/4" style={{color:"white",fontSize:"20px"}}>      Network Coverage	  </h4>
                                <h4  style={{color:"white",fontSize:"20px"}}>                         Urban areas	     </h4>
                                <h4  style={{color:"#ff5e00",fontSize:"20px"}}     >             Pan-India  </h4> 

                         
                            </div>                    
                                <div 
                                             className="grid grid-cols-3  " 
                                             style={{ 
                                             backgroundColor: "#111111f3", 
                                             border: "1px solid #504e4e",
                                             padding: "10px",
                                             textAlign: "left" // Centers text within each equal column
                                             }}
  >

                                <h4 className="2/4" style={{color:"white",fontSize:"20px"}}>     Accuracy </h4>
                                <h4  style={{color:"white",fontSize:"20px"}}>                  	Standard GPS    </h4>
                                <h4  style={{color:"#ff5e00",fontSize:"20px"}}     >                Multi-constellation GNSS </h4> 

                         
                            </div>                    
                                <div 
                                             className="grid grid-cols-3  " 
                                             style={{ 
                                             backgroundColor: "#111111f3", 
                                             border: "1px solid #504e4e",
                                             padding: "10px",
                                             textAlign: "left" // Centers text within each equal column
                                             }}
  >

                                <h4 className="2/4" style={{color:"white",fontSize:"20px"}}>      Future-proof  </h4>
                                <h4  style={{color:"white",fontSize:"20px"}}>                  Limited    </h4>
                                <h4  style={{color:"#ff5e00",fontSize:"20px"}}    >              Yes  </h4> 

                         
                            </div>

                                                            <div 
                                             className="grid grid-cols-3  " 
                                             style={{ 
                                            borderRadius: "0px 0px 25px px",
                                             backgroundColor: "#111111f3", 
                                             border: "1px solid #504e4e",
                                             padding: "10px",
                                             textAlign: "left" // Centers text within each equal column
                                             }}
  >

                                <h4 className="2/4" style={{color:"white",fontSize:"20px"}}>    Price   </h4>
                                <h4  style={{color:"white",fontSize:"20px"}}>             	Lower       </h4>
                                <h4  style={{color:"#ff5e00",fontSize:"20px"}}    >         Premium      </h4>                       
                            </div>


</div>
</div>
</>
);

};