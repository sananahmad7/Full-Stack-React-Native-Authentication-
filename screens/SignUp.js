import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.SU}>SignUp</Text>
      <View style={{ marginHorizontal: 24 }}>
        <Text style={{ fontSize: 16, color: "#8e93a1" }}>Name</Text>
        <TextInput style={styles.SUI} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  SU: { fontSize: 30, textAlign: "center" },
  SUI: {
    borderBottonWidth: 0.5,
    height: 48,
    borderBottomColor: "#8e93a1",
    marginBottom: 30,
  },
});

export default SignUp;
