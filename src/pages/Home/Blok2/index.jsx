import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./pages2.css"

class Blok2 extends Component {
    render() {
        return (
            <div className="blok2Porent">
                <div className="textgiros">
                    <h1>ՀՈՒՆԱԿԱՆ, ԹԱՐՄ, ԱՐԱԳ</h1>
                    <h3>Mr. GYROS հունական արագ սննդի ցանցը հիմնադրվել է 2009թ.-ի մայիսի
                        1-ին: Այսօր մայրաքաղաք Երևանում Mr. GYROS-ը հյուրընկալում է իր
                        հաճախորդներին արդեն 14 մասնաճյուղերում և շարունակում է ընդլայնվել:
                    </h3>
                    <NavLink to={"/about"} className="button1">
                        <button>Ավելին</button>
                    </NavLink>
                </div>
                <div className="imggiros">
                            <img src="./assets/img/char.png"/>
                </div>
            </div>
        )
    }

} export default Blok2