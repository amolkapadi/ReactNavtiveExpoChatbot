import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import MyChat from "./MyChat";
import { useNavigation } from "@react-navigation/native";

function Creatmeeting(props) {
  const [isMeeting, setIsMeeting] = useState(false);

  const handleMeeting = () => {
    setIsMeeting(true);
  };

  const navigation = useNavigation();

  return (
    <>
      <View style={{ flex: 1, marginTop: 80 }}>
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
              flexDirection:"row",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: 10,
            }}
          >
            <Icon name="search" />
            <Icon name="person" type="ionicons" />
          </View>
        </View>

       
        <View style={{  marginTop:20,justifyContent: 'center',
        alignItems: 'center',}}>
            <Text style={{fontSize:20,}}>Create meeting</Text>

        </View>
       

        <View style={{ borderTopWidth: 1, borderColor: "#00365F",marginTop:600 }} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <TouchableOpacity>
            <Icon name="mic" type="ionicons" size={45} color="#00365F" />
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => {
                navigation.navigate("MyChat");
              }}>
            <Icon name="chat" type="ionicons" size={45} color="#00365F" />
          </TouchableOpacity>
        </View>

      </View>
    </>
  );
}

export default Creatmeeting;
