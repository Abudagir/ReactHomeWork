import "./Button.css";

const Button = ({ color, label }) => {
  const buttonStyle = {
    backgroundColor: color,
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  };
  return <button style={buttonStyle}>{label}</button>;
  // return <button className="button">Click</button>;
};

export default Button;
