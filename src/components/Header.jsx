import styled from "styled-components";

const StyleHeader = styled.div`
  background-image: url("https://i.imgur.com/s7LNRhR.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 35vh;
`;

export default function Header() {
  return (
    <StyleHeader>
      <div className="Header">
        <img className="img" src="https://i.imgur.com/ShXS0Vd.png" alt="" />
      </div>
    </StyleHeader>
  );
}