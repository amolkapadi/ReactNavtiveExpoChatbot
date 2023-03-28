import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  icon,
  type,
  keyboardType,
}) => {
  return (
    <View
      style={{
        width: "85%",
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "white",
      }}
    >
      <Image source={icon} style={{ width: 30, height: 30 }} />
      <TextInput
        value={value}
        keyboardType={keyboardType ? keyboardType : 'default'}
        onChangeText={(txt) => {
          onChangeText(txt);
        }}
        placeholder={placeholder}
        secureTextEntry={type ? true : false}
        style={{ marginLeft: 10 }}
        keyboardType={type ? type : "default"}
        style={{ fontSize: 18, marginLeft: 20 }}
      />
    </View>
  );
};

export default CustomTextInput;
