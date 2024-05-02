import PT from ".prop-types";
const Header = ({ course }) => {
  return <div>{course}</div>;
};
Header.propTypes = {
  course: PT.string,
};

export default Header;
