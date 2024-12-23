import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
const CardMovie=({el})=>{
    const [isShowMore, setShowMore]= useState(false)
    return(

    <Card style={{ width: '18rem' }}>
    <Card.Img style={{width:"286px", height :"406px"}}variant="top" src={el.posterURL} />
    <Card.Body>
      <Card.Title>{el.title}</Card.Title>
      <Card.Text>
       {isShowMore ? el.description : el.description.slice(0,80)}
      </Card.Text>
      <Button className={isShowMore ? 'red' : 'green'} style={{border :"none",backgroungColor : "white"}} onClick={()=>setShowMore(!isShowMore)}>{isShowMore ? "show less" : "...Show more"}  </Button>
    </Card.Body>
  </Card>
    )
}

export default CardMovie