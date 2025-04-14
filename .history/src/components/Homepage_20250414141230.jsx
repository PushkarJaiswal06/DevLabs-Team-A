import React from "react";
import { MdTune } from "react-icons/md";

import image from '../assets/image.png';


import "./Homepage.css"
import Domains from "./Domains";
import Testimonial from "./Testimonials";

export default function Homepage() {
    const containerStyle = {
        backgroundColor: "#111", 
        color: "white",
        width: "95%",
        height: "100vh",
        position: "absolute", 
        top: "40px",
        left: "3%",  
        zIndex: 2,    
        borderTopLeftRadius: "60px 40px",
        borderRadius: "20px",
        padding: "40px",
       

    };

    return (
        // main page
    
            <div style={{ backgroundColor: "#e1ff01", minHeight: '100vh', padding: "3px", position: "relative", maxWidth: "100vw", 
            
               overflow: "hidden" }}>

                <nav>
                    <div
                        style={{
                            height: "20vh",
                            zIndex: 3,
                            width: "98%",
                            position: "fixed",
                            justifyContent: "center",
                            alignItems: "center",
                            // border: "2px solid red",
                            // top:0,
                            left: 10,
                        }}>
                        <button style={{
                            backgroundColor: "#e1ff01",
                            position: "absolute",
                            right: "235px",
                            top: "67px",
                            padding: "17px 16px",
                            borderRadius: "27px",
                            border: "none",
                            fontSize: "34px",
                            fontWeight: "bold"
                        }}>JOIN US</button>
                        <div
                            style={{
                                width: "108px",
                                height: "92px",
                                backgroundColor: "#e1ff01", // neon yellow
                                borderRadius: "6px",
                                justifyContent: "center",
                                alignContent: "center",
                                borderTop: "6px solid white",
                                position: "absolute",
                                right: "103px",
                                top: "55px",
                                padding: "5px"

                            }}
                        >
                            <MdTune size={90} color="black" />
                        </div>
                    </div>
                </nav>
                {/* white box */}
                <div
                    style={{
                        backgroundColor: "white", width: "86%", minHeight: "100vh", margin: "70px auto", borderRadius: "31px", position: "relative"
                    }}>
                    <div style={{ height: "100vh", width: "100%" }}>
                        <div style={{
                            backgroundColor: "black",
                            height: "55px",
                            width: "55px",
                            borderRadius: "30px",
                            position: "absolute",
                            top: "95px",
                            left: "11%",
                        }}>
                        </div>

                        <h1 style={{
                            position: "absolute",
                            left: "16%",
                            fontSize: "35px",
                        }}>
                            DevLabs
                        </h1>
                    </div>
                    <div style={{ height: "75vh", paddingTop: "1px", display: "flex", paddingLeft: "33px" }}>
                        <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>we specialize in.</h1>
                    </div>
                </div>


                {/* black  box*/}
                <div style={containerStyle} >

                    <span >
                        <img src={image} alt="gfhg" style={{ height: "100%", width: "59%", position: "absolute", left: "-45px" }} />
                    </span>
                    <span >
                        <div style={{ lineHeight: "67px", position: "absolute", right: "13%", top: "25%" }}>
                            <h1 style={{ fontWeight: "bold", fontSize: "50px" }}>Shape your future</h1>
                            <h1 style={{ fontWeight: "bold", fontSize: "50px" }}>and your community</h1>
                        </div>
                        <div style={{ position: "absolute", right: "4%", top: "50%", lineHeight: "38px", fontSize: "30px", letterSpacing: "1px", color: "#a6a6a6" }}>
                            <h2>Join a network of developers to </h2>
                            <h2>learn, innovate, and create</h2>
                            <h2>impactful solutions.</h2>
                        </div>
                    </span>
                </div>
                {/* specialization */}
                <Domains />
              

            </div>

    )
}

