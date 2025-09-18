import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import { Link, useFocusEffect } from "expo-router";
import { useRouter } from "expo-router";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/user/userApi";

const Contract = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchUsers());
    }, [dispatch])
  );
  const handleEdit = (userId) => {
    router.push(`/user-edit?id=${userId}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.name]} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={[styles.cell, styles.email]} numberOfLines={1}>
        {item.email}
      </Text>
      <Text style={[styles.cell, styles.phone]} numberOfLines={1}>
        {item.phoneNumber}
      </Text>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => handleEdit(item.id)}
      >
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Contract</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          <View style={styles.tableHeader}>
            <Text style={[styles.cell, styles.name]}>Name</Text>
            <Text style={[styles.cell, styles.email]}>Email</Text>
            <Text style={[styles.cell, styles.phone]}>Phone</Text>
            <Text style={[styles.cell, styles.edit]}>Action</Text>
          </View>

          <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            style={styles.table}
          />
        </View>
      </ScrollView>

      <Link href="/" style={styles.link}>
        Back to Home
      </Link>
    </View>
  );
};

export default Contract;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  table: {
    flexGrow: 0,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
  },
  cell: {
    fontSize: 14,
    paddingHorizontal: 5,
  },
  name: {
    width: 120,
  },
  email: {
    width: 200,
  },
  phone: {
    width: 120,
  },
  edit: {
    width: 80,
    fontWeight: "bold",
    textAlign: "center",
  },
  editButton: {
    width: 80,
    backgroundColor: "#007bff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    textAlign: "center",
    color: "#007bff",
    textDecorationLine: "underline",
  },
});
