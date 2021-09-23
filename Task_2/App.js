import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import Events from "./components/Events";

export default function App() {
  return (
    <ScrollView style={styles.main}>
      <Text style={styles.title}> Events </Text>
      <Events
        date="11TH NOV"
        name="Sunday Super Club"
        description="A culinary event with foods from all over the world. This is a weekly club you can join for a small fee. Learn to cook something delicious and beautiful"
        time="16:00 - 19:00"
        place="144 W Elm St.Chicago, II, 60610, USA"
      />
      <Events
        date="13TH NOV"
        name="Evenings in the Park"
        description="We invite you to listen to live bands play beautiful music in the park. Enjoy the sounds of Laureen Davis and the Kings, and enjoy wine tasting"
        time="06:30 - 08:30"
        place="Estuary park"
      />
      <Events
        date="15TH NOV"
        name="Morning Brews and Views"
        description="Enjoy samples of our latest brews while overlooking the beautiful sites of our city. Plenty of iced and hot teas, plus gourmet coffee drinking."
        time="08:00 - 15:00"
        place="The Teapot and Elrew Club"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 16,
    paddingHorizontal: 2,
    backgroundColor: "#050505e0",
  },
  title: {
    textTransform: 'uppercase',
    backgroundColor:'white',
    marginHorizontal: 70,
    padding: 10,
    letterSpacing: 10,
    fontSize: 20,
    textAlign: 'center',
  }
})
