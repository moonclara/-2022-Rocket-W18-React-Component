function Text() {
  const TextAreaStyle = {
    background: "#f0f0f0",
    borderRadius: "8px",
    border: "unset",
    padding: "8px",
    width: "92%",
    marginBottom: "20px",
    resize:"none"
  };

  return (
    <textarea
      name=""
      id=""
      cols="20"
      rows="10"
      placeholder="Other Suggestions..."
      style={{ ...TextAreaStyle }}
    ></textarea>
  );
}

export default Text;
