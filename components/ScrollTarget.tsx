import React from "react";
import styled, { css } from "styled-components";
import { TopBarSizePx, TopBarSizeSmPx } from "./PageMenu/PageMenu";

export const scrollTargetMixin = css`
    position: relative;
    bottom: ${TopBarSizeSmPx + 16}px;
    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        height: ${TopBarSizePx + 16}px;
    }
`;

const StyledDiv = styled.div`
    ${scrollTargetMixin};
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
