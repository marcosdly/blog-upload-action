export function MarkdownPreview() {
  return (
    <>
      <textarea
        name="markdown"
        id="markdown-preview-text"
        placeholder="Raw markdown here..."
        disabled={true}
      ></textarea>
    </>
  );
}
