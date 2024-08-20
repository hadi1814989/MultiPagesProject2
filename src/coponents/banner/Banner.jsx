import React from 'react'
import "./banner.css"
import { Button, Col, Container, Row } from 'react-bootstrap'
import banimg from "../../assets/banner-img.png"
import bell from "../../assets/bell.png"
import round from "../../assets/round.png"

const Banner = () => {
  return (
  <>
  <section id='banner'>
    <Container>
      <Row>
        <Col lg={5}>
        <div className="button">
      <img className='bell' src={bell} alt="" />
      <img className='round' src={round} alt="" />
      <Button className='cus-btn1-ban'>Startup Business</Button>
     </div>
        <h2>Empowering startups to fuel
        their business growth</h2>
        <p>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,
 velit
nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
      <Button className='cus-btn2-ban'>Get started now </Button>
        </Col>
        <Col lg={{span: 4, offset: 3}}>
        <img className='ban-img' src={banimg} alt="" />
        </Col>
      </Row>
    </Container>
  </section>
  </>
  )
}

export default Banner