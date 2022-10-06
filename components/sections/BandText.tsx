import React from "react";
import Section from "../Section";
import Grid, { GridLines } from "../Grid";
import styled from "styled-components";

const StyledArea = styled.div`
    grid-column: ${GridLines.col3Start} / ${GridLines.col10End};
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
                    <p>
                        Der Name der Band bezieht sich auf das Theaterstück "König Ubu" (1896) des französischen Schriftstellers Alfred
                        Jarry. Ein Stück, das wegen seines grotesken, karnevalesken und absurden Charakters viele surrealistische und
                        dadaistische Künstler der damaligen Zeit in Erstaunen versetzte. Ubu Imperator ist auch der Titel eine der
                        bekanntesten Werke von Max Ernst.
                    </p>
                </StyledArea>
            </Grid>
        </Section>
    );
}
