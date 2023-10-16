import React, { useContext, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { TopBarSizePx, TopBarSizeSmPx } from "./PageMenu/PageMenu";
import { GridLines } from "./Grid";
import { useInView } from "framer-motion";
import { MenuContext } from "../context/MenuContext";

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
    video = "video",
}

// const ScrollIdArray = Object.values(ScrollId);

export interface ScrollTargetProps {
    id: ScrollId;
}

export default function ScrollTarget(props: ScrollTargetProps) {
    const ref = useRef<HTMLDivElement>(null);
    // const isInView = useInView(ref, {});
    // const setActiveItem = useContext(MenuContext).setActiveItem;

    // useEffect(() => {
    //     if (!isInView) {
    //         return;
    //     }
    //     console.log(`set ${props.id}`);
    //     setActiveItem(props.id);
    // }, [isInView, props.id, setActiveItem]);

    return <StyledDiv id={props.id} ref={ref} />;
}
