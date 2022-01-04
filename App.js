import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Item from "./components/Item";
import CreateCard from "./components/CreateCard";
import EditCard from "./components/EditCard";
import Card from "./components/Card";
import { Entypo } from "@expo/vector-icons";

const Data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    name: "etienne",
    age: 12,
  },
];

export default function App() {
  const [cards, setCards] = useState(Data);
  const [cardIdToEdit, setCardIdToEdit] = useState(0);
  const [initialCard, setInitialCard] = useState({
    title: "",
    name: "",
    age: "",
  });
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  console.log(cards);

  const deleteCard = (cardId) => {
    setCards((currentCards) => {
      return currentCards.filter((card) => card.id !== cardId);
    });
  };
  const updateCard = (cardId, cardValue) => {
    let cardIndex = cards.findIndex((card) => card.id === cardId);
    let newArr = [...cards];
    newArr[cardIndex] = cardValue;
    setCards(newArr);
    setEditing(false);
  };
  const updateClickHandler = (cardId, title, name, age) => {
    setCardIdToEdit(cardId);
    setInitialCard((currentCard) => ({
      ...currentCard,
      title,
      name,
      age,
    }));
    setEditing(true);
  };
  const cancelHandler = () => {
    if (adding) setAdding(false);
    if (editing) setEditing(false);
  };

  const addCard = (cardValue) => {
    setCards((currentCards) => [...currentCards, cardValue]);
    setAdding(false);
  };
  let content = cardIdToEdit ? (
    <EditCard
      cardId={cardIdToEdit}
      initialCard={initialCard}
      updateCard={updateCard}
      visible={editing}
      onCancel={cancelHandler}
    />
  ) : (
    <CreateCard
      addCard={addCard}
      initialCard={initialCard}
      visible={adding}
      onCancel={cancelHandler}
    />
  );
  return (
    <View style={styles.screen}>
      <Card
        title="add"
        style={styles.icon}
        onPress={() => {
          setAdding(true);
        }}
      >
        <Entypo name="add-to-list" size={50} color="black" />
      </Card>
      <View style={styles.inputContainer}>{content}</View>
      <ScrollView contentContainerStyle={styles.listContainer}>
        {cards.map((obj, index) => (
          <Item
            title={obj.title}
            name={obj.name}
            age={obj.age}
            key={index}
            cardId={obj.id}
            onDelete={deleteCard}
            onUpdate={updateClickHandler}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
    marginTop: 40,
  },
  listContainer: {
    flex:1,
    paddingVertical: 30,
    marginHorizontal: 10,
  },
  inputContainer: {
    padding: 40,
  },
  icon: {
    alignItems: "center",
    marginHorizontal:70,
  },
});
