import React from "react";
import styled from "styled-components";
import { TopBarSizePx, TopBarSizeSmPx } from "./PageMenu/PageMenu";

const StyledDiv = styled.div`
    position: relative;
    bottom: ${TopBarSizeSmPx + 16}px;
    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        height: ${TopBarSizePx}px;
    }
`;

export const scrollIds = {
    UbuDemo: "ubu-demo",
};

export interface ScrollTargetProps {
    id: keyof typeof scrollIds;
}

export default function ScrollTarget(props: ScrollTargetProps) {
    return <StyledDiv id={scrollIds[props.id]} />;
}
