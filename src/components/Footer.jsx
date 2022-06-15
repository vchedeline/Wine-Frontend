import styled from "styled-components";

const StyleFooter = styled.div`
  display: block;
  color: white;
  height: 50px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  overflow-y: hidden;
  background-color: RGBA(126, 15, 16, 0.3);

  p{
    width: fit-content;
    display: inline;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    color:  palevioletred;
    text-decoration: underline;
  }
`;

const StyleBottom = styled.div`
  flex: 1,
  justifyContent: 'flex-end',
  marginBottom: 36
`

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