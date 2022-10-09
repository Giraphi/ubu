import React, { ReactNode, useState } from "react";
import styled, { css } from "styled-components";
import { colorAnimation } from "../styles/color-animation";

const StyledRoot = styled.div<{ scale: number; delay: number; disableSpace?: boolean }>`
    width: ${(props) => props.theme.space.figure};
    height: ${(props) => props.theme.space.figure};
    ${colorAnimation};
    animation-delay: -${(props) => props.delay}s;

    ${(props) =>
        !props.disableSpace &&
        css`
            margin-bottom: ${(props) => props.theme.space.sm};
        `}

    > svg {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transform: scale(${(props) => props.scale});
    }
`;

export interface FigurProps {
    children: ReactNode;
    delay?: number;
    disableSpace?: boolean;
    className?: string;
    scale?: number;
}

export default function Figur(props: FigurProps) {
    // const animationDelay = useState(Math.random() * 3)[0];
    const scale = props.scale || 1.5;

    return (
        <StyledRoot scale={scale} className={props.className} disableSpace={props.disableSpace} delay={props.delay || 0}>
            {props.children}
        </StyledRoot>
    );
}
