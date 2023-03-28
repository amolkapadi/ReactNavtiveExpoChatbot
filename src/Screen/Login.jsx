import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../Common/CustomTextInput";
import CommonButton from "../Common/CommonButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../Common/Loader";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const login = () => {
    setModalVisible(true);
    if (email == "") {
      setModalVisible(false);
      setBadEmail(true);
    } else {
      setBadEmail(false);
      if (password == "") {
        setModalVisible(false);
      } else {
        setTimeout(() => {
          setBadPassword(false);
          getData();
        }, 1000);
      }
    }
  };

  const getData = async () => {
    const mEmail = await AsyncStorage.getItem("EMAIL");
    const mPass = await AsyncStorage.getItem("PASSWORD");
    // console.log(mEmail, mPass);
    if (email === mEmail && mPass === password) {
      setModalVisible(false);
      navigation.navigate("CreateMeeting");
    } else {
      setModalVisible(false);
      // alert("cascasc");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Image
        source={require("../Images/OS.png")}
        style={{ width: 180, height: 80, alignSelf: "center", marginTop: 100 }}
      />
      <Text
        style={{
          marginTop: 50,
          alignSelf: "center",
          fontSize: 24,
          fontWeight: "800",
          color: "#000",
        }}
      >
        Login
      </Text>
      <View
        style={{
          marginTop: 10,
          backgroundColor: "#00365F",
          width: 350,
          height: 380,
          marginLeft: 23,
          borderRadius: 30,
        }}
      >
        <CustomTextInput
          placeholder={"Enter Username"}
          icon={require("../Images/email.png")}
          value={email}
          onChangeText={(txt) => {
            setEmail(txt);
          }}
        />
        {badEmail === true && (
          <Text style={{ marginTop: 20, alignSelf: "center", color: "red" }}>
            Please Enter Email Id
          </Text>
        )}
        <CustomTextInput
          type={"password"}
          placeholder={"Enter Password"}
          icon={require("../Images/padlock.png")}
          value={password}
          onChangeText={(txt) => {
            setPassword(txt);
          }}
        />
        {badPassword === true && (
          <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
            Please Enter Password
          </Text>
        )}
        <CommonButton
          title={"Login"}
          bgColor={"#7A99AC"}
          textColor={"white"}
          onPress={() => {
            navigation.navigate("CreateMeeting");
            
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "800",
            alignSelf: "center",
            marginTop: 5,
            color: "white",
            textDecorationLine: "underline",
          }}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          Create New Account ?
        </Text>
      </View>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default Login;
