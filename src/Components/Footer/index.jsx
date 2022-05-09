import { Component } from "react";
import "./footer.css"
import { NavLink } from "react-router-dom";

class Footer extends Component {
    mail=()=>{
        alert(" աշխատանքի համար ուղարկեք ձեր cv info@mrgyros.am")
    }
    call=()=>{
        alert(" պատվիրելու կամ այլ հառցերի  համար զանգահարեք +374  10 502232 ")
    }
    adress=()=>{
        alert("Մեր հասցեն է ք. Երևան, Ամիրյան 4/5")
    }
    render() {
        return (
            <div className="footerPorent">
                <div className="footerChild">
                    <div className="fotteractiv">
                        <div class="navLink1">
                            <NavLink to='/' activeClassName="active">Գլխավոր</NavLink>
                        </div>
                        <div class="navLink1">
                            <NavLink to='/about' activeClassName="active">Մեր Մասին</NavLink>
                        </div>
                        <div class="navLink1">
                            <NavLink to='/menu' activeClassName="active">Մենյու</NavLink>
                        </div>
                        <div class="navLink1">
                            <NavLink to='/worq' activeClassName="active">Աշխատանք</NavLink>
                        </div>
                        <div class="navLink1">
                            <NavLink to='/contact' activeClassName="active">Կապ</NavLink>
                        </div>
                    </div>
                    <div className="textfooter">
                        <h2>Գրասենյակ</h2>
                        <h2 onClick={this.adress}> ք. Երևան, Ամիրյան 4/5</h2>
                        <h2 onClick={this.call}> +374  10 502232</h2>
                        <h2 onClick={this.mail}>info@mrgyros.am</h2>
                    </div>
                    <div className="foterapp">
                        <h1>gafif</h1>
                    </div>


                </div>
                <h4>Ընդհանուր դրույթներ և պայմաններ</h4>
                <h5>GYROS LLC © 2021. Բոլոր իրավունքները պաշտպանված են.</h5>

            </div >
        )
    }
} export default Footer