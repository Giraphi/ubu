import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Grid, { GridLines } from "../Grid";
import CompactArea from "../CompactArea";
import SectionSpace from "../SectionSpace";
import ScrollTarget, { ScrollId } from "../ScrollTarget";
import { FormattedMessage } from "react-intl";
import klangschutz from "../../images/klangschutz-banner-original.jpeg";
import Image from "next/image";
import { AspectRatioContent, aspectRatioMixin } from "../../styles/aspect-ratio";
import raphi from "../../images/fotos-ruebezahl/ruebe-raphi.jpg";
import GlitchyImage from "../GlitchyImage";

const StyledIframeContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: ${(props) => props.theme.space.gutter}px;
`;

const StyledIframe = styled.iframe`
    border: 0;
    box-shadow: 0 0 15px 1px ${(props) => props.theme.color.secondary};
    width: 300px;
    height: 538px;
    margin-bottom: ${(props) => props.theme.space.sm};

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        margin-bottom: ${(props) => props.theme.space.lg};
    }

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        box-shadow: 0 0 26px 6px ${(props) => props.theme.color.secondary};
        width: 400px;
        height: 638px;
    }
`;

const StyledP = styled.p`
    && {
        margin-bottom: ${(props) => props.theme.space.sm};

        @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
            margin-bottom: ${(props) => props.theme.space.lg};
        }
    }
`;

const StyledBanner = styled.div`
    grid-row: 2;
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        grid-column: ${GridLines.col3Start} / ${GridLines.col10End};
    }
    ${(props) => aspectRatioMixin(props.theme.ratio.klangschutzBanner)};
`;

const StyledLink = styled.a`
    display: block;
    width: 100%;
    height: 100%;
    //display: block;
    //aspect-ratio: 1.49;
    //position: relative;
`;

export default function Demo() {
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        setIsFirstRender(false);
    }, []);

    return (
        <>
            <ScrollTarget id={ScrollId.ubuDemo} />
            <Grid>
                <CompactArea>
                    <h2>Ubu Tape</h2>
                    <StyledP>
                        <FormattedMessage
                            id={"home.demo.text"}
                            values={{
                                klangschutzLink: (
                                    <a
                                        href={
                                            "https://www.klangschutz.com/epages/78930758.sf/de_DE/?ObjectPath=/Shops/78930758/Products/0000022"
                                        }
                                    >
                                        Klangschutz Mailorder
                                    </a>
                                ),
                            }}
                        />
                    </StyledP>
                    <StyledIframeContainer>
                        {!isFirstRender && (
                            <StyledIframe
                                // style="border: 0; width: 400px; height: 274px;"
                                title={"bandcamp"}
                                src="https://bandcamp.com/EmbeddedPlayer/album=3643840065/size=large/bgcol=333333/linkcol=ffffff/transparent=true/"
                                seamless
                            >
                                <a href="https://ubuimperator.bandcamp.com/album/ubudemo">Ubudemo by Ubu Imperator</a>
                            </StyledIframe>
                        )}
                    </StyledIframeContainer>
                    <p>
                        <FormattedMessage id={"home.demo.text2"} />
                    </p>
                </CompactArea>

                <StyledBanner>
                    <AspectRatioContent>
                        <StyledLink
                            href={"https://www.klangschutz.com/epages/78930758.sf/de_DE/?ObjectPath=/Shops/78930758/Products/0000022"}
                        >
                            <Image src={klangschutz} quality={90} alt={"klangschutz"} layout="fill" objectFit={"cover"} />
                        </StyledLink>
                    </AspectRatioContent>
                </StyledBanner>
            </Grid>
            <SectionSpace />
        </>
    );
}
