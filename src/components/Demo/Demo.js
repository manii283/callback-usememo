import React from 'react'
import MyParagraph from './MyParagraph';

const Demo = (props) => {
    console.log('demo running');
  return (
    <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
  )
}

export default Demo