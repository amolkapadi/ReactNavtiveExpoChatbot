import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import React from "react";
import ChatBot from "react-native-chatbot-expo";

const steps = [
  {
    id: "1",
    message: `Hello Welcome to One-Solutions!!!`,
    trigger: "2",
  },
  {
    id: "2",
    message: "How can I help you ? please choose one",
    trigger: "create-meeting",
  },
  // {
  //   id: "3",
  //   user: true,
  //   trigger:"create-meeting",
  // },
  {
    id: "create-meeting",
    options: [
      {
        value: "request",
        label: "Create Meeting request",
        trigger: "5",
      },
      { value: "task", label: "Create Task", trigger: "5" },
    ],
  },
  {
    id: "5",
    message: "Do you want to create meeting for a Project?",
    trigger: "project-meeting",
  },
  {
    id: "project-meeting",
    options: [
      { value: "yes", label: "Yes", trigger: "7" },
      { value: "no", label: "No", trigger: "update-yes" },
    ],
  },
  {
    id: "7",
    message: "Thats great!!, Choose the Project ?",
    trigger: "selectMeeting",
  },
  {
    id: "selectMeeting",
    options: [
      {
        value: "The Great Effect",
        label: "1. The Great Effect ",
        trigger: "update-yes",
      },
      { value: "Avocado", label: "2. Avocado", trigger: "update-yes" },
      {
        value: "Avengers",
        label: "3. Avengers",
        trigger: "update-yes",
      },
    ],
  },
  {
    id: "update-yes",
    message: "Selected Project {previousValue}",
    trigger: "6",
  },
  {
    id: "6",
    message: "Do you want to select project team members to join the meeting ?",
    trigger: "update-meeting",
  },
  {
    id: "update-meeting",
    options: [
      { value: "yes", label: "Yes", trigger: "selectMembers" },
      { value: "no", label: "No", trigger: "update-yes" },
    ],
  },
  { id: "selectMembers", user: true, trigger: "9" },
  { id: "9", message: "{previousValue}", trigger: "select-member" },
  {
    id: "select-member",
    message:"All the Information looks Great!!! Do you want to confirm Create Meeting?",
    trigger: "update-select-member",
  },
  {
    id: "update-select-member",
    options: [
      { value: "yes", label: "Yes", trigger: "Congratulations" },
      { value: "no", label: "No", trigger: "update-yes" },
    ],
  },
  {
    id: "Congratulations",
    message:"Congratulations your meeting is created successfully",
    end:true,
  },
];

const onPressLearnMore = () => {
  console.log("onPressLearnMore");
};
export default function App() {
  return (
    <View style={{ marginTop: 80 }}>
      <ChatBot
        recognitionEnable={true}
        submitButtonContent='hello'
        inputStyle={{ width: "70%" }}
        renderActions={() => (
          <IconButton
            icon="microphone"
            size={28}
            // onPress={() => {
            //   Voice.start("en-US");
            // }}
            // onLongPress={() => {
            //   Voice.stop();
            // }}
          />
        )}
        // submitButtonContent={<View style={{display:"flex", flexDirection:"row"}}>
        //   <Button
        //    onPress={onPressLearnMore}
        //   title="L M"
        //   color="#841584"
        //   accessibilityLabel="Learn more about this purple button"
        // />
        //  <Button
        //   onPress={onPressLearnMore}
        //   title="chatbot"
        //   color="#841584"
        //   accessibilityLabel="Learn more about this purple button"
        // />
        // </View>}
        steps={steps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    width: "80%",
    fontSize: 18,
  },
});
