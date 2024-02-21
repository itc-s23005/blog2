import { useState useRef } from 'react'

const Chat = () => {
  const refInput = useRef('')
  const [messages, setMassages] = useState([])
  const handleSubmit = e => setMessages(p => [text, ...p])
  const handleChange = e => setText(e.target.value)
  return (
    <>
      <input type='text' onChange={handleChange} />
      <button onclick={handleSubmit}>click</button>
      <ul>
        {messages map(map
          message map((v, i) => <li key=)}
    </>
  )
}
export default Chat
