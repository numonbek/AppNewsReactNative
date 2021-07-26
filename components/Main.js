import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { gStyle } from "../styles/style";
import { Ionicons } from "@expo/vector-icons";
import Form from "./Form";

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google!!!",
      full: "Google is cool!",
      key: "1",
      img: "https://www.seonews.ru/upload/iblock/29d/29d2fc3146a9a067f5cc40b8936709c6.jpg",
    },
    {
      name: "Apple",
      anons: "Apple!!!",
      full: "Apple is cool!",
      key: "2",
      img: "https://bigbankir.ru/wp-content/uploads/2021/01/apple-ozhidaet-vyruchku-na-103-mlrd-dollarov.jpg",
    },
    {
      name: "Facebook",
      anons: "Facebook!!!",
      full: "Facebook is cool!",
      key: "3",
      img: "https://lara-pronin.com/wp-content/uploads/2020/01/Kak-prilozheniya-Facebook-pomogayut-malomu-biznesu.jpg",
    },
  ]);

  const [modalWindow, setModalWindow] = useState(false);
  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString();
      return [article, ...list];
    });
    setModalWindow(false);
  };
  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <View>
          <Ionicons
            name="close-circle"
            size={34}
            color="red"
            style={styles.iconClose}
            onPress={() => setModalWindow(false)}
          />
          <Text style={styles.title}>Форма добавления статей</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <Ionicons
        name="add-circle"
        size={34}
        color="green"
        style={styles.iconAdd}
        onPress={() => setModalWindow(true)}
      />
      <Text style={[gStyle.title, styles.header]}>Main Page</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Image
              style={styles.image}
              source={{
                uri: item.img,
              }}
            />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontFamily: "mt-bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
  anons: {
    fontFamily: "mt-light",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    color: "#474747",
  },
  image: {
    width: "100%",
    height: 200,
  },
  iconAdd: {
    textAlign: "center",
    marginBottom: 15,
  },
  iconClose: {
    textAlign: "center",
  },
});
