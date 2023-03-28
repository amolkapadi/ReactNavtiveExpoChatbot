import { View, Text, Image, TextInput } from "react-native";
import CustomTextInput from "../Common/CustomTextInput";
import CommonButton from "../Common/CommonButton";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
let isValid = false;
const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [badName, setBadName] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [mobile, setMobile] = useState("");
  const [badMobile, setBadMobile] = useState(false);
  const [buttonDisabled, setButtonDisable] = useState(false);

  const signupp = () => {
    setButtonDisable(true);

    if (name == "") {
      setBadName(true);
      setButtonDisable(false);
    } else {
      setBadName(false);
      if (email == "") {
        setBadEmail(true);
        setButtonDisable(false);
      } else {
        setBadEmail(false);
        if (mobile == "") {
          setBadMobile(true);
          setButtonDisable(false);
        } else if (mobile.length < 10) {
          setBadMobile(true);
        } else {
          setBadMobile(false);
          if (password == "") {
            setBadPassword(true);
            setButtonDisable(false);
          } else {
            setBadPassword(false);
            if (confirmPassword == "") {
              setBadConfirmPassword(true);
              setButtonDisable(false);
            } else {
              setBadConfirmPassword(false);
              if (password !== confirmPassword) {
                setBadConfirmPassword(true);
                setButtonDisable(false);
              } else {
                setBadConfirmPassword(false);
                saveData();
              }
            }
          }
        }
      }
    }
  };
  const saveData = async () => {
    await AsyncStorage.setItem("NAME", name);
    await AsyncStorage.setItem("EMAIL", email);
    await AsyncStorage.setItem("MOBILE", mobile);
    await AsyncStorage.setItem("PASSWORD", password);
    navigation.goBack();
    console.log(":yes");
  };
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Image
          source={require("../Images/OS.png")}
          style={{
            width: 180,
            height: 80,
            alignSelf: "center",
            marginTop: 100,
          }}
        />
        <Text
          style={{
            marginTop: 90,
            alignSelf: "center",
            fontSize: 24,
            fontWeight: "800",
            color: "#000",
          }}
        >
          Create New Account
        </Text>

        <CustomTextInput
          placeholder={"Enter Name"}
          value={name}
          onChangeText={(txt) => {
            setName(txt);
          }}
          icon={require("../Images/user.png")}
        />
        {badName === true && (
          <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
            Please Enter Name
          </Text>
        )}

        <CustomTextInput
          placeholder={"Enter Email Id"}
          value={email}
          onChangeText={(txt) => {
            setEmail(txt);
          }}
          icon={require("../Images/email.png")}
        />
        {badEmail === true && (
          <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
            Please Enter Email Id
          </Text>
        )}

        <CustomTextInput
          placeholder={"Enter Mobile"}
          value={mobile}
          // keyboardType={"number-pad"}
          keyboardType={"number-pad"}
          onChangeText={(txt) => {
            setMobile(txt);
          }}
          icon={require("../Images/mobile.png")}
        />
        {badMobile === true && (
          <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
            Please Enter Valid Mobile Number
          </Text>
        )}

        <CustomTextInput
          type={"password"}
          value={password}
          onChangeText={(txt) => {
            setPassword(txt);
          }}
          // type={"scscs"}
          placeholder={"Enter Password"}
          icon={require("../Images/padlock.png")}
        />
        {badPassword === true && (
          <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
            Please Enter Password
          </Text>
        )}

        <CustomTextInput
          type={"password"}
          value={confirmPassword}
          onChangeText={(txt) => {
            setConfirmPassword(txt);
          }}
          // type={"scscs"}
          placeholder={"Enter Confirm Password"}
          icon={require("../Images/padlock.png")}
        />
        {badConfirmPassword === true && (
          <Text style={{ marginTop: 10, alignSelf: "center", color: "red" }}>
            Password doesnot match please re-enter
          </Text>
        )}

        <CommonButton
          title={"Sign Up"}
          bgColor={buttonDisabled ? "#8e8e8e" : "#7A99AC"}
          textColor={"white"}
          onPress={() => {
            signupp();
          }}
          disabled={buttonDisabled}
        />
        <Text
          style={{
            fontSize: 17,
            fontWeight: "800",
            alignSelf: "center",
            marginTop: 5,
            color: "black",
            textDecorationLine: "underline",
            marginBottom: 50,
          }}
          onPress={() => {
            navigation.goBack("Signup");
          }}
        >
          Already have an Account ?
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;
