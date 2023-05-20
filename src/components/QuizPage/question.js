import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";

export default function Question({ data, qSelect, handleQuestion }) {
  //console.log(data[qSelect].incorrect_answers)
  const shuffleAnswers = [
    data[qSelect].correct_answer,
    ...data[qSelect].incorrect_answers
  ].sort(() => Math.random() - 0.5);
//const [answer, setNewAnswer] = useState("")
  //console.log(shuffleAnswers)

  /*function setQuestion(e) {
    e.preventDefault()
    handleQuestion(answer);
  }

  function setAnswer(e) {
    e.preventDefault();
    const a = e.target.innerText;
    //console.log(a);
    setNewAnswer(a)
  }*/
  /*console.log(data.map(el=>{
return el.incorrect_answers.concat(el.correct_answer)
 }))*/
  return (
  
        <Col md="auto">
          <Card className="text-left">
            <Card.Header>Question {qSelect + 1}/10</Card.Header>
            <Card.Body>
              <Card.Title>CATEGORY / {data[qSelect].category}</Card.Title>
              <Card.Text>{data[qSelect].question}</Card.Text>

              <ListGroup>
                {shuffleAnswers.map((el) => (
                  <ListGroup.Item
                    key={el}
                    onClick={()=>handleQuestion(el)}
                    action
                    variant="light"
                  >
                    {el}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Button variant="primary" >
                Next Question --
              </Button>
            </Card.Footer>
          </Card>
        </Col>

  );
}
