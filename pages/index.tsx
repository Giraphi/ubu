import type { NextPage } from "next";
import styled from "styled-components";

import Intro from "../components/sections/Intro";
import PhotosImpex from "../components/sections/PhotosImpex";
import BandText from "../components/sections/BandText";
import Footer from "../components/Footer";
import PhotosRuebe from "../components/sections/PhotosRuebe";
import Demo from "../components/sections/Demo/Demo";
import PageMenu from "../components/PageMenu/PageMenu";
import MenuContextProvider from "../context/MenuContextProvider";
import Video from "../components/sections/Video";
import { useRouter } from "next/router";
import en from "../lang/en.json";
import de from "../lang/de.json";
import { IntlProvider } from "react-intl";
import BandPic from "../components/BandPic";

const messages: Record<string, any> = {
    de,
    en,
};

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
        <IntlProvider locale={locale} messages={messages[locale]}>
            <MenuContextProvider>
                <StyledRoot>
                    <PageMenu />
                    <Intro />
                    <BandPic />
                    <Demo />
                    <BandText />
                    <Video />
                    <PhotosImpex />
                    <PhotosRuebe />
                    <Footer />
                </StyledRoot>
            </MenuContextProvider>
        </IntlProvider>
    );
};

export default Home;
