import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Headline, TextInput } from "react-native-paper";

export default function App() {
  const [email, setText] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Headline style={styles.headline}>Le fort mulère</Headline>
      </View>
      <View style={styles.paddingform}>
        <View style={styles.paddinginput}>
          <TextInput
            label="I mais le"
            value={email}
            onChangeText={(email) => setText(email)}
            autoComplete={false}
          />
          <StatusBar style="auto" />
        </View>
        <View style={styles.paddinginput}>
          <TextInput
            label="passe word"
            value={password}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            autoComplete={false}
          />

          <StatusBar style="auto" />
        </View>
        <View style={styles.paddinginput}>
          <Button
            icon="door-open"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            L'haut Guine
          </Button>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#7950F2",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },

  headline: {
    color: "#ffffff",
  },

  paddingform: {
    paddingHorizontal: 24,
  },
  paddinginput: {
    paddingTop: 10,
  },
});
