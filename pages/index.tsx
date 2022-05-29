import type {NextPage} from 'next'
import styled from "styled-components";
import Hexe from "../images/hexe_2.svg";
import Leviathan from "../images/leviathan.svg"
import LeviathanNoBg from "../images/leviathan-no-bg.svg"

const StyledRoot = styled.div`
    background-color: ${props => props.theme.color.background};
    display: flex;
    flex-direction: column;
`

const StyledText = styled.div`
    color: ${props => props.theme.color.primary};
`

const StyledLeviathan = styled(Leviathan)`
    object-fit: cover;
`

const Home: NextPage = () => {
    return (
        <StyledRoot>
            <h1>Hellooo</h1>
            <StyledText>styled text</StyledText>
            <Hexe/>


            <StyledLeviathan/>
            <LeviathanNoBg/>

        </StyledRoot>

    )
}

export default Home
