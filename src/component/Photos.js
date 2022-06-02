import React, { useState, useEffect } from 'react'
import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Albums() {
  const albumid = localStorage.getItem('albumid');
const [Users, fetchUsers] = useState([])

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/photos/')
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
          if(item.albumId == albumid){
              
            return(
            <>
            
              <Container className='p-4'>  
                <Col md="2">
                    <Card className='card'>
                    <Card.Img className='imag' variant="top" src={item.url} />  
                    <Card.Body>  
                        <Card.Title key={i}>{item.id}</Card.Title>  
                        <Card.Text key={i}>{item.title}</Card.Text> 
                    </Card.Body>  
                    </Card>
                </Col>  
                </Container>  
            </>
            )
          }
        })}
        </div>
  )
}
