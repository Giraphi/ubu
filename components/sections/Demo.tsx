import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Grid, { GridLines } from "../Grid";
import CompactArea from "../CompactArea";
import SectionSpace from "../SectionSpace";

const StyledIframeContainer = styled.div`
    display: flex;
    justify-content: center;
    // grid-row: 2;
    // grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    //
    // @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    //     grid-column: ${GridLines.col3Start} / ${GridLines.col5End};
    //     position: static;
    //     padding-top: 0;
    // }
`;

const StyledIframe = styled.iframe`
    border: 0;
    box-shadow: 0 0 15px 1px ${(props) => props.theme.color.secondary};
    width: 300px;
    height: 538px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        box-shadow: 0 0 26px 6px ${(props) => props.theme.color.secondary};
        width: 400px;
        height: 638px;
    }
`;

const StyledP = styled.div`
    margin-bottom: ${(props) => props.theme.space.sm};

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        margin-bottom: ${(props) => props.theme.space.lg};
    }
`;

export interface DemoProps {}

export default function Demo(props: DemoProps) {
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        setIsFirstRender(false);
    }, []);

    return (
        <>
            <Grid>
                <CompactArea>
                    <h2>Ubu Demo</h2>
                    <StyledP>Ubu präsentiert die ersten frisch fertig gestellten Demo Aufnahmen. Gemastered von Ulli. Vielen Dank!</StyledP>
                    <StyledIframeContainer>
                        {!isFirstRender && (
                            <StyledIframe
                                // style="border: 0; width: 400px; height: 274px;"
                                src="https://bandcamp.com/EmbeddedPlayer/album=3643840065/size=large/bgcol=333333/linkcol=ffffff/transparent=true/"
                                seamless
                            >
                                <a href="https://ubuimperator.bandcamp.com/album/ubudemo">Ubudemo by Ubu Imperator</a>
                            </StyledIframe>
                        )}
                    </StyledIframeContainer>
                </CompactArea>
            </Grid>
            <SectionSpace />
        </>
    );
}
