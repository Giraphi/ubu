import type {NextPage} from 'next'
import styled from "styled-components";

const StyledText = styled.div`
    color: lime;
`

const Home: NextPage = () => {
    return (
        <>
            <h1>Hello</h1>
            <StyledText>styled text</StyledText>
        </>
    )
}

export default Home
