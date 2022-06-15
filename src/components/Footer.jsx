import styled from "styled-components";

const StyleFooter = styled.div`
  display: inline;
  color: white;
  height: 50px;
  position: absolute;
  left: 0;
  width: 100%;

  p{
    width: fit-content;
    display: inline;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    color:  palevioletred;
  }
`;

export default function Footer({wine}) {
  return (
    <StyleFooter>
      <div className={wine ? "wine-footer" : "Footer"}>
        <div>Vineyards Dev Team:</div>
        <p>
          Chedeline Viljean:{" "}
          <a 
            href="https://github.com/vchedeline" 
            target="_blank" 
            rel="noreferrer">
            Github
          </a>{" "}
          |{" "}
        </p>
        <p>
          Nathan Yi:{" "}
          <a 
            href="https://github.com/yinathan" 
            target="_blank" 
            rel="noreferrer">
            Github
          </a>{" "}
          |{" "}
        </p>
        <p>
          Omari Archer:{" "}
          <a 
            href="https://github.com/FullStackLuck" 
            target="_blank" 
            rel="noreferrer">
              Github
          </a>{" "}
          |{" "}
        </p>
        <p>
          Calvin Harris:{" "}
          <a
            href="https://www.linkedin.com/in/calvin-harris-jr"
            target="_blank"
            rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </StyleFooter>
  );
}