import { Component } from "react"
import { NavLink } from "react-router-dom"
import "./header.css"


export default class Header extends Component {

    market = () => {
        alert("Ձեր զամբյուղը դատարկ է")
    }
    cal = () => {
        alert("Call 010 50 22 33")
    }

    render() {

        return (
            <div className="headerPorent">
                <NavLink to={"/"} className="logo">
                    <img src="./assets/img/logo.png" />
                </NavLink>
                <div class="navLink">
                    <NavLink to='/' activeClassName="active">Գլխավոր</NavLink>
                    <NavLink to='/about' activeClassName="active">Մեր Մասին</NavLink>
                    <NavLink to='/menu' activeClassName="active">Մենյու</NavLink>
                    <NavLink to='/worq' activeClassName="active">Աշխատանք</NavLink>
                    <NavLink to='/contact' activeClassName="active">Կապ</NavLink>
                </div>
                <div className="menu">
                    <div className="serch">
                        <img src="./assets/img/downloadserch.png " />
                    </div>
                    <div className="magazin">
                        <img src="./assets/img/images.png" alt="" onClick={this.market} />
                    </div>
                    <div className="cal" onClick={this.cal}>
                        <h3>Առաքում</h3>
                        <h4>010 50 22 33</h4>
                    </div>
                </div>
            </div>
        )
    }
}