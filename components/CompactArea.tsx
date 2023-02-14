import React, { ReactNode } from "react";
import styled from "styled-components";
import { GridLines } from "./Grid";

const StyledRoot = styled.div`
    grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
    }
`;

export interface CompactAreaProps {
    children: ReactNode;
}

export default function CompactArea(props: CompactAreaProps) {
    return <StyledRoot>{props.children}</StyledRoot>;
}
