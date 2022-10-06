import React from "react";
import Grid, { GridLines } from "../Grid";
import Logo from "../../images/logo.svg";
import HideOnMobile from "../HideOnMobile";
import LeviathanNoBg from "../../images/leviathan-no-bg.svg";
import HideOnDesktop from "../HideOnDesktop";
import SocialIcons from "../SocialIcons";
import styled from "styled-components";
import { colorKeyframes } from "../../styles/keyframes";

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
        margin-bottom: ${(props) => props.theme.space.md};
        margin-top: ${(props) => props.theme.space.md};
        grid-column: ${GridLines.col4Start} / ${GridLines.col9End};
    }
`;

const StyledColumnLeft = styled.div`
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    color: ${(props) => props.theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-row: 2;

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        text-align: center;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
        align-items: flex-end;
        padding-bottom: ${(props) => props.theme.space.md};
        grid-column: ${GridLines.col3Start} / ${GridLines.col6End};
        text-align: right;
    }
`;

const StyledColumnRight = styled.div`
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    animation: ${colorKeyframes} 4s linear infinite;
    grid-row: 3;

    @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
        grid-row: 2;
        grid-column: ${GridLines.col7Start} / ${GridLines.col10End};
        text-align: right;
    }
`;

const StyledMembers = styled.div`
    grid-row: 4;
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        text-align: center;
    }
`;

const StyledMembersParagraph = styled.p`
    margin-bottom: ${(props) => props.theme.space.gutter * 4}px;
`;

export default function Intro() {
    const membersParagraph = (
        <>
            <StyledMembersParagraph>
                Daniel Pizarro - Drums and Illustration
                <br />
                Simon Bartenschlager - Guitar
                <br />
                Raphael Höps - Synthesizer
                <br />
            </StyledMembersParagraph>
            <SocialIcons />
        </>
    );

    return (
        <Grid>
            <StyledTopLine>
                <Logo />
            </StyledTopLine>
            <StyledColumnLeft>
                <p>
                    Something is rising from the depths.
                    <br />
                    King Ubu awaits you.
                </p>

                <HideOnMobile>{membersParagraph}</HideOnMobile>
            </StyledColumnLeft>

            <StyledColumnRight>
                <LeviathanNoBg />
            </StyledColumnRight>

            <StyledMembers>
                <HideOnDesktop>{membersParagraph}</HideOnDesktop>
            </StyledMembers>
        </Grid>
    );
}
