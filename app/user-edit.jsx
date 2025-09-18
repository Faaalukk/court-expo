import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchUser, editUser } from "./features/user/userApi";

const UserEdit = () => {
  const { id } = useLocalSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state) => state.user.currentUser);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchUser(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
      });
    }
  }, [user]);

  const handleConfirm = () => {
    if (!form.name || !form.email || !form.phoneNumber) {
      Alert.alert("Validation", "กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    dispatch(editUser({ id, ...form })).then((res) => {
      if (res.success) {
        Alert.alert("สำเร็จ", "แก้ไขข้อมูลเรียบร้อยแล้ว");
        router.push("/contract");
      } else {
        Alert.alert("ผิดพลาด", res.message || "ไม่สามารถอัปเดตได้");
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit User</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={form.name}
        onChangeText={(text) => setForm({ ...form, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={form.phoneNumber}
        onChangeText={(text) => setForm({ ...form, phoneNumber: text })}
      />

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  confirmText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
