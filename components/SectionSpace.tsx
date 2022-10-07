import React, { ReactNode } from "react";
import styled from "styled-components";
import Grid from "./Grid";

export const StyledRoot = styled.div`
    margin-bottom: ${(props) => props.theme.space.lg};
`;

export default function SectionSpace() {
    return <StyledRoot />;
}
