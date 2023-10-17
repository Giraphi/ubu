import React from "react";
import styled from "styled-components";
import { styleConstants } from "../../styles/style-constants";
import { ScrollId } from "../ScrollTarget";

const StyledRoot = styled.div`
    height: 100vh;
    //width: 50vw;
    background-color: ${(props) => props.theme.color.gray};
    box-shadow: 0 0 6px 1px ${(props) => props.theme.color.primary};
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: ${(props) => props.theme.space.gutter * 5}px ${(props) => props.theme.space.gutter * 5}px
        ${(props) => props.theme.space.gutter * 5}px ${(props) => props.theme.grid.spaceHorizontal.base};
`;

const StyledLink = styled.div`
    margin-bottom: ${(props) => props.theme.space.md};
    cursor: pointer;
    display: inline-flex;
    flex-direction: column;

    &:after {
        content: "";
        width: 0;
        height: 1px;
        background-color: ${(props) => props.theme.color.white};
        transition: width 0.2s ease-out;
        transform: translateY(3px);
    }

    &:hover {
        &:after {
            width: 100%;
        }
    }
`;

export interface PageMenuContentProps {
    handleItemClick: () => void;
}

export default function PageMenuContent(props: PageMenuContentProps) {
    function onItemClick(scrollId: ScrollId) {
        const element: HTMLDivElement | null = document.querySelector(`#${scrollId}`);
        if (!element) {
            return;
        }
        element.scrollIntoView({ behavior: "smooth" });
        props.handleItemClick();
    }

    return (
        <StyledRoot>
            <StyledLink onClick={() => onItemClick(ScrollId.top)}>Start</StyledLink>
            <StyledLink onClick={() => onItemClick(ScrollId.ubuDemo)}>Tape</StyledLink>
            <StyledLink onClick={() => onItemClick(ScrollId.ueberUns)}>Über Uns</StyledLink>
            <StyledLink onClick={() => onItemClick(ScrollId.photos)}>Fotos</StyledLink>
            <StyledLink onClick={() => onItemClick(ScrollId.video)}>Video</StyledLink>
        </StyledRoot>
    );
}
