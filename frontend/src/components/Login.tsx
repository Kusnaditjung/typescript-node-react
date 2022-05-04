import { Alert, Button, Card, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Login.css';
import { AppState, Token, User } from "../common/types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Action, ActionType } from "../state/action";





const Login = () => {    
    const token = useSelector<AppState, Token | undefined>(state => state.token);
    const [name, setName] = useState<string| undefined>("");
    const [password, setPassword] = useState<string| undefined>("");
    const [error, setError] = useState<string| undefined>("");
    const dispatch = useDispatch();
    
 

    var doLogin = async (name: string | undefined, password: string | undefined): Promise<void> =>  {
        console.log(name);
        if (!name  || !password){
            setError("user name or password is empty");
        }
        else{
            setError(undefined);        

            try{

                const response = await fetch(`api/user/login`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ "name": name, "password": password})
                })

                var token = await response.json();
                console.log(token);
                var action: Action = { "type": ActionType.Login, "token": token };
                dispatch(action)
                setError("login successfull. token : " + JSON.stringify(token));

            }
            catch(error){
                setError("login error");
            }
        }
    }    
    
    console.log(JSON.stringify(token));
    return (
        token 
        ? <div>No access for login users </div>
        :
        <>
        <Card>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/index">Tendable</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/contact"  >Contact </Nav.Link>
                <Nav.Link href="/login" className="highlighted">Login </Nav.Link>      
                </Nav>
                </Container>
            </Navbar>
        </Card>
        <Container > 
        <Row className="justify-content-md-center">
            <Col md="4" className="login-container" >
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />    
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>  
                    <Button variant="primary" type="button" onClick={() => doLogin(name, password)}>
                        Submit
                    </Button>
                   

                </Form>
                    <br/>
                    { error && 
                    <Alert key='danger' variant='danger'>
                        {error}
                    </Alert>
}
            </Col>
        </Row>
       
        </Container>
        </>
      );
}

export default Login;