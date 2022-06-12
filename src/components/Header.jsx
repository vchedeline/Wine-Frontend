import styled from "styled-components";
import Nav from "./Nav";

export default function Header() {
    const StyleHeader = styled.div`
        background-image: url("https://i.imgur.com/s7LNRhR.png");
        background-position:center;
        background-repeat: no-repeat;
        background-size:100% 100%;
        height: 35vh;
    `
    return(
        <StyleHeader>
            <div className="Header">
               <img className="img" src="https://i.imgur.com/ShXS0Vd.png" alt=""/>
            </div>
        </StyleHeader>
    )
}
