import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

function Portfolio() {
    return (
        <Container>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src="https://picsum.photos/800/300" />
                            <Card.Body>
                                <Card.Title>Frontend End-to-End Testing with Cypress</Card.Title>
                                <Card.Text>
                                    <span>Reactjs</span>,<span>Cypress</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Portfolio