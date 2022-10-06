import React, { ReactNode } from "react";
import styled from "styled-components";

export const GridLines = {
    screenLeft: "screen-left",
    contentLeft: "content-left",
    col1: "col-1",
    col2: "col-2",
    col3: "col-3",
    col4: "col-4",
    col5: "col-5",
    col6: "col-6",
    col7: "col-7",
    col8: "col-8",
    col9: "col-9",
    col10: "col-10",
    col11: "col-11",
    col12: "col-12",
    contentRight: "content-right",
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

const gridContentCols = `
        [${GridLines.contentLeft} ${GridLines.col1}] 1fr
        [${GridLines.col2}] 1fr
        [${GridLines.col3}] 1fr
        [${GridLines.col4}] 1fr
        [${GridLines.col5}] 1fr
        [${GridLines.col6}] 1fr
        [${GridLines.col7}] 1fr
        [${GridLines.col8}] 1fr
        [${GridLines.col9}] 1fr
        [${GridLines.col10}] 1fr
        [${GridLines.col11}] 1fr
        [${GridLines.col12}] 1fr [${GridLines.contentRight}]
`;

const StyledRoot = styled.div`
    display: grid;
    column-gap: ${(props) => props.theme.grid.gap.base};

    grid-template-columns:
        [ ${GridLines.screenLeft} ]
        ${(props) => `
                ${props.theme.grid.spaceHorizontal.base}
                ${gridContentCols}
                ${props.theme.grid.spaceHorizontal.base}
        `}
        [ ${GridLines.screenRight}];

    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
        grid-template-columns:
            [ ${GridLines.screenLeft} ]
            ${(props) => `
                ${props.theme.grid.spaceHorizontal.md}
             ${gridContentCols}
                ${props.theme.grid.spaceHorizontal.md}
        `}
            [ ${GridLines.screenRight} ];
    }

    @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
        grid-template-columns:
            [ ${GridLines.screenLeft} ]
            ${(props) => `
                ${props.theme.grid.spaceHorizontal.lg}
                ${gridContentCols}
                ${props.theme.grid.spaceHorizontal.lg}
        `}
            [ ${GridLines.screenRight}];
    }

    @media (min-width: ${(props) => props.theme.breakpoints.xlg}px) {
        grid-template-columns:
            [ ${GridLines.screenLeft}]
            ${(props) => `
            calc(50% - ${props.theme.grid.contentMaxWidth.xlg} / 2)
            ${gridContentCols}
            calc(50% - ${props.theme.grid.contentMaxWidth.xlg} / 2)
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
