import { Dropdown } from "./documents/dropdown";
import { DocumentInfo } from "./documents/documentInfo";
import { MarkdownPreview } from "./documents/markdownPreview";
import { useState } from "preact/hooks";

export function App() {
  return (
    <>
      <div className="content-container">
        <div className="documents-view">
          <Dropdown title="Create" id="create-dropdown" />
          <Dropdown title="Update" id="update-dropdown" />
        </div>
        <div className="info-container">
          <DocumentInfo />
        </div>
        <div className="markdown-preview">
          <MarkdownPreview />
        </div>
      </div>
    </>
  );
}
