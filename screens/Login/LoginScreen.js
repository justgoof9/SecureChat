import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 justify-center bg-gray-100 px-6">
      <Text className="text-4xl font-bold text-blue-600 text-center mb-10">Login</Text>

      {/* Input email */}
      <TextInput
        className="bg-white px-4 py-3 mb-4 rounded-lg shadow-md border border-gray-300"
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Input password */}
      <TextInput
        className="bg-white px-4 py-3 mb-6 rounded-lg shadow-md border border-gray-300"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Login Button */}
      <TouchableOpacity
        className="bg-blue-600 py-3 rounded-lg shadow-md"
        onPress={() => console.log("Login Pressed")}
      >
        <Text className="text-center text-white text-lg font-semibold">Login</Text>
      </TouchableOpacity>

      {/* Links to Sign Up page */}
      <View className="mt-8">
        <Text className="text-center text-gray-600">
          Don’t have an account?{" "}
          <Text
            className="text-blue-600 font-bold"
            onPress={() => navigation.navigate("SignUp")} // Navigate to SignUp
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginScreen;
