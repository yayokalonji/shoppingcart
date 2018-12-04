import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  AsyncStorage
} from "react-native";
import HttpUser from "./../../services/User/http-user";
import i18n from './../../i18n'

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ''
    };
  }

  login = async () => {
    const params = {
      email: this.state.email,
      password: this.state.password
    }
    console.log('params:' + params);
    const data = await HttpUser.login(params);
    if (data) {
      console.log(data);
      await AsyncStorage.setItem('data', JSON.stringify(data));
      this.props.navigation.navigate('App');
    }
  };

  handleEmail = text => {
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          placeholder={i18n.t("EMAIL")}
          placeholderTextColor="#fff"
          onChangeText={this.handleEmail}
        />
        <TextInput
          style={styles.inputBox}
          placeholder={i18n.t("PASSWORD")}
          placeholderTextColor="#fff"
          onChangeText={this.handlePassword}
          secureTextEntry={true}
        />
        <Button style={styles.buttonText} title="Login" onPress={this.login} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B0BEC5"
  },
  inputBox: {
    width: 300,
    backgroundColor: "#607D8B",
    borderRadius: 25,
    paddingHorizontal: 16,
    color: "#fff",
    marginVertical: 16,
    paddingVertical: 16
  },
  button: {
    width: 300,
    backgroundColor: "#1C313A",
    borderRadius: 15,
    marginVertical: 10,
    paddingVertical: 16,
    textAlign: "center",
    color: "#fff"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center"
  }
});

export default Auth;