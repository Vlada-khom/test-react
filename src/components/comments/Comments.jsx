import './Comments.css'
export const Comments = (props) => {
  console.log(props);
  return (
    <div className="comments">
      {props.map((user, index) => (
        <div className="block">
          <div className="name" key={index}>{user.name}</div>
          <div className="date">{user.created_at}</div>
          <div className="message">{user.text}</div>
        </div>
      ))} 
    </div>
  );
};

