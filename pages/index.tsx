import type { NextPage } from "next";
import styled from "styled-components";

import Intro from "../components/sections/Intro";
import PhotosImpex from "../components/sections/PhotosImpex";
import BandText from "../components/sections/BandText";
import Footer from "../components/Footer";
import PhotosRuebe from "../components/sections/PhotosRuebe";
import Demo from "../components/sections/Demo";
import PageMenu from "../components/PageMenu/PageMenu";

const StyledRoot = styled.div`
    background: ${(props) => props.theme.color.black};
    padding-bottom: ${(props) => props.theme.space.sm};
    padding-top: ${(props) => props.theme.space.lg};
    overflow-x: hidden;
`;

const Home: NextPage = () => {
    return (
        <StyledRoot>
            <PageMenu />
            <Intro />
            <Demo />
            <BandText />
            <PhotosImpex />
            <PhotosRuebe />
            <Footer />
        </StyledRoot>
    );
};

export default Home;
