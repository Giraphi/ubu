import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Grid, { GridLines } from "../../Grid"
import CompactArea from "../../CompactArea"
import SectionSpace from "../../SectionSpace"
import ScrollTarget, { ScrollId } from "../../ScrollTarget"
import { FormattedMessage } from "react-intl"
import klangschutz from "../../../images/klangschutz-banner-original.jpeg"
import Image from "next/legacy/image"
import { AspectRatioContent, aspectRatioMixin } from "../../../styles/aspect-ratio"
import DemoRow from "./DemoRow"
import { imageRenditions } from "../../../imageRenditions"
import SectionHeadline from "../../SectionHeadline"

const StyledP = styled.p`
  && {
    margin-bottom: ${(props) => props.theme.space.sm};

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
      margin-bottom: ${(props) => props.theme.space.lg};
    }
  }
`

const StyledBanner = styled.div`
  grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};

  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    grid-column: ${GridLines.col3Start} / ${GridLines.col10End};
  }
  ${(props) => aspectRatioMixin(props.theme.ratio.klangschutzBanner)};
`

const StyledLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
`

const RowArea = styled.div`
  grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};

  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    grid-column: ${GridLines.screenLeft} / ${GridLines.screenRight};
  }
`

export default function Demo() {
  return (
    <>
      <Grid>
        <CompactArea>
          <SectionHeadline>Release - Ubu Tape</SectionHeadline>

          <StyledP>
            <FormattedMessage
              id={"home.demo.text"}
              values={{
                klangschutzLink: (
                  <a href={"https://www.klangschutz.com/epages/78930758.sf/de_DE/?ObjectPath=/Shops/78930758/Products/0000022"}>
                    Klangschutz Mailorder
                  </a>
                ),
              }}
            />
          </StyledP>
        </CompactArea>

        <RowArea>
          <DemoRow />
        </RowArea>
        <CompactArea>
          <p className={"pb-8"}>
            <FormattedMessage
              id={"home.demo.text2"}
              values={{
                klangschutzLink: (
                  <a href={"https://www.klangschutz.com/epages/78930758.sf/de_DE/?ObjectPath=/Shops/78930758/Products/0000022"}>
                    Klangschutz Mailorder
                  </a>
                ),
              }}
            />
          </p>
        </CompactArea>

        <StyledBanner>
          <AspectRatioContent>
            <StyledLink href={"https://www.klangschutz.com/epages/78930758.sf/de_DE/?ObjectPath=/Shops/78930758/Products/0000022"}>
              <Image
                src={klangschutz}
                quality={90}
                alt={"klangschutz"}
                layout="fill"
                objectFit={"cover"}
                sizes={imageRenditions.full}
                lazyBoundary={"600px"}
              />
            </StyledLink>
          </AspectRatioContent>
        </StyledBanner>
      </Grid>
      <SectionSpace />
    </>
  )
}
