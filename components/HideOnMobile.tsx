import React from "react";
import styled from "styled-components";

const StyledRoot = styled.div`
    display: none;

    @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
        display: block;
    }
`;

export interface HideOnMobileProps {
    children: React.ReactNode;
}

export default function HideOnMobile(props: HideOnMobileProps) {
    return <StyledRoot>{props.children}</StyledRoot>;
}
