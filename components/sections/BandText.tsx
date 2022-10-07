import React from "react";
import Section from "../Section";
import Grid, { GridLines } from "../Grid";
import styled from "styled-components";
import Hexe from "../../images/figuren/hexe.svg";
import Hexe2 from "../../images/figuren/hexe_2.svg";
import Narr from "../../images/figuren/narr.svg";
import Kerze from "../../images/figuren/kerze.svg";
import Shaker from "../../images/figuren/shaker.svg";
import Figur from "../Figur";

const StyledArea = styled.div`
    grid-column: ${GridLines.col3Start} / ${GridLines.col10End};
`;

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
        <Section>
            <Grid>
                <StyledArea>
                    <h2>Über uns</h2>
                    <p>
                        UBU IMPERATOR ist ein 2022 gegründetes Krautrocktrio aus München mit Genreeinflüssen aus Noise, Experimental und
                        Progressive.
                    </p>
                    <p>
                        Die Musik von UBU IMPERATOR ist meist instrumental und geprägt von stimmungsvoll-krautigen Flächen, immersiven
                        Sequenzen und Arpeggios, sowie teils dystopischem Noise, der von harmonischen Synthesizer Akkorden abgelöst wird.
                    </p>
                    <Row>
                        <Figur>
                            <Hexe />
                        </Figur>
                        <Figur>
                            <Hexe2 />
                        </Figur>
                        <StyledRotateFigure>
                            <Hexe />
                        </StyledRotateFigure>
                    </Row>
                    <p>
                        Der Name der Band bezieht sich auf das Theaterstück "König Ubu" (1896) des französischen Schriftstellers Alfred
                        Jarry. Ein Stück, das wegen seines grotesken, karnevalesken und absurden Charakters viele surrealistische und
                        dadaistische Künstler der damaligen Zeit in Erstaunen versetzte. Ubu Imperator ist auch der Titel eine der
                        bekanntesten Werke von Max Ernst.
                    </p>
                    <Row>
                        <Figur>
                            <Narr />
                        </Figur>
                        <Figur>
                            <Kerze />
                        </Figur>
                        <Figur>
                            <Shaker />
                        </Figur>
                    </Row>
                </StyledArea>
            </Grid>
        </Section>
    );
}
