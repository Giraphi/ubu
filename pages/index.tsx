import type { NextPage } from "next";
import styled from "styled-components";

import Intro from "../components/sections/Intro";
import Photos from "../components/sections/Photos";
import BandText from "../components/sections/BandText";
import Footer from "../components/Footer";

const StyledRoot = styled.div`
    min-height: 100vh;
    background: ${(props) => props.theme.color.black};
    padding-bottom: ${(props) => props.theme.space.lg};
    padding-top: ${(props) => props.theme.space.lg};
`;

const Home: NextPage = () => {
    return (
        <StyledRoot>
            <Intro />
            {/*<Demo />*/}
            <BandText />
            <Photos />
            <Footer />
        </StyledRoot>
    );
};

export default Home;
