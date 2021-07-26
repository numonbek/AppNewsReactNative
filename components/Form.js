import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
  Image,
  TextInput,
} from "react-native";
import { gStyle } from "../styles/style";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import { values } from "lodash";

export default function Form({ addArticle }) {
  return (
    <View>
      <Formik
        initialValues={{ name: "", anons: "", full: "", img: "" }}
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              value={props.values.name}
              placeholder="Введите название"
              onChangeText={props.handleChange("name")}
            ></TextInput>
            <TextInput
              style={styles.input}
              value={props.values.anons}
              multiline
              placeholder="Введите анонс"
              onChangeText={props.handleChange("anons")}
            ></TextInput>
            <TextInput
              style={styles.input}
              value={props.values.full}
              multiline
              placeholder="Введите статью"
              onChangeText={props.handleChange("full")}
            ></TextInput>
            <TextInput
              style={styles.input}
              value={props.values.img}
              placeholder="Укажите фото"
              onChangeText={props.handleChange("img")}
            ></TextInput>
            <Button
              style={styles.button}
              title="Добавить"
              onPress={props.handleSubmit}
            ></Button>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 15,
    padding: 15,
    borderColor: "silver",
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
  },
});
