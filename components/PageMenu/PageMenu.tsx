import React, { useState } from "react";
import styled, { css } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import PageMenuContent from "./PageMenuContent";
import { styleConstants } from "../../styles/style-constants";

const ButtonSizePx = 60;
const BarHeightPx = 0.08 * ButtonSizePx;
const BarSpacePx = 0.07 * ButtonSizePx;

const ButtonSizeSmPx = 45;
const BarHeightSmPx = 0.08 * ButtonSizeSmPx;
const BarSpaceSmPx = 0.07 * ButtonSizeSmPx;

const StyledRoot = styled.div<{
    isMenuOpen: boolean;
}>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${styleConstants.zIndex.menuButton};
    cursor: pointer;
`;

const StyledBar = styled.div`
    height: ${BarHeightSmPx}px;
    margin-left: 20%;
    margin-right: 20%;
    background-color: white;

    transition: transform 0.4s ease-in;

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        height: ${BarHeightPx}px;
    }
`;

const StyledButton = styled.div<{ isMenuOpen: boolean }>`
    width: ${ButtonSizeSmPx}px;
    height: ${ButtonSizeSmPx}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) => props.theme.color.black};
    box-shadow: 0 0 15px 2px ${(props) => props.theme.color.tertiary};

    ${StyledBar}:first-child {
        margin-bottom: ${BarSpaceSmPx}px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        width: ${ButtonSizePx}px;
        height: ${ButtonSizePx}px;
        ${StyledBar}:first-child {
            margin-bottom: ${BarSpacePx}px;
        }
    }

    ${(props) =>
        props.isMenuOpen &&
        css`
            ${StyledBar}:first-child {
                transform: translateY(calc((${BarHeightSmPx}px + ${BarSpaceSmPx}px) / 2)) rotate(315deg);
            }

            ${StyledBar}:nth-child(2) {
                transform: translateY(calc(-1 * (${BarHeightSmPx}px + ${BarSpaceSmPx}px) / 2)) rotate(-315deg);
            }

            @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
                ${StyledBar}:first-child {
                    transform: translateY(calc((${BarHeightPx}px + ${BarSpacePx}px) / 2)) rotate(315deg);
                }

                ${StyledBar}:nth-child(2) {
                    transform: translateY(calc(-1 * (${BarHeightPx}px + ${BarSpacePx}px) / 2)) rotate(-315deg);
                }
            }
        `}
`;

const StyledPageMenuContentWrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${styleConstants.zIndex.menuContent};
`;

const menuVariants = {
    visible: {
        clipPath: "ellipse(70vw 144vh at 0% 0%)",
        transition: {
            duration: 0.3,
        },
    },
    hidden: {
        clipPath: "ellipse(1vw 1vh at 0% 0%)",
        transition: {
            duration: 0.3,
        },
    },
};

export interface MenuProps {}

export default function PageMenu(props: MenuProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleClick() {
        console.log("click");
        setIsMenuOpen((x) => !x);
    }

    return (
        <>
            <StyledRoot isMenuOpen={isMenuOpen} onClick={handleClick}>
                <StyledButton isMenuOpen={isMenuOpen}>
                    <StyledBar />
                    <StyledBar />
                </StyledButton>
            </StyledRoot>

            <AnimatePresence>
                {isMenuOpen && (
                    <StyledPageMenuContentWrapper variants={menuVariants} initial={"hidden"} animate={"visible"} exit={"hidden"}>
                        <PageMenuContent />
                    </StyledPageMenuContentWrapper>
                )}
            </AnimatePresence>
        </>
    );
}
