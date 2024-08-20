import React from 'react'
import "./footer.css"
import { Col, Container, Row } from 'react-bootstrap'
import FooterReusable from '../reusable/FooterReusable'
import footerimg from "../../assets/baseball-ball.png"

const Footer = () => {
  return (
   <>
<section id='footer'>
  <Container>
    <Row>
      <Col lg={4}>
      <FooterReusable title="Immediate Deployment" para="Et vero eos et accusamus et 
iusto odio dignissimos" img={footerimg}></FooterReusable>
      </Col>
      <Col lg={4}>
      <FooterReusable title="Immediate Deployment" para="Et vero eos et accusamus et 
iusto odio dignissimos" img={footerimg}></FooterReusable>
      </Col>
      <Col lg={4}>
      <FooterReusable title="Immediate Deployment"  para="Et vero eos et accusamus et 
iusto odio dignissimos" img={footerimg}></FooterReusable>
      </Col>
    </Row>
  </Container>
</section>
   </>
  )
}

export default Footer