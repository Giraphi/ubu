import styled, { css } from "styled-components";

export const aspectRatioMixin = (ratio: number) => css`
    position: relative;
    padding-bottom: ${(1 / ratio) * 100}%;
    height: 0;
    width: 100%;
`;

export const AspectRatioContent = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`;
