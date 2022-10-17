import React from "react";
import styled, { css } from "styled-components";
import { TopBarSizePx, TopBarSizeSmPx } from "./PageMenu/PageMenu";
import { GridLines } from "./Grid";

export const scrollTargetMixin = css`
    position: relative;
    bottom: ${TopBarSizeSmPx + 16}px;
    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        bottom: ${TopBarSizePx + 16}px;
    }
`;

const StyledDiv = styled.div`
    ${scrollTargetMixin};
`;

export enum ScrollId {
    top = "top",
    ubuDemo = "ubu-demo",
    ueberUns = "ueber-uns",
    impex = "impex",
    ruebe = "ruebe",
}

export interface ScrollTargetProps {
    id: string;
}

export default function ScrollTarget(props: ScrollTargetProps) {
    return <StyledDiv id={props.id} />;
}
