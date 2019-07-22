import React from 'react'
import { Parallax } from 'react-parallax'
import { Container, Row, Col } from 'reactstrap'

import './Middle.scss'
import Bubble from './Bubble.js'
import background from '../../assets/coding-computer.jpg'
import html from '../../assets/html.jpg'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import reactNative from '../../assets/react-native.png'
import python from '../../assets/python.png'
import other from '../../assets/other.jpg'

const defaultState = { show: false, move: false, menu: false }

export default class Middle extends React.Component {
  state = {
    bubble1: defaultState,
    bubble2: defaultState,
    bubble3: defaultState,
    bubble4: defaultState,
    bubble5: defaultState,
    bubble6: defaultState
  }

  componentWillReceiveProps(newProps) {
    if (newProps.show !== this.props.show) {
      Object.keys(this.state).map(i =>
        this.setState({ [i]: { show: newProps.show, move: false, menu: false } }) //show all bubbles
      )
    }
  }


  handleClick = (e) => {
    const id = e.currentTarget.id
    if (this.state[id].menu) {  //menu already open
      Object.keys(this.state).forEach(i => {
        if (i === id) {
          this.setState({ [id]: { move: true, menu: false, show: true } }) //close the currently open menu
          setTimeout(() => { this.setState({ [id]: { menu: false, move: false, show: true } }) }, 500) //move the bubble back
        } else {
          setTimeout(() => { this.setState({ [i]: { show: true, move: false, menu: false } }) }, 500) //show other bubbles
        }
      })
    } else { //menu not open
      Object.keys(this.state).forEach(i => {
        if (i === id) {
          this.setState({ [id]: { move: true, menu: false, show: true } }) //move bubble to center
          setTimeout(() => { this.setState({ [id]: { move: true, menu: true, show: true } }) }, 500) //open the menu
        } else {
          this.setState({ [i]: { show: false, move: false, menu: false } }) //move other bubbles out
        }
      })
    }
  }

  render() {
    return (
      <div>
        <Parallax bgImage={background} strength={1000} blur={{ min: 0, max: 10 }}>
          <div className='middle'>
            <Container className='container-middle' >
              <Row>
                <div className='skills-text'>
                  <div className='title'>
                    <h1 className='text-white'>Projects</h1>
                  </div>
                </div>
              </Row>
              <Row className='my-row'>
                <Col md='4' xs='6' className='mid-col'>
                  <Bubble
                    id='bubble1'
                    currentState={{ ...this.state.bubble1 }}
                    bubbleInfo={{
                      img: reactNative,
                      alt: 'react native',
                      text: 'React Native',
                    }}
                    subBubbles={[
                      { title: 'AniFinder', link: 'https://github.com/drewsonst/AniFinder' },
                      { title: 'Coffee App', link: 'https://github.com/drewsonst/CoffeeApp' },
                      { title: `Tomato Timer`, link: 'https://github.com/drewsonst' },
                      { title: 'Coming Soon', link: 'https://github.com/drewsonst' },
                    ]}
                    position={{ left: -50, top: -50, }}
                    gridWidth={this.props.gridWidth}
                    handleClick={this.handleClick}
                  />
                </Col>
                <Col md='4' xs='6' className='mid-col'>
                  <Bubble
                    id='bubble2'
                    currentState={{ ...this.state.bubble2 }}
                    bubbleInfo={{
                      img: react,
                      alt: 'react',
                      text: 'React',
                    }}
                    subBubbles={[
                      { title: 'Portfolio', link: 'https://github.com/drewsonst/portfolio' },
                      { title: 'Simple ToDo', link: 'https://codesandbox.io/s/reacttodo-84pyvnoo40' },
                      { title: 'Coming Soon', link: 'https://github.com/drewsonst' },
                    ]}
                    position={{ left: this.props.gridWidth === 3 ? 0 : 50, top: -50, }}
                    gridWidth={this.props.gridWidth}
                    handleClick={this.handleClick}
                  />
                </Col>
                <Col md='4' xs='6' className='mid-col'>
                  <Bubble
                    id='bubble3'
                    currentState={{ ...this.state.bubble3 }}
                    bubbleInfo={{
                      img: javascript,
                      alt: 'javascript',
                      text: 'JavaScript',
                    }}
                    subBubbles={[
                      { title: 'Canvas Gravity', link: 'https://codesandbox.io/s/gravity-gyl22' },
                      { title: 'JS Only Todo', link: 'https://codesandbox.io/s/todo-wlnyn' },
                    ]}
                    position={{ left: this.props.gridWidth === 3 ? 50 : -50, top: this.props.gridWidth === 3 ? -50 : 0, }}
                    gridWidth={this.props.gridWidth}
                    handleClick={this.handleClick}
                  />
                </Col>
                <Col md='4' xs='6' className='mid-col'>
                  <Bubble
                    id='bubble4'
                    currentState={{ ...this.state.bubble4 }}
                    bubbleInfo={{
                      img: html,
                      alt: 'html',
                      text: 'HTML/CSS',
                    }}
                    subBubbles={[
                      { title: 'Portfolio', link: 'https://github.com/drewsonst' },
                      { title: 'JS Only Todo', link: 'https://codesandbox.io/s/todo-wlnyn' },
                    ]}
                    position={{ left: this.props.gridWidth === 3 ? -50 : 50, top: this.props.gridWidth === 3 ? 50 : 0, }}
                    gridWidth={this.props.gridWidth}
                    handleClick={this.handleClick}
                  />
                </Col>
                <Col md='4' xs='6' className='mid-col'>
                  <Bubble
                    id='bubble5'
                    currentState={{ ...this.state.bubble5 }}
                    bubbleInfo={{
                      img: python,
                      alt: 'python',
                      text: 'Python',
                    }}
                    subBubbles={[
                      { title: 'Comming Soon', link: 'https://github.com/drewsonst' },
                    ]}
                    position={{ left: this.props.gridWidth === 3 ? 0 : -50, top: 50, }}
                    gridWidth={this.props.gridWidth}
                    handleClick={this.handleClick}
                  />
                </Col>
                <Col md='4' xs='6' className='mid-col'>
                  <Bubble
                    id='bubble6'
                    currentState={{ ...this.state.bubble6 }}
                    bubbleInfo={{
                      img: other,
                      alt: 'others',
                      text: 'Other',
                    }}
                    subBubbles={[
                      { title: 'Comming Soon', link: 'https://github.com/drewsonst' }
                    ]}
                    position={{ left: 50, top: 50, }}
                    gridWidth={this.props.gridWidth}
                    handleClick={this.handleClick}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </Parallax>
      </div>
    )
  }
}


