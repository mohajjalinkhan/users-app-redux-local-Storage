import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/slice/userSlice";
import { useNavigation, useRoute } from "@react-navigation/native";

const UpdateUser = () => {
  //accecss user old data using route
  const route = useRoute();
  //using dispatch for addUser method
  const dispatch = useDispatch();
  // for navigation
  const navigation = useNavigation();
  //input fields
  const [name, setName] = React.useState(route.params.item.name);
  const [email, setEmail] = React.useState(route.params.item.email);
  const [phone, setPhone] = React.useState(route.params.item.phone);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-800">
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={"#9AA6B2"}
        keyboardType="default"
        className="p-2 bg-gray-700 text-gray-100 rounded-lg"
        style={styles.inputStyle}
        maxLength={70}
      />
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor={"#9AA6B2"}
        keyboardType="email-address"
        className="p-2 bg-gray-700 text-gray-100 rounded-lg mt-4"
        style={styles.inputStyle}
        maxLength={50}
      />
      <TextInput
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={setPhone}
        placeholderTextColor={"#9AA6B2"}
        keyboardType="phone-pad"
        className="p-2 bg-gray-700 text-gray-100 rounded-lg mt-4"
        style={styles.inputStyle}
        maxLength={10}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(
            updateUser({
              index: route.params.index,
              data: { name, email, phone },
            })
          );
          navigation.navigate("allUsers");
        }}
        className="bg-gray-700 w-50 h-14 p-2 mt-8 rounded-2xl items-center justify-center"
      >
        <Text className="text-gray-200 font-semibold text-lg self-center m-2">
          Update User
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UpdateUser;
const styles = StyleSheet.create({
  inputStyle: {
    width: "90%",
    height: 50,
  },
});
