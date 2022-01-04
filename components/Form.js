import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
let id = 1;
const Form = ({ onSubmit, initialState, cardId = null, onCancel }) => {
  const [title, setTitle] = useState(initialState.title);
  const [name, setName] = useState(initialState.name);
  const [age, setAge] = useState(initialState.age.toString());
  let submitButton = cardId ? (
    <TouchableOpacity activeOpacity={0.5}>
      <Button
        title="Edit"
        onPress={() => {
          onSubmit(cardId, { id: cardId, title, name, age });
          setTitle("");
          setName("");
          setAge("");
        }}
        color="green"
      />
    </TouchableOpacity>
  ) : (
    <Button
      title="ADD"
      onPress={() => {
        onSubmit({ id: id++, title, name, age });
        setTitle("");
        setName("");
        setAge("");
      }}
      color="blue"
    />
  );
  return (
    <View>
      <TextInput
        placeholder="enter the card title"
        style={styles.input}
        onChangeText={(title) => setTitle(title)}
        value={title}
      />

      <TextInput
        placeholder="enter the name"
        style={styles.input}
        onChangeText={(name) => setName(name)}
        value={name}
      />

      <TextInput
        placeholder="enter the age"
        style={styles.input}
        onChangeText={(age) => setAge(age)}
        keyboardType="numeric"
        value={age}
      />

      <View style={styles.buttonContainer}>
        {submitButton}
        <Button
          title="Cancel"
          onPress={() => {
            onCancel();
          }}
          color="red"
        />
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
