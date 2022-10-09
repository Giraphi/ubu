import styled from "styled-components";
import Grid from "../components/Grid";
import SectionSpace from "../components/SectionSpace";
import { NextPage } from "next";
import CompactArea from "../components/CompactArea";

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
            <div>Raphael Höps</div>
            <br />
            E-mail: raphael[dot-symbol]hoeps[at-symbol]gmx[dot-symbol]net
            <br />
            <SectionSpace />
        </StyledRoot>
    );
};

export default Impressum;
