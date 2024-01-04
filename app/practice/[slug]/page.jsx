"use client";
import { useRef } from "react";
import Markdown from "react-markdown";
import { Editor } from "@monaco-editor/react";
import Tabs, { Tab } from "../../../components/tabs/Tabs";
import { PROBLEM_MAP } from "../../../components/practice/problems";

export default function Page({ params }) {
  const editorRef = useRef(null);
  const monacoRef = useRef(null);

  const { question, solution, startingCode, videoUrl } =
    PROBLEM_MAP[params.slug];

  // console.log(editorRef);
  // console.log(monacoRef);

  const onMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
    editor.focus();
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-2xl">
          <Tabs
            containerStyles={{
              height: "100%",
            }}
          >
            <Tab title="Question">
              <Markdown className="markdown">{question}</Markdown>
            </Tab>
            <Tab title="Solution">
              <Editor
                height="60vh"
                theme="vs-dark"
                language="python"
                className="rounded-2xl flex-1"
                defaultValue={solution}
                options={{
                  readOnly: true,
                  minimap: {
                    enabled: false,
                  },
                }}
              />
            </Tab>
            {videoUrl && <Tab title="Video">{videoUrl}</Tab>}
          </Tabs>
        </div>
        <Editor
          height="75vh"
          theme="vs-dark"
          language="python"
          className="rounded-2xl flex-1"
          defaultValue={startingCode}
          options={{
            acceptSuggestionOnCommitCharacter: false,
            minimap: {
              enabled: false,
            },
          }}
        />
      </div>
    </div>
  );
}
