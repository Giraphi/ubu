import React from "react";
import SectionSpace from "../SectionSpace";
import Grid, { GridLines } from "../Grid";
import styled from "styled-components";
import Hexe from "../../images/figuren/hexe.svg";
import Hexe2 from "../../images/figuren/hexe_2.svg";
import Narr from "../../images/figuren/narr.svg";
import Kerze from "../../images/figuren/kerze.svg";
import Shaker from "../../images/figuren/shaker.svg";
import Figur from "../Figur";
import CompactArea from "../CompactArea";

const StyledRotateFigure = styled(Figur)`
    transform: scaleX(-1);
`;

const Row = styled.div`
    display: flex;
    justify-content: center;
`;

export interface TextProps {}

export default function BandText(props: TextProps) {
    return (
        <Grid>
            <CompactArea>
                <h2>Über uns</h2>
                <p>
                    UBU IMPERATOR ist ein 2022 gegründetes Krautrocktrio aus München mit Genreeinflüssen aus Noise, Experimental und
                    Progressive.
                </p>
                <p>
                    Die Musik von UBU IMPERATOR ist meist instrumental und geprägt von stimmungsvoll-krautigen Flächen, immersiven Sequenzen
                    und Arpeggios, sowie teils dystopischem Noise, der von harmonischen Synthesizer Akkorden abgelöst wird.
                </p>
                <Row>
                    <Figur>
                        <Hexe />
                    </Figur>
                    <Figur delay={1}>
                        <Hexe2 />
                    </Figur>
                    <StyledRotateFigure delay={2}>
                        <Hexe />
                    </StyledRotateFigure>
                </Row>
                <p>
                    Der Name der Band bezieht sich auf das Theaterstück &bdquo;König Ubu&rdquo; (1896) des französischen Schriftstellers
                    Alfred Jarry. Ein Stück, das wegen seines grotesken, karnevalesken und absurden Charakters viele surrealistische und
                    dadaistische Künstler der damaligen Zeit in Erstaunen versetzte. Ubu Imperator ist auch der Titel eine der bekanntesten
                    Werke von Max Ernst.
                </p>
                <Row>
                    <Figur delay={3}>
                        <Narr />
                    </Figur>
                    <Figur delay={1.5}>
                        <Kerze />
                    </Figur>
                    <Figur scale={2} delay={4}>
                        <Shaker />
                    </Figur>
                </Row>
                <SectionSpace />
            </CompactArea>
        </Grid>
    );
}
