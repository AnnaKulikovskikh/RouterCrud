function Note(props) {      
  return(
    <div className="note">
        <div>
          <h3>Name</h3>
          <div className="status-time">
            <p>Status</p>
            <p>-</p>
            <p>6 min</p>
          </div>
        </div>
        <div className="text">{props.content}</div>
        <p>Комментировать</p>
        <textarea placeholder="Введите ваш комментарий" disabled/>
    </div>
  )
}

export default Note
