import React from "react";
import Form from "./Form";
import { StyleSheet, Text, View, Modal } from "react-native";

const CreateCard = ({ addCard, initialCard, visible, onCancel }) => {
  return (
    <Modal visible={visible} animationType="slide" style={styles.modal}>
      <View style={styles.inputContainer}>
        <Form
          onSubmit={addCard}
          initialState={initialCard}
          onCancel={onCancel}
        />
      </View>
    </Modal>
  );
};

export default CreateCard;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    margin: 50,
  },
});
