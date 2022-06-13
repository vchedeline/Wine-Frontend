import styled from "styled-components";

const StyleFooter = styled.div`
  display: inline;
  color: white;
  height: 50px;
  position: absolute;
  width: 100%;
  bottom: 0;
`;

export default function Footer() {
  return (
    <StyleFooter>
      <div className="Footer">
        <h2>Vineyards Dev Team:</h2>
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
