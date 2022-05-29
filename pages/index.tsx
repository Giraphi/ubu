import type {NextPage} from 'next'
import styled from "styled-components";
import Hexe from "../images/hexe_2.svg";

const StyledText = styled.div`
    color: lime;
    font-family: "SourceCodePro";
`

const Home: NextPage = () => {
    return (
        <>
            <h1>Hellooo</h1>
            <StyledText>styled text</StyledText>
            <Hexe/>
        </>
    )
}

export default Home
