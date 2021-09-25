function EventItems(props) {
  return (
    <div className="event">
      <h2 className="date"> {props.item.date} </h2>
      <div className="description">
        <h3>{props.item.name}</h3>
        <hr />
        <p>{props.item.description}</p>
        <button className="btn">+ Event Details</button>
      </div>

      <div className="address">
        <h3>{props.item.time}</h3>
        <p>
          <span>{props.item.place}</span>
        </p>
      </div>
    </div>
  );
}

export default EventItems;
