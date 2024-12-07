import React, { ReactNode, useState } from "react"
import styled, { css, useTheme } from "styled-components"
import { colorAnimation } from "../styles/color-animation"

const StyledRoot = styled.div<{ $scale: number; $delay: number; $size: string; $disableSpace?: boolean }>`
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  ${colorAnimation};
  animation-delay: -${(props) => props.$delay}s;

  ${(props) =>
    !props.$disableSpace &&
    css`
      margin-bottom: ${(props) => props.theme.space.sm};
    `}

  > svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transform: scale(${(props) => props.$scale});
  }
`

export interface FigurProps {
  children: ReactNode
  delay?: number
  disableSpace?: boolean
  className?: string
  scale?: number
  size?: string
}

export default function Figur(props: FigurProps) {
  const theme = useTheme()

  const scale = props.scale || 1.5
  const size = props.size || theme.space.figure

  return (
    <StyledRoot $scale={scale} className={props.className} $disableSpace={props.disableSpace} $delay={props.delay || 0} $size={size}>
      {props.children}
    </StyledRoot>
  )
}
