
export const Form = (props) => {

  return (
    <div className="blockForm">
      <form className="demoForm">
        <h2>Add comment</h2>
        <div className="formGroup">
          <label htmlFor="name">Email address</label>
          <input type="text"className="form-control"name="name"/>
          <textarea name="textComment" id="textArea" cols="30" rows="10" placeholder="Add your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  )
}