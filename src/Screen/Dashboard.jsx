import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import MyChat from "./MyChat";
import { useNavigation } from "@react-navigation/native";

function Dashboard(props) {
  const [isMeeting, setIsMeeting] = useState(false);

  const handleMeeting = () => {
    setIsMeeting(true);
  };

  const navigation = useNavigation();

  return (
    <>
      <View style={{ flex: 1, marginTop: 50 }}>
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

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View style={{ marginTop: 10, marginTop: 80 }}>
            <Text
              style={{
                flexDirection: "row",
                fontSize: 16,
                padding: 5,
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
          <View style={{ marginTop: 10, marginTop: 80 }}>
            <Text
              style={{
                flexDirection: "row",
                fontSize: 16,
                fontWeight: "bold",
                marginLeft: 10,
                width: 100,
                padding: 5,
              }}
            
            >
              My Activites
            </Text>
          </View>
          <View style={{ marginTop: 10, marginTop: 80 }}>
            <Text
              style={{
                flexDirection: "row",
                fontSize: 16,
                fontWeight: "bold",
                marginLeft: 10,
                padding: 5,
                width: 100,
              }}
            >
              Notification
            </Text>
          </View>
        </View>
        <TouchableOpacity>
        <View style={{ marginTop: 50 }}>
   
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginLeft: 10,
              padding: 10,
              backgroundColor: "#00365F",
              color: "white",
              width: "95%",
            }}
            onPress={() => {
              navigation.navigate("CreateMeeting");
            }}
          >
            Create Meeting
          </Text>

        </View>
        </TouchableOpacity>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginLeft: 10,
              padding: 10,
              backgroundColor: "#00365F",
              color: "white",
              width: "95%",
            }}
          >
            Create Task
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginLeft: 10,
              padding: 10,
              backgroundColor: "#00365F",
              color: "white",
              width: "95%",
            }}
          >
            Create Timesheet
          </Text>
        </View>

        <View style={{ alignItems:"center", marginTop: 740,left:170, position: 'absolute' }}>
          <TouchableOpacity>
            <Icon
              reverse
              name="home"
              type="ionicon"
              color="#00365F"
              onPress={() => {
                navigation.navigate("MyChat");
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ borderTopWidth: 1, borderColor: "#00365F" ,    marginTop:320 }} />
{/* 
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <TouchableOpacity>
            <Icon name="home" type="ionicons" size={45} color="#00365F" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMeeting}>
            <Icon name="chat" type="ionicons" size={45} color="#00365F" />
          </TouchableOpacity>
        </View> */}

      </View>
    </>
  );
}

export default Dashboard;
