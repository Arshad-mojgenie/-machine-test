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
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CharacterDetails = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(GetCharacter(params.id))
        console.log(params.id);
    }, [])

    const character_list = useSelector(state => state.character.current_character ? state.character.current_character[0] : {})

    const handleCloseBtnClk = () => {
        navigate("/", { replace: true });
    }

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
                                value={character_list.name}
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
                                placeholder="Wiki Url"
                                value={character_list.wikiUrl}
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
                                placeholder="Race"
                                value={character_list.race}
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
                                placeholder="gender"
                                value={character_list.gender}

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
                                placeholder="Height"
                                value={character_list.height}
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
                                placeholder="Hire"
                                value={character_list.hire}
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
                                placeholder="Realm"
                                value={character_list.realm}
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
                                placeholder="Birth"
                                value={character_list.bitrh}
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
                                placeholder="Spouse"
                                value={character_list.spouse}

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
                                placeholder="Death"
                                value={character_list.death}
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
                        <Button onClick={handleCloseBtnClk} variant="secondary">Close</Button>
                    </Col>
                </Row>
            </Container>
        </>


    )
}

export default CharacterDetails