
import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";

export default function Score({ score,handleGameOver }) {
 
  return (
  
        <Col md="auto">
 <Card>
  <Card.Header as="h5">FINAL SCORE IS: {score}</Card.Header>
  <Card.Body>

    <Button variant="primary" onClick={()=>handleGameOver()}>New Game</Button>
  </Card.Body>
</Card>
        </Col>

  );
}






