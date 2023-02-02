import Star from "../component/Star";
import Text from "../component/Text";
import Button from "../component/Button";

function Form() {
  const FormStyle = {
    width: "500px",
    height: "500px",
    backgroundColor: "white",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
  };

  return (
    <form style={{ ...FormStyle }}>
      <div className="container">
        <h1>Feedback</h1>
        <Star />
        <Text />
        <Button />
      </div>
    </form>
  );
}

export default Form;
