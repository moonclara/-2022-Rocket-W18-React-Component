function Button() {
  const ButtonStyle = {
    background: "#7851a9",
    color: "#ffffff",
    borderRadius: "4px",
    padding: "8px",
    width: "100%",
    border: "1px solid transparent",
    cursor: "pointer",
  };

  return (
    <button type="button" style={{ ...ButtonStyle }}>
      Submit
    </button>
  );
}

export default Button;
