import styled from "styled-components";
import Grid from "../components/Grid";
import SectionSpace from "../components/SectionSpace";
import { NextPage } from "next";
import CompactArea from "../components/CompactArea";

const StyledRoot = styled.div`
    color: black !important;
`;

const Impressum: NextPage = () => {
    return (
        <StyledRoot>
            <Grid>
                <CompactArea>
                    <SectionSpace />

                    <h1>Owner</h1>
                    <div>Raphael Höps</div>
                    <div>E-mail: hoeps.raphael [at] gmail.com</div>
                    <SectionSpace />
                </CompactArea>
            </Grid>
        </StyledRoot>
    );
};

export default Impressum;
