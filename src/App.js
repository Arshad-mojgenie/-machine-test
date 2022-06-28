import React, { useEffect, useState } from 'react'
import {
  Button,
  Row,
  Col,
  Navbar,
  Container,
  InputGroup,
  Form,
  DropdownButton,
  Dropdown,
  Table
} from 'react-bootstrap';
import PaginationUi from './CommonComponents/Pagination'
import { GetAllCharacter, GetFilterCharacterByName, SortCharacterOrder } from './Redux/Actions/characterActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllCharacter());
  }, [])

  const character_list = useSelector(state => state.character.all_character ? state.character.all_character : [])
  const [searchTerm, setSearchTerm] = useState('');
  const [orderItem, serOrderItem] = useState('Asn');
  const [race, setRace] = useState('Human');

  const handleSearchByName = (e) => {
    setSearchTerm(e.target.value);
    dispatch(GetFilterCharacterByName(e.target.value))
  }
  const handleSearchBtnClk = (e) => {
    dispatch(GetFilterCharacterByName(searchTerm))
  }

  const handleSortDpnChange = (type) => {
    serOrderItem(type);
    dispatch(SortCharacterOrder(type))
  }

  const handleSelect = () => {
    serOrderItem();
  }

  const handleSubmitBtnClk = (e) => {
    e.preventDefault();
    console.log("orderItem", orderItem);
    console.log("reac", race);
  }

  return (
    <>


      <Row className="mx-0">
        <Navbar expand="lg" bg="dark" variant="dark">
          <Container className="justify-content-center">
            <Navbar.Brand >Characters</Navbar.Brand>
          </Container>
        </Navbar>
      </Row>

      <Container fluid style={{ padding: '30px' }}>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text onClick={handleSearchBtnClk} id="inputGroup-sizing-lg">Search</InputGroup.Text>
              <Form.Control
                placeholder="by name"
                onChange={handleSearchByName}
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">

              <InputGroup.Text id="inputGroup-sizing-lg">Sort By</InputGroup.Text>
              <DropdownButton
                variant="outline-secondary"
                title="by name (asc/dec)"
                onSelect={handleSelect}
              >

                <Dropdown.Item
                  onClick={() => handleSortDpnChange("Asc")}>Asc</Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleSortDpnChange("Desc")}>Desc</Dropdown.Item>

              </DropdownButton>
            </InputGroup>
          </Col>
        </Row>
      </Container>

      <Container fluid style={{ padding: '30px' }}>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-lg">Race</InputGroup.Text>
              <DropdownButton
                variant="outline-secondary"
              >
                <Dropdown.Item >Human</Dropdown.Item>
                <Dropdown.Item >Elian</Dropdown.Item>
                <Dropdown.Item >Elf</Dropdown.Item>
                <Dropdown.Item >Dwarf</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-lg">Genter</InputGroup.Text>
              <DropdownButton
                variant="outline-secondary"
                title="Male/Female/Any"
                value={"male"}

              >
                <Dropdown.Item >Male</Dropdown.Item>
                <Dropdown.Item >Female</Dropdown.Item>

              </DropdownButton>
            </InputGroup>
          </Col>

          <Col><Button onClick={handleSubmitBtnClk} variant="secondary">Submit</Button></Col>

        </Row>
      </Container>

      <Container fluid style={{ padding: '30px' }}>
        <Row className="mx-0">
          <Table striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Race</th>
                <th>Genter</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                character_list.map(item => {
                  return (
                    <tr>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>{item.race}</td>
                      <td>{item.gender}</td>
                      <td>
                        <Link to={`/character-details/${item._id}`}>Detals</Link>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Row>
      </Container>

      <Container fluid style={{ padding: '30px' }}>
        <Row>
          <Col xs={6}>{PaginationUi()}</Col>
          <Col xs={6}><InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-lg">Limit</InputGroup.Text>
            <DropdownButton
              variant="outline-secondary"
              title="5"
            >
              <Dropdown.Item >5</Dropdown.Item>
              <Dropdown.Item >10</Dropdown.Item>
              <Dropdown.Item >15</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App

