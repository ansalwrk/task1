import {Zap  }from 'lucide-react';
import screen6 from "../assets/screen6.png";

export const Screen7 = () => {


return  (
<>
<div style={{backgroundColor:"#000000" , padding:"70px 0px 0px 0px" }}>

<div className="grid grid-cols-1 mx-20">
    
        
    <div style={{ backgroundColor: "#0e0e0e",  padding: "20px", borderRadius: "15px 15px 0px 0px",
      border: "1px solid #52525256",display:"flex",  alignItems: "center", gap: "5px",  }} >
       
      <div style={{    backgroundColor: "#b9630000", color: "#ff8800", padding: "6px 12px", fontSize: "19px",
    borderRadius: "12px", fontWeight: "bold", border: "1px solid #ff880000",}}><Zap /></div>
    <div>
       <h4  style={{color:"white",fontSize:"19px"}}> 2G vs 4G – Quick Comparison</h4>
      </div>
      </div>

                    
                                <div 
                                             className="grid grid-cols-3  " 
                                             style={{ 
                                             backgroundColor: "#52525256", 
                                             border: "0.0.10px solid #e2090900",
                                             padding: "16px",
                                             textAlign: "left" // Centers text within each equal column
                                             }}
  >

                                <h4 className="2/4" style={{color:"#e2e2e2",fontSize:"15px"}}>       Feature    </h4>
                                <h4  style={{color:"#e2e2e2",fontSize:"15px"}}>                    2G Device      </h4>
                                <h4  style={{color:"#e2e2e2",fontSize:"15px"}}    >                 4G Device    </h4> 

                         
                            </div>

                                                
                                <div 
                                             className="grid grid-cols-3  " 
                                             style={{ 
                                             backgroundColor: "#111111f3", 
                                             border: "0.1px solid #52525256",
                                             padding: "16px",
                                             textAlign: "left" // Centers text within each equal column
                                             }}
  >

                                <h4 className="2/4" style={{color:"#858585",fontSize:"15px"}}>      Data Speed   </h4>
                                <h4  style={{color:"#858585",fontSize:"15px"}}>                  	Basic     </h4>
                                <h4  style={{color:"#ff5e00",fontSize:"15px"}} >                 High-speed   </h4> 

                         
                            </div>                    
                                <div 
                                             className="grid grid-cols-3  " 
                                             style={{ 
                                             backgroundColor: "#111111f3", 
                                             border: "0.1px solid #52525256",
                                             padding: "16px",
                                             textAlign: "left" // Centers text within each equal column
                                             }}
  >

                                <h4 className="2/4" style={{color:"#858585",fontSize:"15px"}}>      Network Coverage	  </h4>
                                <h4  style={{color:"#858585",fontSize:"15px"}}>                         Urban areas	     </h4>
                                <h4  style={{color:"#ff5e00",fontSize:"15px"}}     >             Pan-India  </h4> 

                         
                            </div>                    
                                <div 
                                             className="grid grid-cols-3  " 
                                             style={{ 
                                             backgroundColor: "#111111f3", 
                                             border: "0.1px solid #52525256",
                                             padding: "16px",
                                             textAlign: "left" // Centers text within each equal column
                                             }}
  >

                                <h4 className="2/4" style={{color:"#858585",fontSize:"15px"}}>     Accuracy </h4>
                                <h4  style={{color:"#858585",fontSize:"15px"}}>                  	Standard GPS    </h4>
                                <h4  style={{color:"#ff5e00",fontSize:"15px"}}     >                Multi-constellation GNSS </h4> 

                         
                            </div>                    
                                <div 
                                             className="grid grid-cols-3  " 
                                             style={{ 
                                             backgroundColor: "#111111f3", 
                                             border: "0.1px solid #52525256",
                                             padding: "16px",
                                             textAlign: "left" // Centers text within each equal column
                                             }}
  >

                                <h4 className="2/4" style={{color:"#858585",fontSize:"15px"}}>      Future-proof  </h4>
                                <h4  style={{color:"#858585",fontSize:"15px"}}>                  Limited    </h4>
                                <h4  style={{color:"#ff5e00",fontSize:"15px"}}    >              Yes  </h4> 

                         
                            </div>

                                                            <div 
                                             className="grid grid-cols-3  " 
                                             style={{ 
                                            borderRadius:"0px 0px 15px 15px",
                                            backgroundColor: "#111111f3", 
                                             border: "0.1px solid #52525256",
                                             padding: "16px",
                                             textAlign: "left" // Centers text within each equal column
                                             }}
  >

                                <h4 className="2/4" style={{color:"#858585",fontSize:"15px"}}>    Price   </h4>
                                <h4  style={{color:"#858585",fontSize:"15px"}}>             	Lower       </h4>
                                <h4  style={{color:"#ff5e00",fontSize:"15px"}}    >         Premium      </h4>                       
                            </div>


</div>
</div>
</>
);

};