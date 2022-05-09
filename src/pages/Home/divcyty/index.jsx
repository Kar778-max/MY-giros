import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.css"
import Axandner from "./axand"
import Axcaner from "./axcan"
import Burger from "./burger";
import Fri from "./fri"
import Giros from "./giros"
import Girosapse from "./girosapse"
import Gril from "./gril";
import Koktel from "./koktel"
import Naget from "./Naget"
import Naxacash from "./naxacash"
import Sendvich from "./sendvich";
import Sous from "./sous";
import Veji from "./veji";
import Vitaminbar from "./vitaminbar";



class Divcyty extends Component {
    render() {
        return (
            <div>
                <div>
                    <Axandner />
                    <Axcaner />
                    <Burger />
                    <Fri />
                    <Giros />
                    <Girosapse />
                    <Gril />
                    <Koktel />
                    <Naxacash />
                    <Sendvich />
                    <Sous />
                    <Veji />
                    <Vitaminbar />
                    <Naget />
                   
                </div>
                <div className="divcytyPorent">
                    <div className="cyty1">
                        < NavLink to={"/Burger"} className="burger">
                            <img src="./assets/img/burger.jpg" />
                        </NavLink>
                        <NavLink to={"/Giros"} className="burger">
                            <img src="./assets/img/mrgiros.jpg" />
                        </NavLink>
                        <NavLink to={"/Girosapse"} className="burger">
                            <img src="./assets/img/apsegiros.jpg" alt="" />
                        </NavLink>
                        <NavLink to={"/Gril"} className="burger">
                            <img src="./assets/img/griljpg.jpg" />
                        </NavLink>
                    </div>
                    <div className="cyty2">
                        <NavLink to={"/NagetBurger"} className="burger2">
                            <img src="./assets/img/1156025796.jpg" />
                        </NavLink>
                        <NavLink to={"/Sendvich"} className="burger2">
                            <img src="./assets/img/sendvich.jpg" />
                        </NavLink>
                        <NavLink to={"/Axchan"} className="burger2">
                            <img src="./assets/img/axchan.jpg" />
                        </NavLink>
                        <NavLink to={"/Fri"} className="burger2">
                            <img src="./assets/img/fri.jpg" alt="" />
                        </NavLink>
                    </div>
                    <div className="cyty3">
                        <NavLink to={"/axadner"} className="burger3">
                            <img src="./assets/img/axand.jpg" />
                        </NavLink>
                        <NavLink to={"/Naxachash"} className="burger3">
                            <img src="./assets/img/naxacash.jpg" />
                        </NavLink>
                        <NavLink to={"/Sous"} className="burger3">
                            <img src="./assets/img/2865-gyros9.jpg" />
                        </NavLink>
                        <NavLink to={"/Veji"} className="burger3">
                            <img src="./assets/img/buys.jpg" />
                        </NavLink>
                    </div>
                    <div className="cyty4">
                        <NavLink to={"/Koktel"} className="burger4">
                            <img src="./assets/img/kotel.jpg" />
                        </NavLink>
                        <NavLink to={"/Vitaminbar"} className="burger4">
                            <img src="./assets/img/vitamin.jpg" />
                        </NavLink>
                    </div>
                </div>
            </div>

        )
    }
} export default Divcyty