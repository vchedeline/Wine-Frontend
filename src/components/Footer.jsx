import styled from "styled-components";

export default function Footer() {
    const StyleFooter = styled.div`
        // display: inline;
        color:white;
        height: 50px;
        position: absolute;
        width: 100%;
        bottom: 0;

        //style p elements
        .p{
            width: fit-content;
            display: inline;
        }
    `;

    // const StyleFooterP = styled.p`
    //     width: fit-content;
    //     display: inline;
    // `;
    return(
        <StyleFooter>
            <div className="Footer">
                <h2>Vineyards Dev Team:</h2>                
                <p>Chedeline Viljean <a href="https://www.google.com" target="_blank" rel="noreferrer">google</a> | </p>
                <p>Nathan Yi <a href="https://www.google.com" target="_blank" rel="noreferrer">google</a> | </p>
                <p>Omari Archer <a href="https://www.google.com" target="_blank" rel="noreferrer">google</a> | </p>
                <p>Calvin Harris <a href="https://www.linkedin.com/in/calvin-harris-jr" target="_blank" rel="noreferrer">LinkedIn</a></p>                
            </div>
        </StyleFooter>
    )
}