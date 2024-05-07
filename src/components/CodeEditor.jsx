import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

function CodeEditor() {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');

    const runCode = () => {
        try {
            const result = eval(code);
            setOutput(result.toString()); // Convert result to string and set as output
        } catch (error) {
            console.error('Error executing code:', error);
            setOutput('Error: ' + error.message); // Display error message
        }
    };

    return (
        <div>
            <MonacoEditor
                language="javascript"
                theme="vs-dark"
                value={code}
                onChange={setCode}
                options={{
                    minimap: {
                        enabled: false
                    }
                }}
                style={{ height: "400px" }}
            />
            <button onClick={runCode}>Run</button>
            <div>
                <h2>Output:</h2>
                <pre>{output}</pre> {/* Display output here */}
            </div>
        </div>
    );
}

export default CodeEditor;
