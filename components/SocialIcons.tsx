import React from "react";
import Instagram from "../images/social-icons/instagram.svg";
import Facebook from "../images/social-icons/facebook.svg";
import Mail from "../images/social-icons/mail.svg";
import Bandcamp from "../images/social-icons/bandcamp.svg";
import Youtube from "../images/social-icons/youtube.svg";
import styled from "styled-components";

const StyledRoot = styled.div`
    display: inline-flex;
    margin-right: -${(props) => props.theme.space.gutter * 3}px;

    > * {
        margin-right: ${(props) => props.theme.space.gutter * 3}px;
    }
`;

const StyledItem = styled.a`
    color: ${(props) => props.theme.color.white};
    margin-bottom: ${(props) => props.theme.space.gutter}px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${(props) => props.theme.space.gutter * 9}px;
    width: 43px;

    > svg {
        height: 100%;
        width: auto;
    }

    &.instagram {
        &:hover {
            color: ${(props) => props.theme.color.primary};
        }
    }

    &.youtube {
        &:hover {
            color: ${(props) => props.theme.color.primary};
        }

        > svg {
            transform: scale(1.3, 1.3) translateY(4px);
        }
    }

    &.mail {
        &:hover {
            color: ${(props) => props.theme.color.tertiary};
        }

        > svg {
            position: relative;
            top: -1px;
        }
    }

    &.bandcamp {
        &:hover {
            color: ${(props) => props.theme.color.secondary};
        }

        > svg {
            position: relative;
            top: 2px;
            transform: scale(1.73, 1.78);
        }
    }
`;

export interface SocialIconsProps {}

export default function SocialIcons(props: SocialIconsProps) {
    return (
        <StyledRoot>
            <StyledItem
                href={"https://www.instagram.com/ubu.imperator"}
                target={"_blank"}
                className={"instagram"}
            >
                <Instagram />
            </StyledItem>

            <StyledItem
                href={"https://ubuimperator.bandcamp.com/album/ubudemo"}
                target={"_blank"}
                className={"bandcamp"}
            >
                <Bandcamp />
            </StyledItem>

            <StyledItem
                href={"https://www.youtube.com/@ubuimperator4321"}
                target={"_blank"}
                className={"youtube"}
            >
                <Youtube />
            </StyledItem>

            <StyledItem
                href={"mailto:ubuimperator.band@gmail.com"}
                target={"_blank"}
                className={"mail"}
            >
                <Mail />
            </StyledItem>
        </StyledRoot>
    );
}
