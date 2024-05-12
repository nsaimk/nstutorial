import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import Output from "./Output";

const CodeEditor = (props) => {
    const editorRef = useRef();
    const [value, setValue] = useState(props.defaultValue);

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    return (
        <Box>
            <HStack spacing={4}>
                <Box w="50%">
                    <Editor
                        options={{
                            minimap: {
                                enabled: false,
                            },
                        }}
                        height="75vh"
                        theme="vs-dark"
                        language="javascript"
                        //defaultValue="javascript"
                        onMount={onMount}
                        value={value}
                        onChange={(value) => setValue(value)}
                    />
                </Box>
                <Output editorRef={editorRef} language="javascript" />
            </HStack>
        </Box>
    );
};
export default CodeEditor;