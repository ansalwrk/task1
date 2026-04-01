import { Phone, Mail, MapPin, LineChart } from 'lucide-react';
import gpsLogo from "../assets/gps.png";

export const Screen10 = () => {
    return (
        <>
            <div style={{ backgroundColor: "#000000" }}>
                <br/><br/><br/><br/>

                {/* Main row: stacks on mobile, row on larger screens */}
                <div 
                    className="flex flex-col md:flex-row flex-wrap justify-between gap-8 px-4 md:px-10"  
                    style={{ color: "#b1b1b1", fontSize: "16px" }} 
                >
                    {/* Column 1: Logo + description + contact */}
                    <div className="pl-4 md:pl-15 col-span-2 ... flex flex-col ... w-full md:w-auto">
                        <div>
                            <img src={gpsLogo} alt="Logo" style={{ height: "45px", objectFit: "contain" }} />
                        </div>
                        
                        <div className="mt-2">
                            India's trusted AIS140 GPS tracking solution provider.<br/> Ensuring compliance, safety, and efficiency for fleets<br/> nationwide.<br></br> 
                        </div>

                        <div className="grid grid-cols-1 gap-y-2 mt-4"> 
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

                    {/* Column 2: Products */}
                    <div className="grid grid-cols-1 pl-4 md:pl-8 lg:pl-30 mt-4 md:mt-0">  
                        <div style={{ color: "#ffffff", fontWeight: "bolder" }}>Products</div>
                        <div>AIS 140 2G Tracker</div>
                        <div>AIS 140 4G Tracker</div>
                        <div>Fleet Dashboard</div>
                        <div>Mobile App</div>  
                    </div>

                    {/* Column 3: Company */}
                    <div className="grid grid-cols-1 pl-4 md:pl-8 lg:pl-30 mt-4 md:mt-0">  
                        <div style={{ color: "#ffffff", fontWeight: "bolder" }}>Company</div>
                        <div>About Us</div>
                        <div>Careers</div>
                        <div>Blog</div>
                        <div>Contact</div>  
                    </div>

                    {/* Column 4: Support */}
                    <div className="grid grid-cols-1 pl-4 md:pl-8 lg:pl-40 mt-4 md:mt-0">  
                        <div style={{ color: "#ffffff", fontWeight: "bolder" }}>Support</div>
                        <div>Help Center</div>
                        <div>Documentation</div>
                        <div>Terms of Service</div>
                        <div>Privacy Policy</div> 
                    </div>
                </div>

                <br/><br/>

                <div style={{ backgroundColor: "#a0a0a091", height: "0.1px" }}></div>
                
                <br/>
                
                {/* Footer row: stacks on mobile, row on larger screens */}
                <div 
                    className="flex flex-col md:flex-row justify-between items-center px-4 md:px-20 gap-2" 
                    style={{ color: "#b1b1b1", fontSize: "16px" }} 
                >
                    <div>© 2025 GPSCop. All rights reserved.</div>
                    <div>Track Smarter, Stay Safer</div>
                </div>
                
                <br/>
            </div>
        </>
    );    
};