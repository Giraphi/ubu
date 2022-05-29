import type {NextPage} from 'next'
import styled from "styled-components";
import LeviathanNoBg from "../images/leviathan-no-bg.svg"
import Grid, {GridLines} from "../components/Grid";
import {colorKeyframes} from "../styles/keyframes";
import Logo from "../images/logo.svg";
import Instagram from "../images/instagram.svg";
import Facebook from "../images/facebook.svg";
import Mail from "../images/mail.svg";
import SocialIcons from "../components/SocialIcons";

const StyledRoot = styled.div`
    min-height: 100vh;
    background: ${props => props.theme.color.black};
`

const StyledTopLine = styled.div`
    color: ${props => props.theme.color.white};
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    grid-row: 1;
    display: flex;
    bottom: ${props => props.theme.space.md.base};
    height: calc(${props => props.theme.space.md.base} *5);
    justify-content: center;
`

const StyledColumnLeft = styled.div`
    grid-column: ${GridLines.col2Start} / ${GridLines.col6End};
    color: ${props => props.theme.color.white};
    text-align: right;
    grid-row:2;
    padding-top: ${props => props.theme.space.md.base};
`

const StyledColumnRight = styled.div`
    grid-row:2;
    grid-column: ${GridLines.col7Start} / ${GridLines.col10End};
    animation: ${colorKeyframes} 4s linear infinite;
`



const Home: NextPage = () => {
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
                        Don't hesitate any longer and join us!<br/>
                        May love guide us all.
                    </p>
                    <p>
                        Daniel Pizarro - Drums and Illustration<br/>
                        Simon Bartenschlager - Guitar<br/>
                        Raphael Höps - Synthesizer<br/>
                    </p>
                    <SocialIcons/>
                </StyledColumnLeft>

                <StyledColumnRight>
                    <LeviathanNoBg/>
                </StyledColumnRight>

            </Grid>
        </StyledRoot>

    )
}

export default Home
