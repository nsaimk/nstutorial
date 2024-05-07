import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";


const files = {
    "script.js": {
        name: "script.js",
        language: "javascript",
        value: "//Here is some js text"
    },
    "index.html": {
        name: "index.html",
        language: "html",
        value: "<div>Here is some thml text</div>"
    }
}

const Edit = () => {
    const [fileName, setFileName] = useState("script.js");
    const editRef = useRef(null)
    const file = files[fileName]

    function handleEditDidMount(edit, monaco) {
        editRef.current = edit;
    }

    function getEditValue() {
        alert(editRef.current.getValue())
    }

    return (
        <>
            <button onClick={() => getEditValue()}>Get Value</button>
            <Editor
                height="400px"
                width="100%"
                theme="vs-dark"
                onMount={handleEditDidMount}
                path={file.name}
                defaultLanguage={file.language}
            />
        </>
    )
}

export default Edit;