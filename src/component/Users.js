
import React, { useState, useEffect } from 'react'
import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button} from 'react-bootstrap';
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
        <div className="App">  
        {Users.map((item, i) => {
            return(
            <>
                <Container className='p-4'>  
                <Col md="2">
                    <Card className='cont'>
                    <Card.Img className='imag' variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />  
                    <Card.Body>  
                        <Card.Title key={i}>{item.username}</Card.Title>  
                        <Card.Text key={i}>To see details of {item.name}</Card.Text>  
                        <Button variant="primary" onClick={() => {
                                navigate("/Albums");
                                localStorage.setItem('userid', JSON.stringify(item.id));
                                }
                            }
                        >Albums</Button>  
                    </Card.Body>  
                    </Card>
                </Col>  
                </Container>  
            </>
            )
        })}
        </div>
    )
}
