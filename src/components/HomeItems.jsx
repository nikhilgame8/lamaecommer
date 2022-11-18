import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const HomeItems = (props) => {

  const goToItem = (id) =>{
    console.log(id);
  }

  return (
    <Link to={`/${props.cardId}`} className="text-decoration-none" style={{color: "black"}}>
    <Card className="border-0 position-relative" onClick={()=>goToItem(props.cardId)} style={{ width: `${props.size}` }}>
      <Card.Img className="smallCard" variant="top" src={props.images} />
      <Card.Body>
        <p style={{margin: "0"}}>
          {props.title}</p>{props.boldTitle}
          {props.lineBreak}{props.boldPrice}<p style={{margin: "0"}}>{props.price}</p>
      </Card.Body>
      {props.newLaunch}
    </Card>
    </Link>
  )
}

export default HomeItems
