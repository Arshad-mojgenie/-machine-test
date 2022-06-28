import React from 'react'
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

import PaginationUi from './ComonComponents/Pagination'

const App = () => {
  return (
    <>

      <Row className="mx-0">
        <Navbar expand="lg" bg="dark" variant="dark">
          <Container className="justify-content-center">
            <Navbar.Brand>Characters</Navbar.Brand>
          </Container>
        </Navbar>
      </Row>


      <Container fluid style={{ padding: '30px' }}>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
              <Form.Control
                placeholder="by name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">

              <InputGroup.Text id="inputGroup-sizing-lg">Sort By</InputGroup.Text>
              <DropdownButton
                variant="outline-secondary"
                title="by name (asc/dec)"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
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
                title="list of reces multisalaction"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-lg">Genter</InputGroup.Text>
              <DropdownButton
                variant="outline-secondary"
                title="Male/Female/Any"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Col>
          <Col><Button variant="secondary">Submit</Button>{' '}</Col>
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
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
              </tr>
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
              id="input-group-dropdown-2"
              align="end"
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

