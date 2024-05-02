import Part from "./Part";
const Content = ({ content }) => {
  return content.map(({ part, exercise }, index) => {
    return <Part key={index} part={part} exercise={exercise} />;
  });
};

export default Content;
