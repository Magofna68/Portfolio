import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function Card({title, link, subTitle, alt, image, text}) {
  return (
    // <Container>
      <Card style={{
        width: '18rem'
      }}>
        <Card.Img 
          variant="top"
          src={image}
          alt={alt} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{subTitle}</Card.Subtitle>
          <Card.Text>{text}</Card.Text>
          <Card.Link href={link} rel="noreferrer">Check out this Project</Card.Link>
          // <Card.Link href="#" rel="noreferrer">View Code</Card.Link>
        </Card.Body>
      </Card>
    // </Container>
  )
}

export default Card;
