import React from "react";
import styled from "styled-components";

const StyledRoot = styled.div`
    @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
        display: none;
    }
`;

export interface HideOnDesktopProps {
    children: React.ReactNode;
}

export default function HideOnDesktop(props: HideOnDesktopProps) {
    return <StyledRoot>{props.children}</StyledRoot>;
}
