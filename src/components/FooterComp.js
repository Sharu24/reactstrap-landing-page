import React from "react";
import { Container } from "reactstrap";

function FooterComp() {
  return (
    <Container>
      <p className="float-right">
        <a href="#navbar">Back to top</a>
      </p>
      <p>
        &copy; 2017-2018 Company, Inc. &middot;
        <a href="https://reactstrap.github.io/">Privacy</a> &middot;{" "}
        <a href="https://reactstrap.github.io/">Terms</a>
      </p>
    </Container>
  );
}

export default FooterComp;
