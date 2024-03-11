import { useState } from "preact/hooks";
import { createDoc, updateDoc } from "../firestore/operations";

interface FieldProps {
  title: string;
  type: string;
  content: any;
}

const fields: Record<string, { type: string; content: any }> = {
  title: { type: "string", content: "" },
  shortTitle: { type: "string", content: "" },
  description: { type: "string", content: "" },
  shortDescription: { type: "string", content: "" },
  category: { type: "string", content: "" },
  filename: { type: "string", content: "" },
  wholeMarkdown: { type: "string", content: "" },
  dateCreated: { type: "date", content: null },
  dateLastUpdated: { type: "date", content: null },
};

function Field({ title, type, content }: FieldProps) {
  return (
    <div className="field">
      <input type="text" name="title" value={title} disabled className="title" />
      <p className="token">:</p>
      <input type="text" name="type" value={type} disabled className="type" />
      <p className="token">=</p>
      <input type={type} name="content" value={content} className="content" />
    </div>
  );
}

export function DocumentInfo() {
  const [labelText, setLabelText] = useState("Confirm?");
  const [pressedOnce, setPressedOnce] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Yes");

  const components = Object.entries(fields).map(([title, { type, content }]) => (
    <Field title={title} type={type} content={content} />
  ));

  const confirmListener = (event: MouseEvent) => {
    event.preventDefault();
    if (disabled) return;
    if (pressedOnce) {
      // TODO
      // if (updateType === "update") updateDoc();
      // else if (updateType === "create") createDoc();
      setPressedOnce(false);
      setDisabled(false);
      setButtonText("Yes");
      setLabelText("Confirm?");
      return;
    }

    // Garanteed

    setDisabled(true);
    setLabelText("Confirm (Double Check) ?");

    (async function () {
      for (let i = 0; i < 10; ++i) {
        setButtonText(`(${10 - i})`);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      setPressedOnce(true);
      setButtonText("Confirm");
      setDisabled(false);
    })();
  };

  return (
    <div className="document-info-container">
      <h2>Document Info</h2>
      {components}
      <div className="confirm">
        <label htmlFor="confirm-button" className="confirm-label">
          {labelText}
        </label>
        <input
          type="button"
          name="confirm-button"
          value={buttonText}
          disabled={disabled}
          onClick={confirmListener}
        />
      </div>
    </div>
  );
}
