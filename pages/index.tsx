import type {NextPage} from 'next'
import styled from "styled-components";

const StyledText = styled.div`
    color: lime;
    font-family: "SourceCodePro";
`

const Home: NextPage = () => {
    return (
        <>
            <h1>Hellooo</h1>
            <StyledText>styled text</StyledText>
        </>
    )
}

export default Home
