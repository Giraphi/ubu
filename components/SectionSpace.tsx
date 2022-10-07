import React from "react";
import styled from "styled-components";

export const StyledRoot = styled.div`
    margin-bottom: ${(props) => props.theme.space.gutter * 4}px;
`;

export default function SectionSpace() {
    return <StyledRoot />;
}