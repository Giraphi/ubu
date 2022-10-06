import React, { ReactNode } from "react";
import styled from "styled-components";

export const GridLines = {
    screenLeft: "screen-left",
    bleedLeft: "bleed-left",
    contentLeft: "content-left",
    col1Start: "col-1-start",
    col1End: "col-1-end",
    col2Start: "col-2-start",
    col2End: "col-2-end",
    col3Start: "col-3-start",
    col3End: "col-3-end",
    col4Start: "col-4-start",
    col4End: "col-4-end",
    col5Start: "col-5-start",
    col5End: "col-5-end",
    col6Start: "col-6-start",
    col6End: "col-6-end",
    col7Start: "col-7-start",
    col7End: "col-7-end",
    col8Start: "col-8-start",
    col8End: "col-8-end",
    col9Start: "col-9-start",
    col9End: "col-9-end",
    col10Start: "col-10-start",
    col10End: "col-10-end",
    col11Start: "col-11-start",
    col11End: "col-11-end",
    col12Start: "col-12-start",
    col12End: "col-12-end",
    contentRight: "content-right",
    bleedRight: "bleed-right",
    screenRight: "screen-right",
};

type ValueOf<T> = T[keyof T];
export type GridLine = ValueOf<typeof GridLines>;

// In gridContentCols we implement the grid gap by inserting columns of width grid.gap
// Using css grid-gap would lead to the following problems:
// - difficult to control bleed/horizontalSpace columns, because we'd always have to subtract gap widths. Code quickly
//   becomes difficult to read.
// - bleed/horizontalSpace columns can effectively never be smaller than grid-gap. But we need this when going just above 1440px
//   (bleed to screen edge on 1440px and gradually introduce horizontalSpace column)
// - grid-gap would also be applied vertically, which will lead to extra effort if we'd want to insert areas vertically for an archetype.
// - We'd have to deal with extra effort in case we'd want to place an area into columns including their left and right gap.
//   (Probably not allowed in the curren design-system but happened on other sites, e.g. brand)

const gridContentCols = (gap: string) => `
        [${GridLines.contentLeft} ${GridLines.col1Start}] 1fr [${GridLines.col1End}] ${gap}
        [${GridLines.col2Start}] 1fr [${GridLines.col2End}] ${gap}
        [${GridLines.col3Start}] 1fr [${GridLines.col3End}] ${gap}
        [${GridLines.col4Start}] 1fr [${GridLines.col4End}] ${gap}
        [${GridLines.col5Start}] 1fr [${GridLines.col5End}] ${gap}
        [${GridLines.col6Start}] 1fr [${GridLines.col6End}] ${gap}
        [${GridLines.col7Start}] 1fr [${GridLines.col7End}] ${gap}
        [${GridLines.col8Start}] 1fr [${GridLines.col8End}] ${gap}
        [${GridLines.col9Start}] 1fr [${GridLines.col9End}] ${gap}
        [${GridLines.col10Start}] 1fr [${GridLines.col10End}] ${gap}
        [${GridLines.col11Start}] 1fr [${GridLines.col11End}] ${gap}
        [${GridLines.col12Start}] 1fr [${GridLines.col12End} ${GridLines.contentRight}]
`;

const StyledRoot = styled.div`
    display: grid;

    grid-template-columns:
        [ ${GridLines.screenLeft} ${GridLines.bleedLeft}]
        ${(props) => `
                ${props.theme.grid.spaceHorizontal.base}
                ${gridContentCols(props.theme.grid.gap.base)}
                ${props.theme.grid.spaceHorizontal.base}
        `}
        [ ${GridLines.screenRight} ${GridLines.bleedRight}];

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        grid-template-columns:
            [ ${GridLines.screenLeft} ${GridLines.bleedLeft}]
            ${(props) => `
                    ${props.theme.grid.spaceHorizontal.md}
                    ${gridContentCols(props.theme.grid.gap.md)}
                    ${props.theme.grid.spaceHorizontal.md}
            `}
            [ ${GridLines.screenRight} ${GridLines.bleedRight}];
    }

    @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
        grid-template-columns:
            [ ${GridLines.screenLeft} ${GridLines.bleedLeft}]
            ${(props) => `
                    ${props.theme.grid.spaceHorizontal.lg}
                    ${gridContentCols(props.theme.grid.gap.lg)}
                    ${props.theme.grid.spaceHorizontal.lg}
            `}
            [ ${GridLines.screenRight} ${GridLines.bleedRight}];
    }

    @media (min-width: ${(props) => props.theme.breakpoints.xlg}px) {
        grid-template-columns:
            [ ${GridLines.screenLeft}]
            ${(props) => `
                calc(50% - ${props.theme.grid.contentMaxWidth.xlg} / 2 - ${props.theme.grid.spaceHorizontal.xlg}) [${GridLines.bleedLeft}]
                ${props.theme.grid.spaceHorizontal.xlg}
                ${gridContentCols(props.theme.grid.gap.lg)}
                ${props.theme.grid.spaceHorizontal.xlg} [${GridLines.bleedRight}]
                calc(50% - ${props.theme.grid.contentMaxWidth.xlg} / 2 - ${props.theme.grid.spaceHorizontal.xlg})
            `}
            [ ${GridLines.screenRight}];
    }
`;
export interface GridProps {
    children: ReactNode;
    className?: string; // Required to write styled(Grid) in other components.
}

export default function Grid(props: GridProps) {
    return <StyledRoot className={props.className}>{props.children}</StyledRoot>;
}
