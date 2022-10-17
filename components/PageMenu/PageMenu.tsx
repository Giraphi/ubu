import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import PageMenuContent from "./PageMenuContent";
import { styleConstants } from "../../styles/style-constants";
import Logo from "../../images/logo.svg";
import { colorAnimationSlow } from "../../styles/color-animation";

export const TopBarSizePx = 54;
const BarHeightPx = 0.08 * TopBarSizePx;
const BarSpacePx = 0.07 * TopBarSizePx;

export const TopBarSizeSmPx = 42;
const BarHeightSmPx = 0.08 * TopBarSizeSmPx;
const BarSpaceSmPx = 0.07 * TopBarSizeSmPx;

const StyledTopBar = styled.div<{
    isMenuOpen: boolean;
    isMenuVisible: boolean;
}>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${styleConstants.zIndex.menuButton};
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
    cursor: pointer;

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
    margin-bottom: 8px;
    margin-top: 8px;
    ${colorAnimationSlow};

    > svg {
        height: 100%;
        width: unset;
        margin-left: auto;
    }
`;

export default function PageMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const { scrollY } = useScroll();
    const ref = useRef<HTMLDivElement>(null);

    scrollY.onChange((value) => {
        const isScrolled = value > 100;
        setIsMenuVisible(isScrolled);

        if (!isScrolled) {
            setIsMenuOpen(false);
        }
    });

    function handleClick() {
        setIsMenuOpen((x) => !x);
    }

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (!ref.current) {
                return;
            }

            const isClickOutside = !ref.current.contains(event.target as Node);
            if (!isClickOutside) {
                return;
            }
            setIsMenuOpen(false);
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div ref={ref}>
            <StyledTopBar isMenuOpen={isMenuOpen} isMenuVisible={isMenuVisible}>
                <StyledButton isMenuOpen={isMenuOpen} onClick={handleClick}>
                    <StyledBar />
                    <StyledBar />
                </StyledButton>
                <StyledLogo>
                    <Logo />
                </StyledLogo>
            </StyledTopBar>

            <AnimatePresence>
                {isMenuOpen && (
                    <StyledPageMenuContentWrapper variants={menuVariants} initial={"hidden"} animate={"visible"} exit={"hidden"}>
                        <PageMenuContent handleItemClick={() => setIsMenuOpen(false)} />
                    </StyledPageMenuContentWrapper>
                )}
            </AnimatePresence>
        </div>
    );
}
