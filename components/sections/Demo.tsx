import React from "react";
import Section from "../Section";
import styled from "styled-components";
import Grid, { GridLines } from "../Grid";

const StyledArea = styled.div`
    grid-column: ${GridLines.col3Start} / ${GridLines.col10End};
`;

export interface DemoProps {}

export default function Demo(props: DemoProps) {
    return (
        <Section>
            <Grid>
                <StyledArea>
                    <h2>Ubu Demo</h2>
                </StyledArea>
            </Grid>
        </Section>
    );
}
