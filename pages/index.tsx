import type {NextPage} from 'next'
import styled from "styled-components";
import Hexe from "../images/hexe_2.svg";

const StyledRoot = styled.div`
    //background-color: ${props => props.theme.color.background};
`

const StyledText = styled.div`
    color: ${props => props.theme.color.primary};
`

const Home: NextPage = () => {
    return (
        <StyledRoot>
            <h1>Hellooo</h1>
            <StyledText>styled text</StyledText>
            <Hexe/>
        </StyledRoot>
    )
}

export default Home
