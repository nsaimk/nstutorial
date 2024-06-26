import { useEffect, useState } from "react";
import CodeEditor from "../CodeEditor";
import { Box } from "@chakra-ui/react";
import Intro from '../Intro';
import { useNavigate } from 'react-router-dom';


const Level1 = () => {

    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: "GET",
            headers: headers,
        }

        fetch(`http://localhost:8080/lessons`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setLessons(data[0].content.title);
            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    const defaultValue = `//Level 1: Variables \n\n//Define a variable called 'x', \n//and assign its value as 5\n\n// Write your code here then Run Code\n\n\nconsole.log(x)`

    const introContent =
        <div>
            <h2>Introduction</h2>
            <div>

                <p>Variables are used to store data values in programming. They provide a way to name and reference data so that it can be used and manipulated within a program.</p>

                <h2>Declaration</h2>
                <p>In JavaScript, variables can be declared using the <code>var</code>, <code>let</code>, and <code>const</code> keywords.</p>

                <h2>Examples</h2>
                <p>Here are some examples of variable declarations in JavaScript:</p>
                <pre>
                    <code>
                        // Using var
                        var name = "John";
                        var age = 30;

                        // Using let
                        let message = "Hello, world!";

                        // Using const
                        const PI = 3.14;
                    </code>
                </pre>

                <h2>Exercises</h2>
                <p>Try declaring some variables on your own:</p>
                <ul>
                    <li>Declare a variable called <code>temperature</code> and assign it a value of <code>25</code>.</li>
                    <li>Declare a variable called <code>isRaining</code> and assign it a value of <code>true</code>.</li>
                    <li>Declare a constant called <code>MAX_SIZE</code> and assign it a value of <code>100</code>.</li>
                </ul>
            </div>
        </div>

    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/level2');
    };

    return (
        <div>
            <h2>Level 1: {lessons}</h2>
            <hr />
            <Intro introContent={introContent} />
            <hr />
            <Box minH='50vh' bg='#0f0a19' color='white' px={6} py={8}>
                <CodeEditor defaultValue={defaultValue} />
            </Box>
            <button onClick={handleGetStarted}>Next Level</button>
        </div>
    )
}

export default Level1;