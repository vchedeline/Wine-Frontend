import styled from "styled-components";


export default function Header() {
    const StyleHeader = styled.div`
    img{
        position:relative;
        top:0px;
        height: 38vh;
        width: 38vw;
        margin-bottom:0;
        padding-bottom:-10px;
        
    }
    `
    return(
        <StyleHeader>
            <div className="Header">
               <img className="img" src="https://i.imgur.com/VtFrpVO.png?1" alt=""/>
            </div>
        </StyleHeader>
    )
}
