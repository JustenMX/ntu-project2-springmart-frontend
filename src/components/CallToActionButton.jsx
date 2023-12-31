/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function CallToActionButton(props) {
  const { className, buttonFunc, buttonTitle, path, buttonLabel } = props;
  return (
    <>
      <button className={className} onClick={buttonFunc} title={buttonTitle}>
        <Link to={path}>{buttonLabel}</Link>
      </button>
    </>
  );
}

export default CallToActionButton;
