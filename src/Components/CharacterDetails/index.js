import React, { useEffect } from 'react'
import {
    Button,
    Row,
    Col,
    Navbar,
    Container,
    InputGroup,
    Form,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetCharacter } from '../../Redux/Actions/characterActions'


const CharacterDetails = () => {

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetCharacter(params.id))
        console.log(params.id);
    }, [])

    const character_list = useSelector(state => state.character.current_character ? state.character : {})

    return (
        <>
            <Row className="mx-0">
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Container className="justify-content-center">
                        <Navbar.Brand>Characters  Name</Navbar.Brand>
                    </Container>
                </Navbar>
            </Row>
            <Container fluid style={{ padding: '10px' }}>
                <Row xs="3">
                    <Col >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-lg">Name</InputGroup.Text>
                            <Form.Control
                                placeholder="Name"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ padding: '10px' }}>
                <Row xs="3">
                    <Col >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-lg">Wiki Url</InputGroup.Text>
                            <Form.Control
                                placeholder="Name"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ padding: '10px' }}>
                <Row xs="3">
                    <Col >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-lg">Race</InputGroup.Text>
                            <Form.Control
                                placeholder="Name"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ padding: '10px' }}>
                <Row xs="3">
                    <Col >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-lg">Gender</InputGroup.Text>
                            <Form.Control
                                placeholder="Name"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ padding: '10px' }}>
                <Row xs="3">
                    <Col >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-lg">Height</InputGroup.Text>
                            <Form.Control
                                placeholder="Name"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ padding: '10px' }}>
                <Row xs="3">
                    <Col >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-lg">Hire</InputGroup.Text>
                            <Form.Control
                                placeholder="Name"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ padding: '10px' }}>
                <Row xs="3">
                    <Col >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-lg">Realm</InputGroup.Text>
                            <Form.Control
                                placeholder="Name"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ padding: '10px' }}>
                <Row xs="3">
                    <Col >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-lg">Birth</InputGroup.Text>
                            <Form.Control
                                placeholder="Name"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ padding: '10px' }}>
                <Row xs="3">
                    <Col >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-lg">Spouse</InputGroup.Text>
                            <Form.Control
                                placeholder="Name"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ padding: '10px' }}>
                <Row xs="3">
                    <Col >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-lg">Death</InputGroup.Text>
                            <Form.Control
                                placeholder="Name"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ padding: '10px' }}>
                <Row xs="3">
                    <Col >

                    </Col>
                    <Col >

                    </Col>
                    <Col >
                        <Button variant="secondary">Close</Button>
                    </Col>
                </Row>
            </Container>
        </>


    )
}

export default CharacterDetails