import type {NextPage} from 'next'
import styled from "styled-components";
import LeviathanNoBg from "../images/leviathan-no-bg.svg"
import Grid, {GridLines} from "../components/Grid";
import {colorKeyframes} from "../styles/keyframes";
import Logo from "../images/logo.svg";
import SocialIcons from "../components/SocialIcons";
import HideOnMobile from "../components/HideOnMobile";
import HideOnDesktop from "../components/HideOnDesktop";

const StyledRoot = styled.div`
    min-height: 100vh;
    background: ${props => props.theme.color.black};
    padding-bottom: ${props => props.theme.space.lg.base};
`

const StyledTopLine = styled.div`
    color: ${props => props.theme.color.white};
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    display: flex;
    justify-content: center;
    grid-row: 1;
    margin-bottom: ${props => props.theme.space.md.base};
    margin-top: ${props => props.theme.space.md.base};
    margin-left: ${props => props.theme.space.gutter}px;
    margin-right: ${props => props.theme.space.gutter}px;

    @media (min-width: ${props => props.theme.breakpoints.md}px) {
        grid-column: ${GridLines.col3Start} / ${GridLines.col10End};
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}px) {
        margin-bottom: ${props => props.theme.space.md.lg};
        margin-top: ${props => props.theme.space.md.lg};
        grid-column: ${GridLines.col4Start} / ${GridLines.col9End};
    }
`

const StyledColumnLeft = styled.div`
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    color: ${props => props.theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-row: 2;

    @media (min-width: ${props => props.theme.breakpoints.md}px) {
        text-align: center
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}px) {
        align-items: flex-end;
        padding-bottom: ${props => props.theme.space.md.base};
        grid-column: ${GridLines.col3Start} / ${GridLines.col6End};
        text-align: right;
    }
`

const StyledColumnRight = styled.div`
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    animation: ${colorKeyframes} 4s linear infinite;
    grid-row: 3;

    @media (min-width: ${props => props.theme.breakpoints.lg}px) {
        grid-row: 2;
        grid-column: ${GridLines.col7Start} / ${GridLines.col10End};
        text-align: right;
    }
`

const StyledMembersParagraph = styled.div`
    grid-row: 4;
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};

    @media (min-width: ${props => props.theme.breakpoints.md}px) {
        text-align: center
    }
`

const Home: NextPage = () => {
    const membersParagraph = <>
        <p>
            Daniel Pizarro - Drums and Illustration<br/>
            Simon Bartenschlager - Guitar<br/>
            Raphael Höps - Synthesizer<br/>
        </p>
        <SocialIcons/>
    </>

    return (
        <StyledRoot>
            <Grid>
                <StyledTopLine>
                    <Logo/>
                </StyledTopLine>
                <StyledColumnLeft>
                    <p>
                        Something's rising from the depths.<br/>
                        King Ubu's servants are gathering. <br/>
                        Join us! And may love guide us all.
                    </p>

                    <HideOnMobile>
                        {membersParagraph}
                    </HideOnMobile>
                </StyledColumnLeft>

                <StyledColumnRight>
                    <LeviathanNoBg/>
                </StyledColumnRight>

                <StyledMembersParagraph>
                    <HideOnDesktop>
                        {membersParagraph}
                    </HideOnDesktop>
                </StyledMembersParagraph>
            </Grid>
        </StyledRoot>

    )
}

export default Home
