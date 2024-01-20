import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/not-found-page/404.png";
import { Button } from "react-bootstrap";
import Background from "../../components/background";

const NotFoundPage = () => {
  return (
    <>
      <Background />
      <div
        className="d-flex flex-column justify-content-center align-items-center py-4"
        style={{ zIndex: "100" }}
      >
        <h2 className="text-light">Page Not Found!</h2>
        <Button as="a" variant="primary">
          <Link className="text-light bolder" to={"/"}>
            Return to home page
          </Link>
        </Button>
        <img src={image} alt="404" />
      </div>
    </>
  );
};

export default NotFoundPage;
