import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Row, Col, Button} from 'react-bootstrap';
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
    if (!albumid) {
      navigate("/");
     }
     else{
  
  return (
    
    <div className="App" style={{ position: 'absolute', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>  
             <Button block="true" size="lg" type="submit" style={{position:'relative',
                marginBottom:'20px',
                marginLeft:'90%',
                  height:'50px',
                  width:'100px'
                  }}
                  onClick ={() => {
                    localStorage.removeItem('albumid');
                    navigate('/');
              }} >
            Logout</Button>
        {Users.map((item, i) => {
          if(item.albumId === albumid){
              
            return(
              
            <>
              <Container fluid="lg" className='p-3' style={{ maxWidth:'fit-content' }} > 
                <Row lg="auto">

                <Col lg="auto">
                    <Card className='card' style={{ width: '18rem' }}>
                    <Card.Img className='imag' variant="top" src={item.url} />  
                    <Card.Body>  
                        <Card.Title key={i}>{item.id}</Card.Title>  
                        <Card.Text key={i}>{item.title}</Card.Text> 
                    </Card.Body>  
                    </Card>
                </Col>
                </Row>  
                </Container>  
            </>
            )
          }
        })}
        
           

        </div>
  )
}
}