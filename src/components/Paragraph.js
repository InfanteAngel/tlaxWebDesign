import React from 'react'


export default function Paragraph(props) {
    const {heading, content} = props;
  return (
    <div className="para |">
      <h1 className="p-heading subHeader-ff uppercase">{heading}</h1>
      <p className="p-content">{content}</p>
    </div>
  )
}
