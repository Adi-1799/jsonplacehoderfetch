import React, { useState, useEffect } from 'react'
import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button} from 'react-bootstrap';
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
    <div className="App">  
        {Users.map((item, i) => {
          if(item.userId == userid){
            return(
            <>
            
              <Container className='p-4'>  
                <Col md="2">
                    <Card className='card'>
                    <Card.Img className='imag' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2smwL5rVFct90vEJayxS6oBai2MoenC_Cpg&usqp=CAU" />  
                    <Card.Body>  
                        <Card.Title key={i}>{item.id}</Card.Title>  
                        <Card.Text key={i}>{item.title}</Card.Text>  
                        <Button variant="primary" onClick={() => {
                          navigate("/Photos");
                          
                          localStorage.setItem('albumid', JSON.stringify(item.id));
                        }
                      }
                      >Photos</Button>  
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
