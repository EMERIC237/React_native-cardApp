import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
let id = 1;
const Data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    name: "etienne",
    age: 12,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    name: "etienne",
    age: 12,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    name: "etienne",
    age: 12,
  },
];

const Form = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  console.log(title, name, age);
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
        value={age}
      />

      <TouchableOpacity activeOpacity={0.3}>
        <Button
          title="Add"
          onPress={() => {
            onSubmit({ id: id++, title, name, age });
            setTitle("");
            setName("");
            setAge("");
          }}
          color="blue"
        />
      </TouchableOpacity>
    </View>
  );
};

const Item = ({ onDelete, cardId, title, name, age }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.item}> {title} </Text>
      <Text style={styles.item}> {name} </Text>
      <Text style={styles.item}> {age} </Text>

      <Button
        title="Update"
        color="green"
        onPress={() => {
          onDelete(cardId);
        }}
      />

      <Button
        title="Delete"
        color="red"
        onPress={() => {
          onDelete(cardId);
        }}
      />
    </View>
  );
};

export default function App() {
  const [cards, setCards] = useState(Data);

  const deleteCard = (cardId) => {
    setCards((currentCards) => {
      return currentCards.filter((card) => card.id !== cardId);
    });
  };

  const addCard = (cardValue) => {
    setCards((currentCard) => [...currentCard, cardValue]);
  };
  console.log(cards);

  return (
    <View style={styles.container}>
      <Form onSubmit={addCard} />

      {cards.map((obj) => (
        <Item
          title={obj.title}
          name={obj.name}
          age={obj.age}
          key={obj.id}
          cardId={obj.id}
          onDelete={deleteCard}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  card: {
    backgroundColor: "beige",
    margin: 10,
    padding: 10,
    justifyContent: "center",
  },
  item: {
    fontSize: 14,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
