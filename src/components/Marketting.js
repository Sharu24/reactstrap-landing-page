import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardBody,
  Container
} from "reactstrap";

const Marketting = props => {
  return (
    <Container className="mt-5">
      <CardGroup>
        <Card className="p-4">
          <CardImg
            height="140"
            className="rounded-circle px-5"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="Card image cap"
          />
          <CardBody className="text-center">
            <CardTitle tag="h5">Heading</CardTitle>
            <CardText>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna.
            </CardText>
            <Button color="secondary">View details &raquo;</Button>
          </CardBody>
        </Card>
        <Card className="p-4">
          <CardImg
            height="140"
            className="rounded-circle px-5"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="Card image cap"
          />
          <CardBody className="text-center">
            <CardTitle tag="h5">Heading</CardTitle>
            <CardText>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna.
            </CardText>
            <Button color="secondary">View details &raquo;</Button>
          </CardBody>
        </Card>
        <Card className="p-4">
          <CardImg
            height="140"
            className="rounded-circle px-5"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="Card image cap"
          />
          <CardBody className="text-center">
            <CardTitle tag="h5">Heading</CardTitle>
            <CardText>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna.
            </CardText>
            <Button color="secondary">View details &raquo;</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Marketting;
