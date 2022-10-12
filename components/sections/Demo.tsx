import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Grid from "../Grid";
import CompactArea from "../CompactArea";
import SectionSpace from "../SectionSpace";

const StyledIframeContainer = styled.div`
    padding-top: 171%;
    position: relative;
    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        position: static;
        padding-top: 0;
    }
`;

const StyledIframe = styled.iframe`
    border: 0;
    box-shadow: 0 0 15px 1px ${(props) => props.theme.color.secondary};
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        box-shadow: 0 0 26px 6px ${(props) => props.theme.color.secondary};
        width: 400px;
        height: 638px;
        position: static;
    }
`;

const StyledRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        align-items: flex-end;
        justify-content: space-between;
        flex-direction: row;
    }
`;

const StyledTeam = styled.div`
    width: 250px;
`;

export interface DemoProps {}

export default function Demo(props: DemoProps) {
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        setIsFirstRender(false);
    }, []);

    // https://bandcamp.com/EmbeddedPlayer/album=3643840065/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/
    // https://bandcamp.com/EmbeddedPlayer/album=3643840065/size=large/bgcol=333333/linkcol=ffffff/transparent=true/"

    return (
        <>
            <Grid>
                <CompactArea>
                    <h2>Ubu Demo</h2>

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
                    {/*</StyledRow>*/}
                </CompactArea>
            </Grid>
            <SectionSpace />
        </>
    );
}
