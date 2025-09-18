import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { Link } from "expo-router";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/user/userApi";

const Contract = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contract Page</Text>
      <Link href="/" style={styles.link}>
        Home
      </Link>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Phone: {item.phone}</Text>
          </View>
        )}
        style={{ width: "100%", marginTop: 20 }}
      />
    </View>
  );
};

export default Contract;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  card: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
