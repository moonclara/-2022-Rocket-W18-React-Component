function Button() {
  const ButtonStyle = {
    background: "#1f57a6",
    color: "#ffffff",
    borderRadius: "4px",
    padding: "8px",
    width: "100%",
    border: "1px solid transparent",
  };

  return (
    <button type="button" style={{ ...ButtonStyle }}>
      Submit
    </button>
  );
}

export default Button;
