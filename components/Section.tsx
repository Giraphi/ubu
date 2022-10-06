import React, { ReactNode } from "react";
import styled from "styled-components";
import Grid from "./Grid";

export const StyledRoot = styled.div``;

export interface SectionProps {
    children: ReactNode;
}

export default function Section(props: SectionProps) {
    return <StyledRoot>{props.children}</StyledRoot>;
}
