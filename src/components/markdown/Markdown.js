import React, { useState } from "react"
import marked from "marked"
import ReactMarkdown from "react-markdown"

function Markdown() {
  const [markdown, setMarkdown] = useState("")

  const handleChane = (e) => {
    setMarkdown(e.target.value)
  }
  return (
    <div className='flex flex-col m-auto w-3/12'>
      <textarea
        className='h-auto p-2'
        onChange={handleChane}
        value={markdown}
      />
      {/* <div
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        className='bg-gray-200 p-2 h-screen mt-2 rounded'
      ></div> */}
      <ReactMarkdown source={markdown} />
    </div>
  )
}

export default Markdown
