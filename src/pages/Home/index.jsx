import { Component } from "react";
import Blok1 from "./Blok1";
import Blok2 from "./Blok2";
import Blok3 from "./Blok3";
import Divcyty from "./divcyty";
import Button2 from "./butonmenu";

class Home extends Component{
    render(){
        return(
            <div>
                <Blok1 />
                <Blok2 />
                <Blok3 />
                <Divcyty />
                <Button2 />
            </div>
        )
    }
}export default Home