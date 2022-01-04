import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Item = ({ onDelete, onUpdate, cardId, title, name, age }) => {
  console.log(cardId, title, name, age);
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.item}>{title}</Text>
        <Text style={styles.item}> {name} </Text>
        <Text style={styles.item}> {age} </Text>
      </View>

      <View>
        <View style={styles.button}>
          <Button
            title="Update"
            color="green"
            onPress={() => {
              onUpdate(cardId, title, name, age);
            }}
          />
          <MaterialIcons name="update" size={32} color="green" />
        </View>
        <View style={styles.button}>
          <Button
            title="Delete"
            color="red"
            onPress={() => {
              onDelete(cardId);
            }}
          />
          <MaterialIcons name="delete" size={32} color="red" />
        </View>
      </View>
    </View>
  );
};
export default Item;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    padding: 8,
    color: "black",
  },
  item: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
  },
});
