import {   Phone, Mail,MapPin, LineChart }from 'lucide-react';
import gpsLogo from "../assets/gps.png";
export const Screen10 = () => {
    return (
<>
<div style={{backgroundColor:"#000000"}}>

<br/><br/><br/><br/>

    <div className="flex flex-cols... px-10"  style={{color:"#b1b1b1",fontSize:"16px"}} >
        

        <div className="pl-15 col-span-2 ... flex flex-col ..." >
            <div>
            <img src={gpsLogo} alt="Logo" style={{ height: "45px", objectFit: "contain" }} />
        </div>
            
            <div>India's trusted AIS140 GPS tracking solution provider.<br/> Ensuring compliance, safety, and efficiency for fleets<br/> nationwide.<br></br> </div>

    


       
        
        <div className="grid grid-cols-1  gap-y-2"> <br/>
        
        <div className="flex gap-2 items-center">
                                <div><Phone size={16} /></div>
                                <div>+91 98765 43210</div>
        </div>  

        <div className="flex gap-2 items-center">
                                <div><Mail size={16} /></div>
                               <div>info@gpscop.in</div>
        </div>

        <div className="flex gap-2 items-center">
                                <div><MapPin size={16} /></div>
                                <div>Bangalore, Karnataka, India</div> 
        </div>                              
                                                                                            
        </div>
        </div>
        




        <div className="grid grid-cols-1 pl-30 ">  
                                <div style={{color:"#ffffff", fontWeight:"bolder"}}>Products</div>
                                <div>AIS 140 2G Tracker</div>
                                <div>AIS 140 4G Tracker</div>
                                <div>Fleet Dashboard</div>
                                <div>Mobile App</div>  
        </div>
        <div className="grid grid-cols-1 pl-30 ">  
                                <div style={{color:"#ffffff", fontWeight:"bolder"}}>Company</div>
                                <div>About Us</div>
                                <div>Careers</div>
                                <div>Blog</div>
                                <div>Contact</div>  
        </div>
        

        <div className="grid grid-cols-1 pl-40">  
                                <div style={{color:"#ffffff", fontWeight:"bolder"}}>Support</div>
                                <div >Help Center</div>
                                <div>Documentation</div>
                                <div>Terms of Service</div>
                                <div>Privacy Policy</div> 
         </div>

        


</div>


<br/><br/>




<div style={{backgroundColor:"#a0a0a091", height:"0.1px"}}></div>
<br/>
<div class="flex justify-between ... px-20" style={{color:"#b1b1b1",fontSize:"16px"}} >
<div>© 2025 GPSCop. All rights reserved.</div>
<div>Track Smarter, Stay Safer</div>
</div>
<br/>

</div>
</>
    );    
};