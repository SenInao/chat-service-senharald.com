import "./Chatbox.css"
import UserType from "../../ws/User"
import { useEffect } from "react"
import WS from "../../ws/ws"
import Result from "../../ws/result"

interface ChatboxProps {
  user: UserType
}

const handleNewMessage = (result:Result) => {
  if (result.update) {
    if (result.update.update === "new-message") {
      console.log(result.update.payload)
    }
  }
}

export const Chatbox = ({user}:ChatboxProps) => {
  useEffect(() => {
    const ws = new WS("ws://localhost:8080")

    ws.msgCallback = handleNewMessage
  }, [])

  return (
    <div className="chatbox">
      <h1>Tommy Fury</h1>
      <div className="messages-container">
        <div className="my-message">
          <label>03:15</label>
          <label>HeY</label>
        </div>
        <div className="friend-message">
          <label>03:15</label>
          <label>Hello! how are you?</label>
        </div>
        <div className="my-message">
          <label>03:15</label>
          <label>Im good bro! Just had a fantastic day!</label>
        </div>
        <div className="friend-message">
          <label>03:15</label>
          <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,</label>
        </div>
        <div className="my-message">
          <label>03:15</label>
          <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium</label>
        </div>
      </div>
    </div>
  )
}
