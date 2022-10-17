import React from "react";
import styled from "styled-components";
import { styleConstants } from "../../styles/style-constants";

const StyledRoot = styled.div`
    height: 100vh;
    width: 50vw;
    background-color: ${(props) => props.theme.color.gray};
    box-shadow: 0 0 6px 1px ${(props) => props.theme.color.primary};
    display: flex;
    flex-direction: column;
    padding: ${(props) => props.theme.grid.spaceHorizontal.base};
`;

const StyledLink = styled.div`
    margin-bottom: ${(props) => props.theme.space.md};
`;

export interface PageMenuContentProps {
    handleItemClick: () => void;
}

export default function PageMenuContent(props: PageMenuContentProps) {
    function onItemClick(target: string) {
        const element: HTMLDivElement | null = document.querySelector(target);
        if (!element) {
            return;
        }
        element.scrollIntoView({ behavior: "smooth" });
        props.handleItemClick();
    }

    return (
        <StyledRoot>
            <StyledLink onClick={() => onItemClick("#ubu-demo")}>Ubu Demo</StyledLink>
        </StyledRoot>
    );
}
