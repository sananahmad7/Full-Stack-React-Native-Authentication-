import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async () => {
    if (email == " " || name == " " || password == " ") {
      alert("All fields are required");
    }

    await axios.post("http://localhost:8001/api/signup", {
      name,
      email,
      password,
    });
    alert("Sign Up Successful");
  };

  return (
    <KeyboardAwareScrollView contentCotainerStyle={styles.container}>
      <View style={{ marginVertical: 100 }}>
        <View style={styles.ImgContainer}>
          <Image source={require("../assets/logo.png")} style={styles.img} />
        </View>
        <Text style={styles.SU}>SignUp</Text>
        <View style={{ marginHorizontal: 24 }}>
          <Text style={{ fontSize: 16, color: "#8e93a1" }}>Name</Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.SUI}
            autoCapitalize="words"
            autoCorrect={false}
          />
        </View>

        <View style={{ marginHorizontal: 24 }}>
          <Text style={{ fontSize: 16, color: "#8e93a1" }}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.SUI}
            autoCompleteType="email"
            keyboardType="email-address"
          />
        </View>

        <View style={{ marginHorizontal: 24 }}>
          <Text style={{ fontSize: 16, color: "#8e93a1" }}>Password</Text>
          <TextInput
            secureTextEntry={true}
            autoCompleteType="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.SUI}
          />
        </View>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit}>
          <Text style={styles.TextStyle}>Submit</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", fontSize: 12 }}>
          Already Joined? Sign In
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  SU: { fontSize: 30, textAlign: "center", marginTop: 10 },
  SUI: {
    borderBottomWidth: 0.5,
    height: 48,
    borderBottomColor: "#8e93a1",
    marginBottom: 30,
  },
  buttonStyle: {
    backgroundColor: "darkmagenta",
    height: 50,
    borderRadius: 15,
    marginHorizontal: 15,
    justifyContent: "center",
    marginBottom: 20,
  },
  TextStyle: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
  },
  ImgContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 100,
    width: 100,
  },
});

export default SignUp;
