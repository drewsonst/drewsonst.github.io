import React from 'react'
import { Motion, StaggeredMotion, spring } from 'react-motion'

import './Bubble.scss'

const menuSpring = { stiffness: 170, damping: 15 }

const Bubble = props => (
  <Motion
    defaultStyle={{ left: props.position.left, top: props.position.top, opacity: 0 }}
    style={{
      left: spring(props.currentState.show //show or hide bubble
        ? props.currentState.move
          ? -(props.position.left * (props.gridWidth === 3 ? 2 : 1)) //move to center or back
          : 0
        : props.position.left),
      top: spring(props.currentState.show
        ? props.currentState.move
          ? -(props.position.top * (props.gridWidth === 3 ? 1 : 2))
          : 0
        : props.position.top),
      opacity: spring(props.currentState.show ? 1 : 0),
    }} >
    {(style) =>
      <div id={props.id} className={`mx-auto bubble ${props.currentState.move ? 'active' : ''}`}
        onClick={props.handleClick}
        disabled={!props.currentState.show}
        style={{
          left: `${style.left}%`,
          top: `${style.top}%`,
          opacity: style.opacity,
          zIndex: props.currentState.move ? 3 : 1,
        }} >
        <StaggeredMotion
          defaultStyles={props.subBubbles.map(() => ({ x: 0, z: -1 }))}
          styles={(prevStyles) => prevStyles.map((_, i) =>
            i === 0
              ? { x: spring(props.currentState.menu ? -140 : 0, menuSpring), z: prevStyles.x < -150 ? 2 : -1 }
              : { x: spring(prevStyles[i - 1].x, menuSpring), z: prevStyles.x < -150 ? 2 : -1 }
          )}>
          {(styles) =>
            <>
              {props.subBubbles.map((item, i) => (
                <a
                  className='sub-bubble'
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    transform: `rotate(${90 - (45 * i)}deg) translateX(${styles[i].x}%) rotate(${-(90 - (45 * i))}deg)`,
                    zIndex: styles[i].z
                  }}>
                  <p>{item.title}</p>
                </a>
              ))}
            </>
          }
        </StaggeredMotion>
        <div className='mask'>
          <img src={props.bubbleInfo.img} alt={props.bubbleInfo.alt} />
          <div className='bubble-text'>{props.bubbleInfo.text}
            <p>Examples</p>
          </div>
        </div>
      </div>
    }
  </Motion>
)

export default Bubble