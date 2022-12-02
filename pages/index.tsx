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
import Video from "../components/sections/Video";
import { useRouter } from "next/router";
import { LanguageContext } from "../context/LanguageContext";

const StyledRoot = styled.div`
    background: ${(props) => props.theme.color.black};
    padding-bottom: ${(props) => props.theme.space.gutter * 2}px;
    padding-top: ${(props) => props.theme.space.md};
    overflow-x: hidden;

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        padding-top: ${(props) => props.theme.space.lg};
    }
`;

const Home: NextPage = () => {
    const locale = useRouter().locale as "de" | "en"; // because of next.config.js this can only be "de" or "en"

    return (
        <LanguageContext.Provider value={{ locale: locale }}>
            <MenuContextProvider>
                <StyledRoot>
                    <PageMenu />
                    <Intro />
                    <Demo />
                    <BandText />
                    <Video />
                    <PhotosImpex />
                    <PhotosRuebe />
                    <Footer />
                </StyledRoot>
            </MenuContextProvider>
        </LanguageContext.Provider>
    );
};

export default Home;
