import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

const Events = (props) => {
  const Separator = () => <View style={styles.separator} />;
  return (
    <ScrollView>
      <View style={styles.event}>
        <View style={styles.date}>
          <Text style={styles.dateText}>{props.date}</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.textHeading}>{props.name}</Text>
          <Separator />
          <Text style={styles.text}>{props.description}</Text>
        </View>
        <View style={styles.button}>
          <Button
            color="transparent"
            title="+ Event Details"
            textTransform="initial"
          />
        </View>
        <View style={styles.address}>
          <Text style={styles.textHeading}>{props.time}</Text>
          <Separator />
          <Text style={styles.text}>{props.place}</Text>
        </View>
      </View>
      <Separator />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  event: {
    width: "90%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: '3em'
  },
  date: {
     paddingLeft: '1em'
  },
  description: {
    width: "fit-content",
    padding: "1em",
    paddingTop: 0,
  },
  button: {
    paddingLeft: 11,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  address: {
    width: "fit-content",
    padding: "1em",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  dateText: {
    fontFamily: "sans-serif",
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  text: {
    fontFamily: "sans-serif",
    fontSize: 15,
    color: "white",
  },
  textHeading: {
    fontFamily: "sans-serif",
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    paddingVertical: 8,
  },
});

export default Events;
