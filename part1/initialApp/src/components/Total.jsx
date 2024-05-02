import PropTypes from "prop-types";
const Total = ({ total }) => {
  return <p>{total}</p>;
};
Total.propTypes = {
  total: PropTypes.string,
};

export default Total;
