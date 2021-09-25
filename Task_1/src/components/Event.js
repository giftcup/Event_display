import EventItems from "./EventItems";
function Event(props) {
  return (
    <div>
      {props.list.map((item) => (
        <EventItems key={item.name} item={item} />
      ))}
    </div>
  );
}

export default Event;
