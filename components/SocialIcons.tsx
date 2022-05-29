import React from "react";
import Instagram from "../images/instagram-fixed.svg";
import Facebook from "../images/facebook-fixed.svg";
import Mail from "../images/mail-fixed.svg";
import styled from "styled-components";

const StyledRoot = styled.div`
    display: inline-flex;
    margin-right: -${props => props.theme.space.gutter * 3}px;
    
    > * {        
        margin-right: ${props => props.theme.space.gutter * 3}px;
    }
`;

const StyledItem = styled.a`
    color: ${props => props.theme.color.white};
    margin-bottom: ${props => props.theme.space.gutter}px;
    height: ${props => props.theme.space.gutter * 8}px;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
        height: 100%;
        width: auto;
    }

    &.instagram {
        &:hover {
            color: ${props => props.theme.color.primary};
        }
    }

    &.facebook {
        &:hover {
            color: ${props => props.theme.color.secondary};
        }
        > svg {
            position: relative;
            left: -1px;
        }
    }

    &.mail {
        &:hover {
            color: ${props => props.theme.color.tertiary};
        }
        > svg {
            position: relative;
            top: -1px;
        }
    }
`;


export interface SocialIconsProps {
}

export default function SocialIcons(props: SocialIconsProps) {
    return (
        <StyledRoot>
            <StyledItem href={"https://www.instagram.com/ubu.imperator"} className={"instagram"}>
                <Instagram/>
            </StyledItem>

            <StyledItem href={"mailto:ubuimperator.band@gmail.com"} className={"mail"}>
                <Mail/>
            </StyledItem>

            <StyledItem href={"https://www.facebook.com/Ubu.Imperator.Band/"} className={"facebook"}>
                <Facebook/>
            </StyledItem>
        </StyledRoot>
    );
}
