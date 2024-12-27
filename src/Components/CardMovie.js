import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const CardMovie=({el})=>{
    const [isShowMore, setShowMore]= useState(false)
    return(
      

    <Card style={{ width: '18rem' }}>
      <Link to={`/Movies/${el.id}`}>
    <Card.Img style={{width:"286px", height :"406px"}}variant="top" src={el.posterURL} />
    </Link>
    <Card.Body>
     <Link to={`/AddMovie/${el.id}`}><Card.Title>{el.title}</Card.Title></Link> 
      <Card.Text>
       {isShowMore ? el.description : el.description.slice(0,80)}
       <Button className={isShowMore ? 'red' : 'green'} style={{border :"none",backgroungColor : "red"}} onClick={()=>setShowMore(!isShowMore)}>{isShowMore ? "show less" : "...Show more"}  </Button>
      </Card.Text>
     <Rating name='read-only' value={el.Rating} readOnly/>
    </Card.Body>
  </Card>
    )
}

export default CardMovie