import React from "react"
import styled from "styled-components"

const StyledRoot = styled.div``

const StyledPadding = styled.div``

export interface AspectRatioProps {
  aspectRatio: number
}

export default function AspectRatio(props: AspectRatioProps) {
  return (
    <StyledRoot>
      <StyledPadding></StyledPadding>
    </StyledRoot>
  )
}
