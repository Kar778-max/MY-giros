import React, { Component } from "react";
import "./buton.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from "react-router-dom";





class Button2 extends Component {
   
    
    render() {
    
        return (
            <div className="porentbutt">
                <div className="but">
                    <NavLink to={"/Menu"} className="buton2">
                        <button>Մենյու</button>
                    </NavLink>
                </div>
                <div className="tem">
                    <div className="temtext">
                        <h1>Մեր թիմը</h1>
                        <h3>
                            Մենք կարևորում և բարձր ենք գնահատում մեր
                            յուրաքանչյուր աշխատակցի ներդրումը
                            համընդհանուր նպատակների իրականացման գործում և սիրով
                            հրավիրում ենք
                            միանալու մեր թիմին:
                        </h3>
                        <NavLink to={"/Work"} className="worktem">
                            <button>Միանալ թիմին</button>
                        </NavLink>
                    </div>
                    <div className="temimg">
                       <Carousel className="corusel"> 
                           <div className="temimgg">
                               <img src="./assets/img/img1.jpg"/>
                           </div>
                           <div className="temimgg">
                               <img src="./assets/img/img2.jpg" />
                           </div>
                           <div className="temimgg">
                               <img src="./assets/img/img3.png" />
                           </div>
                       </Carousel>
                    </div>

                </div>
            </div>
        )
    }
} export default Button2