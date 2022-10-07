import React, { ReactNode, useState } from "react";
import styled, { css } from "styled-components";
import { colorAnimation } from "../styles/keyframes";

const StyledRoot = styled.div<{ delay: number; disableSpace?: boolean }>`
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
        transform: scale(1.5);
    }
`;

export interface FigurProps {
    children: ReactNode;
    disableSpace?: boolean;
    className?: string;
}

export default function Figur(props: FigurProps) {
    const animationDelay = useState(Math.random() * 3)[0];
    return (
        <StyledRoot className={props.className} disableSpace={props.disableSpace} delay={animationDelay}>
            {props.children}
        </StyledRoot>
    );
}
