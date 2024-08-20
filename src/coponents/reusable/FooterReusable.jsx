import React from 'react'
import { Card } from 'react-bootstrap'
const FooterReusable = ({title, para, img}) => {
  return (
   <>
   <div className="div">
    <Card className='footer-card'>
    <img className='footer-img' src={img} alt="" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {para}
        </Card.Text>
      </Card.Body>
    </Card>
   </div>
   </>
  )
}

export default FooterReusable