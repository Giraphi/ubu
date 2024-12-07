import React, { useRef } from "react"
import Grid, { GridLines } from "../Grid"
import Logo from "../../images/logo.svg"
import LeviathanNoBg from "../../images/leviathan-no-bg.svg"
import SocialIcons from "../SocialIcons"
import styled from "styled-components"
import { colorAnimation } from "../../styles/color-animation"
import Shaker from "../../images/figuren/shaker.svg"
import Spotify from "../../images/spotify_w_text.svg"
import HideOnMobile from "../HideOnMobile"
import HideOnDesktop from "../HideOnDesktop"
import SectionSpace from "../SectionSpace"
import ScrollTarget, { ScrollId, scrollTargetMixin } from "../ScrollTarget"

const StyledTopLine = styled.div`
  color: ${(props) => props.theme.color.white};
  grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
  display: flex;
  justify-content: center;
  grid-row: 1;
  margin-bottom: ${(props) => props.theme.space.sm};
  margin-right: ${(props) => props.theme.space.gutter * 2}px;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    grid-column: ${GridLines.col3Start} / ${GridLines.col10End};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    margin-bottom: ${(props) => props.theme.space.lg};
    margin-top: ${(props) => props.theme.space.md};
    grid-column: ${GridLines.col4Start} / ${GridLines.col9End};
  }
`

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
`

const StyledColumnText = styled.div`
  grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
  color: ${(props) => props.theme.color.white};
  display: flex;
  flex-direction: column;
  grid-row: 3;

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    grid-row: 2;
    margin-bottom: 0;
    padding-top: 33%;
    grid-column: ${GridLines.col8Start} / ${GridLines.col11End};
  }
`

const StyledColumnImage = styled.div`
  grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
  ${colorAnimation};
  grid-row: 2;
  position: relative;
  cursor: pointer;

  ::before {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background-image: linear-gradient(to top, ${(props) => props.theme.color.black} 10%, transparent 30%);
    content: " ";
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    grid-row: 2;
    grid-column: ${GridLines.col2Start} / ${GridLines.col7End};
    text-align: right;
  }
`

const StyledScrollTarget = styled.div`
  ${scrollTargetMixin};
`

export default function Intro() {
  const scrollTarget = useRef<HTMLDivElement>(null)

  function handleClick() {
    if (!scrollTarget.current) {
      return
    }
    scrollTarget.current.scrollIntoView({ block: "start", behavior: "smooth" })
  }

  return (
    <>
      <ScrollTarget id={ScrollId.top} />
      <Grid>
        <StyledTopLine onClick={handleClick}>
          <Logo />
        </StyledTopLine>

        <StyledColumnImage onClick={handleClick}>
          <LeviathanNoBg />
          <StyledScrollTarget ref={scrollTarget} />
        </StyledColumnImage>

        <StyledColumnText>
          <HideOnMobile>
            <StyledShaker>
              <Shaker />
            </StyledShaker>
          </HideOnMobile>
          <p className={"pb-4"}>
            Something is rising from the depths.
            <br />
            King Ubu awaits you.
          </p>
          <HideOnDesktop>
            <StyledShaker>
              <Shaker />
            </StyledShaker>
          </HideOnDesktop>

          {/* <p className={"pb-8"}>
                        Daniel Pizarro - Drums and Illustration
                        <br />
                        Simon Bartenschlager - Guitar
                        <br />
                        Raphael Höps - Synthesizer
                        <br />
                    </p> */}

          <SocialIcons />

          <div className="mt-3 flex justify-start">
            <a
              href="https://open.spotify.com/artist/5s5eLEhylyrYKqaW2dyiZ7?si=Ay4J6F6nT4yXNjsdOpqZSA"
              className="inline-flex hover:animate-color"
            >
              <Spotify className="h-10 w-auto" />
            </a>
          </div>
          <HideOnDesktop>
            <SectionSpace />
          </HideOnDesktop>
        </StyledColumnText>
      </Grid>
    </>
  )
}
