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
// import PaginationUi from './CommonComponents/Pagination'
import { GetAllCharacter, GetFilterCharacterByName, SubmitSearchCharacter } from './Redux/Actions/characterActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PaginationUi from './CommonComponents/Pagination';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllCharacter());
  }, [])

  const character_list = useSelector(state => state.character.all_character ? state.character.all_character : [])
  const [searchTerm, setSearchTerm] = useState('');
  const [orderItem, setOrderItem] = useState('ase');
  const [race, setRace] = useState('Human');
  const [gender, setGender] = useState('Male');
  const [limit, setLimit] = useState(5);

  const handleSearchByName = (e) => {
    setSearchTerm(e.target.value);
    dispatch(GetFilterCharacterByName(e.target.value))
  }
  const handleSearchBtnClk = (e) => {
    dispatch(GetFilterCharacterByName(searchTerm))
  }

  const handleSortDpnChange = (type) => {
    setOrderItem(type);
  }

  const handleLimitChange = (limit) => {
    setLimit(limit)
    dispatch(SubmitSearchCharacter(limit, gender, race, orderItem))

  }


  const handleSubmitBtnClk = () => {
    dispatch(SubmitSearchCharacter(limit, gender, race, orderItem))
    console.log("orderItem", orderItem);
    console.log("race", race);
    console.log("Genter", gender);
    console.log("limit", limit)
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
                title={orderItem}

              >

                <Dropdown.Item
                  onClick={() => handleSortDpnChange("asc")}>Asc</Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleSortDpnChange("desc")}>Desc</Dropdown.Item>

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
                title={race}
              >
                <Dropdown.Item onClick={() => { setRace("Human") }}  >Human</Dropdown.Item>
                <Dropdown.Item onClick={() => { setRace("Elf") }} >Elf</Dropdown.Item>
                <Dropdown.Item onClick={() => { setRace("Dwarf") }}  >Dwarf</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-lg">Genter</InputGroup.Text>
              <DropdownButton
                variant="outline-secondary"
                title={gender}
              >
                <Dropdown.Item onClick={() => { setGender("Male") }} >Male</Dropdown.Item>
                <Dropdown.Item onClick={() => { setGender("Female") }} >Female</Dropdown.Item>

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
                character_list.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
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
        <Row className='flex justify-content-between' >
          <Col xs={6}>{PaginationUi()}</Col>
          <Col xs={2}><InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-lg">Limit</InputGroup.Text>
            <DropdownButton
              variant="outline-secondary"
              title={limit}
            >
              <Dropdown.Item onClick={() => handleLimitChange(5)} >5</Dropdown.Item>
              <Dropdown.Item onClick={() => handleLimitChange(10)} >10</Dropdown.Item>
              <Dropdown.Item onClick={() => handleLimitChange(15)} >15</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default App

