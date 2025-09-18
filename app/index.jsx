import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/image/basketball-icon.png";
import { Link } from "expo-router";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={[styles.title, { color: "blue" }]}>Court Management</Text>
      <Text style={{ marginTop: 30, marginBottom: 30 }}>
        Booking Your Journey
      </Text>

      <Link href="/about" style={styles.link}>
        About Page
      </Link>
      <Link href="/contract" style={styles.link}>
        Contract
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
  img: {
    marginVertical: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
