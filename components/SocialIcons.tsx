import React from "react";
import Instagram from "../images/instagram.svg";
import Facebook from "../images/facebook.svg";
import Mail from "../images/mail.svg";
import styled from "styled-components";

const StyledRoot = styled.div`
    display: inline-flex;
    margin-right: -8px;
    margin-left: -10px;
`;

const StyledItem = styled.a`
    color: ${props => props.theme.color.white};
    margin-bottom: ${props => props.theme.space.gutter}px;
    width: 72px;
    height: 72px;
    
    &:hover {
        color: ${props => props.theme.color.primary};        
    }
    
    :nth-child(2) {
        &:hover {
            color: ${props => props.theme.color.secondary};
        }
    }

    :nth-child(3) {
        &:hover {
            color: ${props => props.theme.color.tertiary};
        }
    }
`;


export interface SocialIconsProps {
}

export default function SocialIcons(props: SocialIconsProps) {
    return (
        <StyledRoot>
            <StyledItem href={"https://www.instagram.com/ubu.imperator"}>
                <Instagram/>
            </StyledItem>

            <StyledItem>
                <Facebook href={"https://www.facebook.com/Ubu.Imperator.Band/"}/>
            </StyledItem>

            <StyledItem href={"mailto:ubuimperator.band@gmail.com"}>
                <Mail/>
            </StyledItem>
        </StyledRoot>
    );
}
