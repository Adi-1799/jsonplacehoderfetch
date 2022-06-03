
import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button, Row} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Users() {
    const [Users, fetchUsers] = useState([])

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            fetchUsers(res)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    let navigate = useNavigate();

    return (
        <div className="App" style={{ position: 'absolute', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>  
        {Users.map((item, i) => {
            return(
            <>
                <Container fluid="lg" className='p-3' style={{ maxWidth:'fit-content' }} > 
                <Row lg="auto">

                <Col lg="auto">
                    <Card className='card' style={{ width: '18rem' }}>
                    <Card.Img className='imag' variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />  
                    <Card.Body>  
                        <Card.Title key={i}>{item.username}</Card.Title>  
                        <Card.Text key={i}>To see details of {item.name}</Card.Text>  
                        <Button variant="primary" onClick={() => {
                            navigate("/Login");
                            localStorage.setItem('userid', JSON.stringify(item.id));
                            localStorage.setItem('useremail', JSON.stringify(item.email));
                            localStorage.setItem('username', JSON.stringify(item.username));
                        }
                    }
                    >Login</Button>  
                    </Card.Body>  
                    </Card>
                </Col>  
                </Row>
                </Container>  
            </>
            )
        })}
        </div>
    )
}
