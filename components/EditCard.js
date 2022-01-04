import React from "react";
import Form from "./Form";
import { StyleSheet, Text, View, Modal } from "react-native";

const EditCard = ({ cardId, initialCard, updateCard, visible, onCancel }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Form
          onSubmit={updateCard}
          initialState={initialCard}
          cardId={cardId}
          onCancel={onCancel}
        />
      </View>
    </Modal>
  );
};

export default EditCard;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
  },
});
