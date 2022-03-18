import React from 'react';
// import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import "./card.scss";

export default function ProjectCard({title, link, subtitle, alt, image, text}) {
  // export default function renderCard = (card, index) => {
  return (
    <Card style={{
      width: '18rem'
    }}>
      <Card.Img 
        variant="top"
        src={image}
        alt={alt} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
        <Card.Link href={link} rel="noreferrer">Check out this Project</Card.Link>
      </Card.Body>
    </Card>
  )
};