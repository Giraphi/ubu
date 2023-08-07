import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Kas1 from "../../../images/kassette/kas_1.png";
import Kas3 from "../../../images/kassette/kas_2.png";
import Image from "next/image";
import { renditions } from "../../../renditions";

const StyledRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: ${(props) => props.theme.space.sm};
    margin-bottom: ${(props) => props.theme.space.sm};

    @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
        flex-direction: row;
        margin-bottom: 0;
    }
`;

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

const StyledImageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
        flex-basis: calc((100% - 400px) / 2);
    }
`;

const StyledImageItem = styled.div`
    width: 100%;
    position: relative;

    @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
        flex-basis: 70%;
    }
`;

export interface DemoRowProps {}

export default function DemoRow(props: DemoRowProps) {
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        setIsFirstRender(false);
    }, []);

    return (
        <StyledRow>
            <StyledImageContainer>
                <StyledImageItem>
                    <Image src={Kas1} alt={"Tape"} quality={50} sizes={renditions.half} />
                </StyledImageItem>
            </StyledImageContainer>

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

            <StyledImageContainer>
                <StyledImageItem>
                    <Image src={Kas3} alt={"Tape"} quality={50} sizes={renditions.half} />
                </StyledImageItem>
            </StyledImageContainer>
        </StyledRow>
    );
}
