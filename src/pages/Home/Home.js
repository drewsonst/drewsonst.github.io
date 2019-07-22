import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
} from 'reactstrap'
import { Link } from 'react-router-dom'


import './Home.scss'
import HomeNavBar from './HomeNavBar'
import TooltipItem from './TooltipItem'
import tooltips from './tooltips'
import Header from './Header'
import Middle from './Middle'
import Bottom from './Bottom'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.tooltips = tooltips
    this.topRef = React.createRef()
    this.aboutRef = React.createRef()
    this.middleRef = React.createRef()
    this.bottomRef = React.createRef()
    this.gridWidth = 3
    this.state = {
      showMiddle: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener("resize", this.getWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  getWidth = () => {
    this.gridWidth = window.innerWidth >= 768 ? 3 : 2
  }

  handleScroll = () => {
    if (this.isElementInViewport(this.middleRef.current)) {
      this.setState({ showMiddle: true })
    }
  }

  scrollTo(ref) {
    console.log('ping')
    ref.current.scrollIntoView({ block: "center", behavior: 'smooth' })
  }

  isElementInViewport = el => {
    var rect = el.getBoundingClientRect() //get bounding rect in relation to current screen pos
    return (
      rect.top <= (window.innerHeight * 0.5) //when the element is 50% on screen
    )
  }

  render() {
    return (
      <div className='appContainer'>
        <HomeNavBar
          scrollTo={this.scrollTo}
          refs={{ top: this.topRef, about: this.aboutRef, middle: this.middleRef, bottom: this.bottomRef }}

        />
        <div ref={this.topRef}>
          <Header />
        </div>
        <Container className="page-container" >
          <div style={{ height: "500px" }} ref={this.aboutRef}>
            <Row>
              <Col xs="6" className="my-col">
                <div className="title">
                  <p>About me</p>
                </div>
              </Col>
              <Col xs="6" className="my-col d-flex align-items-end">
                <div className="link-bar">
                  {this.tooltips.map((tooltip, i) => {
                    return <TooltipItem item={tooltip} id={i} key={i} />
                  })}
                </div>
              </Col>
            </Row>
            <Row className='about-text'>
              <Col md='6' xs="12" className="my-col">
                <p>I am an accomplished Quality Assurance and Software Development specialist with 10+ years of industry experience.
                I am highly skilled in programming, developing test plans and automation tools.  With extensive experience with programming languages such as React, React Native, JavaScript, Java, C++, C#, Python, Ruby, JQuery, HTML, CSS, and proficiency in Agile, Scrum and Waterfall methodologies.</p>
                <p>Throughout my career, I have been an enterprising strategist and empowering leader who exhibits ethical stewardship and a commitment to excel.  As the QA Engineer Lead at Hulu I crafted tools for installing our application on smart TVs, all the different brands used different methods; tools were user friendly and GUI based resulting in accelerated company wide adoption.</p>
              </Col>
              <Col md='6' xs="12" className="my-col">
                I have managed internal and external teams testing across a multitude of platforms (streaming boxes, smart TVs, video game consoles, PCs, iOS, Android, proprietary hardware).
                I have written and maintained automation and test applications in Python, JavaScript/Mocha, C++, Ruby, and Java.
                I have overseen the creation and distribution of builds to distinct platforms, compiled reports and Sprint forecasts.
                I have assumed multiple leadership roles throughout my career.
                I have always maintained developer relations through the app development process from ideation to creation.
                I have a wide skill set and technical expertise as well as a desire to always learn and improve.
              </Col>
            </Row>
          </div>
        </Container >
        <div ref={this.middleRef}>
          <Middle show={this.state.showMiddle} gridWidth={this.gridWidth} />
        </div>
        <div style={{ height: "150px" }} />
        <Container>
          <div ref={this.bottomRef} />
          <Row>
            <Col xs='6' className='my-col'>
              <a href="/assets/resume.pdf" target="_blank" download className='resume'>DOWNLOAD MY RESUME</a>
            </Col>
            <Col xs='6' className='my-col'>
              <div className="link-bar">
                {this.tooltips.map((tooltip, i) => {
                  return <TooltipItem item={tooltip} id={i + 10} key={i + 10} />
                })}
              </div>
              <div>Thank you for visiting my site. If you would like to contact me please do so via Linkedin</div>
            </Col>
          </Row>
        </Container>
        <div style={{ height: "100px" }}></div>
      </div >
    )
  }
}