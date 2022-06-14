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
`;

export default function Footer({wine}) {
  return (
    <StyleFooter>
      <div className={wine ? "wine-footer" : "Footer"}>
        <div>Vineyards Dev Team:</div>
        <p>
          Chedeline Viljean{" "}
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            google
          </a>{" "}
          |{" "}
        </p>
        <p>
          Nathan Yi{" "}
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            google
          </a>{" "}
          |{" "}
        </p>
        <p>
          Omari Archer{" "}
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            google
          </a>{" "}
          |{" "}
        </p>
        <p>
          Calvin Harris{" "}
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