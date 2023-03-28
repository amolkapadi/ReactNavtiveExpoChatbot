import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import MyChat from "./MyChat";
import { useNavigation } from "@react-navigation/native";

function CreateMeeting(props) {
  const [isMeeting, setIsMeeting] = useState(false);

  const handleMeeting = () => {
    setIsMeeting(true);
  };
  
  const navigation = useNavigation();

  return (
    <>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30,
            marginLeft: 10,
          }}
        >
          <Image
            source={require("../Images/OS.png")}
            style={{ width: 150, height: 70 }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: 10,
            }}
          >
            <Icon name="search" />
            <Icon name="person" type="ionicons" />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              flexDirection: "row",
              fontSize: 18,
              fontWeight: "bold",
              marginLeft: 10,
              width: 100,
              backgroundColor: "#00365F",
              color: "white",
            }}
          >
            Processes
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>My Activities</Text>
          </TouchableOpacity>
          <View style={{ borderTopWidth: 1, borderColor: "gray" }} />
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Notification</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <TextInput style={{ flex: 1 }} placeholder="Search" />
            <TouchableOpacity>
              <Text>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Create Meeting
          </Text>
        </View>

        <View style={{ alignItems: "center", marginTop: 400 }}>
          <TouchableOpacity>
            <Icon
              style={{ marginTop: 50 }}
              name="mic"
              type="ionicons"
              size={50}
              color="#00365F"
              onPress={() => {
                navigation.navigate("MyChat");
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{ borderTopWidth: 1, marginTop: -150, borderColor: "#00365F" }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <TouchableOpacity>
            <Icon name="home" type="ionicons" size={50} color="#00365F" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMeeting}>
            <Icon name="chat" type="ionicons" size={50} color="#00365F" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default CreateMeeting;
