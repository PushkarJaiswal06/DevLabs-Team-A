import React from "react";
import ai from '../assets/ai.png';
import webd from '../assets/webd.png';
import mob from '../assets/mob.png';
import drone from '../assets/drone.png';


export default function Domains() {
    return (
        <div style={{ paddingLeft: "10px" }}>

            <div style={{
                height: "70vh", padding: "0px 10px ", position: "absolute", top: "60%", width: "100vw", overflowX: "auto", whiteSpace: "nowrap", overflowY: "hidden", scrollbarWidth: "none", left: "0px",
                msOverflowStyle: "none", paddingLeft: "10px"
            }} className="flex justify-start items-center gap-10 px--1  z-[2]  p-[20px]">

                {/* web development section */}
                <div className="h-[68%]  min-w-[30%]  rounded-[30px] bg-black inline-block mr-6  transform hover:scale-105 transition duration-300 ease-in-out">
                    <div  >
                        <img src={webd} alt="hfjs" style={{ height: "60%", width: "90%", position: "relative", top: "-30px", left: "12px" }} />
                    </div>
                    <div style={{ position: "relative", bottom: "23%", color: "#a6a6a6", textAlign: "center", fontSize: "30px" }}>Web Development</div>
                </div>
                {/* ai/ml section */}

                <div className="h-[68%]  min-w-[30%]  rounded-[30px] bg-black inline-block mr-6  transform hover:scale-105 transition duration-300 ease-in-out">
                    <div  >
                        <img src={ai} alt="hfjs" style={{ height: "60%", width: "90%", position: "relative", top: "-30px", left: "12px" }} />
                    </div>
                    <div style={{ position: "relative", bottom: "23%", color: "#a6a6a6", textAlign: "center", fontSize: "30px" }}>AI/ML</div>
                </div>
                {/* app development section */}
                <div className="h-[68%]  min-w-[30%]  rounded-[30px] bg-black inline-block mr-6  transform hover:scale-105 transition duration-300 ease-in-out">
                    <div  >
                        <img src={mob} alt="hfjs" style={{ height: "30%", width: "70%", position: "relative", top: "-5px", left: "50px" }} />
                    </div>
                    <div style={{ position: "relative", bottom: "1%", color: "#a6a6a6", textAlign: "center", fontSize: "30px" }}>App Development</div>
                </div>
                {/* drone and iot section */}
                <div className="h-[68%]  min-w-[30%]  rounded-[30px] bg-black inline-block mr-6  transform hover:scale-105 transition duration-300 ease-in-out">
                    <div  >
                        <img src={drone} alt="hfjs" style={{ height: "60%", width: "90%", position: "relative", top: "-30px", left: "12px" }} />
                    </div>
                    <div style={{ position: "relative", bottom: "23%", color: "#a6a6a6", textAlign: "center", fontSize: "30px" }}>Drone and IoT</div>
                </div>
            </div>
        </div>
    )
}