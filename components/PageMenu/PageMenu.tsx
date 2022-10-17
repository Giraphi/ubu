import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import PageMenuContent from "./PageMenuContent";
import { styleConstants } from "../../styles/style-constants";
import Logo from "../../images/logo.svg";

export const TopBarSizePx = 54;
const BarHeightPx = 0.08 * TopBarSizePx;
const BarSpacePx = 0.07 * TopBarSizePx;

export const TopBarSizeSmPx = 50;
const BarHeightSmPx = 0.08 * TopBarSizeSmPx;
const BarSpaceSmPx = 0.07 * TopBarSizeSmPx;

const StyledRoot = styled.div<{
    isMenuOpen: boolean;
    isMenuVisible: boolean;
}>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${styleConstants.zIndex.menuButton};
    cursor: pointer;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.black};
    display: flex;
    justify-content: space-between;

    height: ${TopBarSizeSmPx}px;
    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        height: ${TopBarSizePx}px;
    }

    transition: top 0.2s ease-out;

    ${(props) =>
        !props.isMenuVisible &&
        css`
            top: -${TopBarSizePx}px;
        `}
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
    width: ${TopBarSizeSmPx}px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) => props.theme.color.black};
    border-right: 1px solid ${(props) => props.theme.color.white};

    ${StyledBar}:first-child {
        margin-bottom: ${BarSpaceSmPx}px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        width: ${TopBarSizePx}px;
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
    padding-top: ${TopBarSizeSmPx}px;
    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        padding-top: ${TopBarSizePx}px;
    }
`;

const menuVariants = {
    visible: {
        clipPath: "ellipse(70vw 144vh at 0% 0%)",
        transition: {
            duration: 0.3,
        },
    },
    hidden: {
        clipPath: "ellipse(0vw 0vh at 0% 0%)",
        transition: {
            duration: 0.3,
        },
    },
};

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    margin-right: ${(props) => props.theme.grid.spaceHorizontal.base};
    width: 170px;
    color: ${(props) => props.theme.color.primary};
`;

export default function PageMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    // const { scrollY } = useScroll();
    // const prevScrollY = useRef(scrollY.get());

    // scrollY.onChange((value) => {
    //     if (Math.abs(value - prevScrollY.current) < 15) {
    //         return;
    //     }
    //     value > prevScrollY.current ? onScrollDown(value) : onScrollUp(value);
    // });
    //
    // function onScrollDown(value: number) {
    //     prevScrollY.current = value;
    //     setIsMenuVisible(false);
    //     setIsMenuOpen(false);
    // }
    //
    // function onScrollUp(value: number) {
    //     if (value <= 7) {
    //         setIsMenuOpen(false);
    //         setIsMenuVisible(false);
    //         prevScrollY.current = value;
    //         return;
    //     }
    //
    //     setIsMenuOpen(false);
    //     setIsMenuVisible(true);
    //     prevScrollY.current = value;
    // }

    function handleClick() {
        setIsMenuOpen((x) => !x);
    }

    return (
        <>
            <StyledRoot isMenuOpen={isMenuOpen} isMenuVisible={isMenuVisible}>
                <StyledButton isMenuOpen={isMenuOpen} onClick={handleClick}>
                    <StyledBar />
                    <StyledBar />
                </StyledButton>
                <StyledLogo>
                    <Logo />
                </StyledLogo>
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
