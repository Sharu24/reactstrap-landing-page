import React from "react";
import { Container } from "reactstrap";

function FooterComp() {
  return (
    <Container>
      <p class="float-right">
        <a href="#">Back to top</a>
      </p>
      <p>
        &copy; 2017-2018 Company, Inc. &middot;
        <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
      </p>
    </Container>
  );
}

export default FooterComp;
