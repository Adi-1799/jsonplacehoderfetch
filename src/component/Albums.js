import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Row, Col, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Albums() {
  const userid = localStorage.getItem('userid');
const [Users, fetchUsers] = useState([])

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/albums/')
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
          if(item.userId == userid){
            return(
            <>
            
            <Container fluid="lg" className='p-3' style={{ maxWidth:'fit-content' }} > 
                <Row lg="auto">

                <Col lg="auto">
                    <Card className='card' style={{ width: '18rem' }}>
                    <Card.Img className='imag' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2smwL5rVFct90vEJayxS6oBai2MoenC_Cpg&usqp=CAU" />  
                    <Card.Body>  
                        <Card.Title key={i}>{item.id}</Card.Title>  
                        <Card.Text key={i}>{item.title}</Card.Text>  
                        <Button variant="primary" onClick={() => {
                          localStorage.removeItem('userid');
                          localStorage.removeItem('useremail');
                          localStorage.removeItem('username');
                          localStorage.setItem('albumid', JSON.stringify(item.id));
                          navigate("/Photos");
                          
                        }
                      }
                      >Photos</Button>  
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
