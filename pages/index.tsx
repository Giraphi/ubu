import type { NextPage } from "next";
import styled from "styled-components";

import Intro from "../components/sections/Intro";
import PhotosImpex from "../components/sections/PhotosImpex";
import BandText from "../components/sections/BandText";
import Footer from "../components/Footer";
import PhotosRuebe from "../components/sections/PhotosRuebe";
import Demo from "../components/sections/Demo";
import PageMenu from "../components/PageMenu/PageMenu";
import MenuContextProvider from "../context/MenuContextProvider";

const StyledRoot = styled.div`
    background: ${(props) => props.theme.color.black};
    padding-bottom: ${(props) => props.theme.space.lg};
    padding-top: ${(props) => props.theme.space.md};
    overflow-x: hidden;

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        padding-top: ${(props) => props.theme.space.lg};
    }
`;

const Home: NextPage = () => {
    return (
        <MenuContextProvider>
            <StyledRoot>
                <PageMenu />
                {/*<div style={{ height: "50px", width: "100%", position: "fixed", top: 0, backgroundColor: "red", zIndex: "99" }}></div>*/}
                <Intro />
                <Demo />
                <BandText />
                <PhotosImpex />
                <PhotosRuebe />
                <Footer />
            </StyledRoot>
        </MenuContextProvider>
    );
};

export default Home;
