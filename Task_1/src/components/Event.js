
function Event(props) {

  return (
    <div className="event">
      <h2 className="date"> {props.date} </h2>
      <div className="description">
        <h3>{props.name}</h3>
        <hr />
        <p>{props.description}</p>
        <button className="btn">+ Event Details</button>
      </div>

      <div className="address">
        <h3>{props.time}</h3>
        <p>
          <span>{props.place}</span>
        </p>
      </div>
    </div>
  );
}

export default Event;
