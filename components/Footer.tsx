import React from "react"
import Grid, { GridLines } from "./Grid"
import styled from "styled-components"

const StyledArea = styled.div`
  grid-column: ${GridLines.contentLeft} / ${GridLines.contentRight};
`

const StyledRow = styled.div`
  border-top: 1px solid ${(props) => props.theme.color.white};
  padding-top: ${(props) => props.theme.space.gutter * 2}px;
  display: flex;
  justify-content: flex-end;
`

export default function Footer() {
  return (
    <Grid>
      <StyledArea>
        <StyledRow>
          <span>
            <a href={"/impressum"} target={"_blank"} rel="noreferrer">
              Impressum
            </a>{" "}
            <a href={"/datenschutz"} target={"_blank"} rel="noreferrer">
              Datenschutz
            </a>
          </span>
        </StyledRow>
      </StyledArea>
    </Grid>
  )
}
