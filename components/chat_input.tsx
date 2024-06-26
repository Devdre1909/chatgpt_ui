"use client";

import { ArrowUp, FileArrowUp, FileCode } from "@phosphor-icons/react";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const ChatInput = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [message, setMessage] = React.useState("");
  const [file, setFile] = React.useState<File | null>(null);

  const handleFileUploadClick = () => {
    inputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    console.log(file);
    if (file) {
      setFile(file);
    }
  };

  return (
    <div className="w-full pb-3">
      <input
        ref={inputRef}
        type="file"
        id="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept=".json"
      />

      <div className="px-3">
        <div className="mx-auto flex flex-1 gap-3 layout-width">
          <form className="w-full">
            <div className="relative flex h-full max-w-full flex-1 flex-col">
              <div className="flex w-full items-center pt-1">
                <div className="flex w-full flex-col gap-1.5 rounded-[25px] bg-gray-700 p-2">
                  {file && (
                    <div className="flex items-center gap-2 p-2 bg-gray-800 rounded-lg max-w-[50%]">
                      <div className="bg-gray-600 p-3 rounded-md">
                        <FileCode size={24} className="text-gray-800" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{file.name}</p>
                        <p className="text-xs">JSON</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-end gap-1.5 md:gap-2">
                    <button
                      type="button"
                      className="p-2"
                      onClick={handleFileUploadClick}
                    >
                      <FileArrowUp size={18} />
                    </button>
                    <div className="flex min-w-0 flex-1 flex-col py-2">
                      <TextareaAutosize
                        rows={1}
                        className="m-0 resize-none border-0 bg-transparent max-h-52 px-0 focus:ring-0 focus-visible:ring-0 outline-none"
                        autoFocus
                        spellCheck={false}
                        autoComplete="off"
                        autoCorrect="off"
                      />
                    </div>
                    <div className="">
                      <button className="bg-white p-2 rounded-full">
                        <ArrowUp size={18} className="text-gray-700" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="relative px-2 py-2 text-center text-xs">
        <span>ChatGPT can make mistakes. Check important info.</span>
      </div>
    </div>
  );
};

export default ChatInput;
