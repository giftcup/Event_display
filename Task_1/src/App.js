// import { Route } from "react-router-dom";

// import AllEventsPage from "./pages/AllEvents";
// import NewEventsPage from "./pages/NewEvents";

import Event from "./components/Event";

function App() {
  return (
    // <div>
    //   <Route path="/">
    //     <AllEventsPage />
    //   </Route>
    //   <Route path="/new-event">
    //     <NewEventsPage />
    //   </Route>
    // </div>

    <div className="main">
      <h2 className="title">EVENTS</h2>
      <Event
        date="11TH NOV"
        name="Sunday Super Club"
        description="A culinary event with foods from all over the world. This is a weekly club you can join for a small fee. Learn to cook something delicious and beautiful"
        time="16:00 - 19:00"
        place="144 W Elm St.Chicago, II, 60610, USA"
      />
      <Event
        date="13TH NOV"
        name="Evenings in the Park"
        description="We invite you to listen to live bands play beautiful music in the park. Enjoy the sounds of Laureen Davis and the Kings, and enjoy wine tasting"
        time="06:30 - 08:30"
        place="Estuary park"
      />
      <Event
        date="15TH NOV"
        name="Morning Brews and Views"
        description="Enjoy samples of our latest brews while overlooking the beautiful sites of our city. Plenty of iced and hot teas, plus gourmet coffee drinking."
        time="08:00 - 15:00"
        place="The Teapot and Elrew Club"
      />
    </div>
  );
}

export default App;
