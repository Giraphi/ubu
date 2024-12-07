import { keyframes, css } from "styled-components"
import { theme } from "./theme"

export const colorKeyframes = keyframes`
    0% {
        color: ${theme.color.primary};
    }

    33% {
        color: ${theme.color.secondary};
    }

    66% {
        color: ${theme.color.tertiary};
    }

    100% {
        color: ${theme.color.primary};
    }
`

export const colorAnimation = css`
  animation: ${colorKeyframes} 4s linear infinite;
`

export const colorAnimationSlow = css`
  animation: ${colorKeyframes} 12s linear infinite;
`
