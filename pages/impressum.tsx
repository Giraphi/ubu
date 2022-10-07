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
                    <br />
                    E-mail: raphael[dot-symbol]hoeps[at-symbol]gmx[dot-symbol]net
                    <br />
                    <br />
                    (To make it more difficult for bots to read the e-mail address, we used [...] instead of real symbols Simply replace
                    [at-symbol] with &quot;@&quot; and [dot-symbol] with &quot;.&quot;)
                    <SectionSpace />
                </CompactArea>
            </Grid>
        </StyledRoot>
    );
};

export default Impressum;
