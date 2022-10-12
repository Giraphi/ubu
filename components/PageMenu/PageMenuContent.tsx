import React from "react";
import styled from "styled-components";
import { styleConstants } from "../../styles/style-constants";

const StyledRoot = styled.div`
    height: 100vh;
    width: 50vw;
    background-color: deeppink;
`;

export interface PageMenuContentProps {}

export default function PageMenuContent(props: PageMenuContentProps) {
    return <StyledRoot></StyledRoot>;
}
