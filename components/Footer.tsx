import React from "react";
import Grid, { GridLines } from "./Grid";
import styled from "styled-components";
import Link from "next/link";

const StyledArea = styled.div`
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight}; ;
`;

const StyledRow = styled.div`
    margin-top: ${(props) => props.theme.space.xlg};
    border-top: 1px solid ${(props) => props.theme.color.white};
    padding-top: ${(props) => props.theme.space.gutter * 2}px;
    display: flex;
    justify-content: flex-end;
`;

export default function Footer() {
    return (
        <Grid>
            <StyledArea>
                <StyledRow>
                    <span>
                        <Link href={"/impressum"} target={"_blank"}>
                            Impressum
                        </Link>{" "}
                        <Link href={"/datenschutz"} target={"_blank"}>
                            Datenschutz
                        </Link>
                    </span>
                </StyledRow>
            </StyledArea>
        </Grid>
    );
}
