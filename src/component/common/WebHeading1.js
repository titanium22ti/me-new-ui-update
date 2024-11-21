import React from 'react';
import Fade from 'react-reveal/Fade';

const WebHeading1 = (props) => {
  return (
    <Fade bottom duration={1000}>
      <div className='web_heading'>
        <h2>{props.heading_text} </h2>
      </div>
    </Fade>
  )
}

export default WebHeading1;