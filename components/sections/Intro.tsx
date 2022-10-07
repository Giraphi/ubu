import React from "react";
import Grid, { GridLines } from "../Grid";
import Logo from "../../images/logo.svg";
import LeviathanNoBg from "../../images/leviathan-no-bg.svg";
import SocialIcons from "../SocialIcons";
import styled from "styled-components";
import { colorAnimation } from "../../styles/keyframes";
import Shaker from "../../images/figuren/shaker.svg";
import HideOnMobile from "../HideOnMobile";
import HideOnDesktop from "../HideOnDesktop";
import SectionSpace from "../SectionSpace";

const StyledTopLine = styled.div`
    color: ${(props) => props.theme.color.white};
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    display: flex;
    justify-content: center;
    grid-row: 1;
    margin-bottom: ${(props) => props.theme.space.sm};
    margin-right: ${(props) => props.theme.space.gutter * 2}px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        grid-column: ${GridLines.col3Start} / ${GridLines.col10End};
    }

    @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
        margin-bottom: ${(props) => props.theme.space.lg};
        margin-top: ${(props) => props.theme.space.md};
        grid-column: ${GridLines.col4Start} / ${GridLines.col9End};
    }
`;

const StyledShaker = styled.div`
    width: ${(props) => props.theme.space.figure};
    height: ${(props) => props.theme.space.figure};
    > svg {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: bottom;
        transform: scale(2.1) translateY(-4px) translateX(-8px);
    }
`;

const StyledColumnText = styled.div`
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    color: ${(props) => props.theme.color.white};
    display: flex;
    flex-direction: column;
    grid-row: 3;

    @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
        grid-row: 2;
        margin-bottom: 0;
        padding-top: 33%;
        grid-column: ${GridLines.col8Start} / ${GridLines.col11End};
    }
`;

const StyledColumnImage = styled.div`
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    ${colorAnimation};
    grid-row: 2;
    position: relative;

    ::before {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        background-image: linear-gradient(to top, ${(props) => props.theme.color.black} 10%, transparent 30%);
        content: " ";
    }

    @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
        grid-row: 2;
        grid-column: ${GridLines.col2Start} / ${GridLines.col7End};
        text-align: right;
    }
`;

const StyledMembersParagraph = styled.p`
    margin-bottom: ${(props) => props.theme.space.gutter * 4}px;
`;

export default function Intro() {
    return (
        <Grid>
            <StyledTopLine>
                <Logo />
            </StyledTopLine>
            <StyledColumnText>
                <HideOnMobile>
                    <StyledShaker>
                        <Shaker />
                    </StyledShaker>
                </HideOnMobile>
                <p>
                    Something is rising from the depths.
                    <br />
                    King Ubu awaits you.
                </p>
                <HideOnDesktop>
                    <StyledShaker>
                        <Shaker />
                    </StyledShaker>
                </HideOnDesktop>

                <StyledMembersParagraph>
                    Daniel Pizarro - Drums and Illustration
                    <br />
                    Simon Bartenschlager - Guitar
                    <br />
                    Raphael Höps - Synthesizer
                    <br />
                </StyledMembersParagraph>
                <SocialIcons />
                <HideOnDesktop>
                    <SectionSpace />
                </HideOnDesktop>
            </StyledColumnText>

            <StyledColumnImage>
                <LeviathanNoBg />
            </StyledColumnImage>

            {/*<StyledMembers>*/}
            {/*    <HideOnDesktop>{membersParagraph}</HideOnDesktop>*/}
            {/*</StyledMembers>*/}
        </Grid>
    );
}
