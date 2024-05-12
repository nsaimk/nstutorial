import CodeEditor from "../CodeEditor";
import { Box } from "@chakra-ui/react";
import Intro from '../Intro';

const Level4 = () => {

    const defaultValue = `//Level 7: Functions`

    const introContent =
        <div>
            <h2>Introduction</h2>
        </div>

    return (
        <div>
            <h2>Level  7: Functions</h2>
            <hr />
            <Intro introContent={introContent} />
            <hr />
            <Box minH='20vh' bg='#0f0a19' color='white' px={6} py={8}>
                <CodeEditor defaultValue={defaultValue} />
            </Box>
        </div>
    )
}

export default Level4;