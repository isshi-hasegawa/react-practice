export const ColorfulMessage = (props) => {
  const { color, message } = props;
  const contentStyle = {
    color,
    fontSize: '18px'
  };
  return <p style={contentStyle}>{message}</p>;
};
