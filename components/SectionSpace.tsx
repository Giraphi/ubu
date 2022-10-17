import React from "react";
import styled from "styled-components";

export const StyledRoot = styled.div`
    margin-bottom: ${(props) => props.theme.space.gutter * 6}px;

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        margin-bottom: ${(props) => props.theme.space.gutter * 8}px;
    }
`;

export default function SectionSpace() {
    return <StyledRoot />;
}
