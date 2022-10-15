import {Context} from "./Context"
import { useContext } from "react"

function Note(props) {    
  const now = new Date()
  const period = Math.round((now - props.created) / 1000 / 60)
  const {del} = useContext(Context)

  function showPeriod(period) {
    if (period < 1) return "just now"
    if (period < 60) return `${period} min`
    if (period < 1440) return `${Math.trunc(period/60)} hours`
    return `${Math.trunc(period/1440)} days`
  }

  return(
    <div className="note">
        <div>
          <div className="note-header">
            <h3>Name</h3>
            <button className="create-exit" onClick={() => del(props.id)}>✖</button>
          </div>
          <div className="status-time">
            <p>Status</p>
            <p>-</p>
            <p>{showPeriod(period)}</p>
          </div>
        </div>
        <div className="text">{props.content}</div>
        <p>Комментировать</p>
        <textarea placeholder="Введите ваш комментарий" disabled/>
    </div>
  )
}

export default Note
