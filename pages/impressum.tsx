import styled from "styled-components";
import SectionSpace from "../components/SectionSpace";
import { NextPage } from "next";

const StyledRoot = styled.div`
    padding: 50px;
    color: black !important;
    font-family: serif;

    a {
        color: black !important;
    }
`;

const Impressum: NextPage = () => {
    return (
        <StyledRoot>
            <h1>Verantwortlicher</h1>
            <div>Raphael Höps, Ubu Imperator</div>
            <br />
            E-mail:
            <ul className={"list-disc"}>
                <li className={"ml-8"}>hoeps[dot-symbol]raphael[at-symbol]gmail[dot-symbol]com</li>
                <li className={"ml-8"}>ubuimperator[dot-symbol]band[at-symbol]gmail[dot-symbol]com</li>
            </ul>
            <br />
            (To make it more difficult for bots to read the e-mail address, we used [...] instead of real symbols Simply replace [at-symbol]
            with &quot;@&quot; and [dot-symbol] with &quot;.&quot;)
            <SectionSpace />
        </StyledRoot>
    );
};

export default Impressum;
