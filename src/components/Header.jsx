import styled from "styled-components"

const StyleHeader = styled.div`
  img {
    position: relative;
    top: 0px;
    height: 38vh;
    width: 38vw;
    margin-bottom: 0;
    padding-bottom: -10px;
  }
`;

export default function Header() {
    const StyleHeader = styled.div`
    img{
        position:relative;
        top: 2.5em;
        height: 32vh;
        width: 30vw;
        padding-bottom:-10px;
    }
    .header-div {
        height: 200px;
    }
    `
    return(
        <StyleHeader>
            <div className="header-div">
               <img src="https://i.imgur.com/VtFrpVO.png?1" alt=""/>
            </div>
        </StyleHeader>
    )
}
