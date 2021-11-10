//imoprting file
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import AppHeader from "../header.js";
import Random from "../components/random.js";

//exporting the pallete class in pallete.js
export default class Pallete extends React.Component {
  //constructor for setting the state of the pallete
  constructor() {
    super();
    this.state = {
      counter: 0,
      buttonColor1: "#D3D3D3",
      buttonColor2: "#D4D3D3",
      buttonColor3: "#D4D3D3",
      buttonColor4: "#D4D3D3",
    };
  }
  /*a function which take 6 letters from 0 to f (hexadecimal format) and conctatinates 
     with #(color variable) to form the main color */
  changeColor1 = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({ buttonColor1: color });
    this.setState({ RGB: color });
  };
  changeColor2 = () => {
    var letters2 = "0123456789ABCDEF";
    var color2 = "#";
    for (var i2 = 0; i2 < 6; i2++) {
      color2 += letters2[Math.floor(Math.random() * 16)];
    }
    this.setState({ buttonColor2: color2 });
    this.setState({ RGB2: color2 });
  };
  changeColor3 = () => {
    var letters3 = "0123456789ABCDEF";
    var color3 = "#";
    for (var i2 = 0; i2 < 6; i2++) {
      color3 += letters3[Math.floor(Math.random() * 16)];
    }
    this.setState({ buttonColor3: color3 });
  };
  changeColor4 = () => {
    var letters4 = "0123456789ABCDEF";
    var color4 = "#";
    for (var i2 = 0; i2 < 6; i2++) {
      color4 += letters4[Math.floor(Math.random() * 16)];
    }
    this.setState({ buttonColor4: color4 });
  };
  changeColorAll = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    var color2 = "#";
    var color3 = "#";
    var color4 = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      color2 += letters[Math.floor(Math.random() * 16)];
      color3 += letters[Math.floor(Math.random() * 16)];
      color4 += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({
      buttonColor1: color,
      buttonColor2: color2,
      buttonColor3: color3,
      buttonColor4: color4,
    });
  };
  Reset = () => {
    this.setState({
      buttonColor1: "#D3D3D3",
      buttonColor2: "#D4D3D3",
      buttonColor3: "#D4D3D3",
      buttonColor4: "#D4D3D3",
    });
  };
  //the app gets rendered here
  render() {
    //retruning ...
    return (
      <View>
        {/*the Raco. banner of the app */}
        <AppHeader />

        <View>
          <Text
            style={{
              fontSize: 30,
              alignSelf: "center",
              marginTop: 10,
              marginBottom: 10,
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          >
            Here is your color! 🤗
          </Text>
        </View>

        <View
          style={{
            flex: 0.5,
            flexDirection: "row",
            //  alignContent: "center",

            justifyContent: "space-around",
          }}
        >
          {/*this button changes color of the blank text object */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontxt} onPress={this.changeColor1}>
              color1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontxt} onPress={this.changeColor2}>
              color2
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontxt} onPress={this.changeColor3}>
              color3
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontxt} onPress={this.changeColor4}>
              color4
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View>
            {/*the button that changes color of the blank text object get implemented here*/}
            <Text
              style={[
                styles.OutputColor2,
                { backgroundColor: this.state.buttonColor1 },
              ]}
            ></Text>
            {/*the color data is shown here in the form of a hex code*/}
            <Text
              style={{
                fontFamily: "Roboto ",
                fontSize: 25,
                marginTop: 20,
              }}
            >
              {this.state.buttonColor1}
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.OutputColor2,
                { backgroundColor: this.state.buttonColor2 },
              ]}
            ></Text>
            <Text
              style={{
                fontFamily: "Roboto ",
                fontSize: 25,
                marginTop: 20,
              }}
            >
              {this.state.buttonColor2}
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.OutputColor2,
                { backgroundColor: this.state.buttonColor3 },
              ]}
            ></Text>

            <Text
              style={{
                fontFamily: "Roboto ",
                fontSize: 25,
                marginTop: 20,
              }}
            >
              {this.state.buttonColor3}
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.OutputColor2,
                { backgroundColor: this.state.buttonColor4 },
              ]}
            ></Text>

            <Text
              style={{
                fontFamily: "Roboto ",
                fontSize: 25,
                marginTop: 20,
              }}
            >
              {this.state.buttonColor4}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontxt} onPress={this.changeColorAll}>
            randomize
            </Text>
          </TouchableOpacity>
        {/*this button takes us back to the home page */}
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttontxt}
            onPress={() => {
              this.props.navigation.navigate("Generate");
            }}
          >
            Back
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontxt} onPress={this.Reset}>
            Reset
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
}
/*styling*/
const styles = StyleSheet.create({
  OutputColor: {
    elevation: 10,
    //  backgroundColor: 'lightgrey',
    alignSelf: "center",
    justifyContent: "",
    marginTop: 50,
    width: 100,
    height: 100,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
  },
  button: {
    elevation: 10,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    width: 200,
    height: 50,
    borderRadius: 5,
    alignSelf: "center",
    // borderWidth: 1,
    // borderColor: "gray",
    /* alignSelf: "center",
    marginLeft: 100,*/

    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
  },
  buttontxt: {
    fontSize: 27,
  },
  OutputColor2: {
    elevation: 10,
    //  backgroundColor: 'lightgrey',
    alignSelf: "center",
    justifyContent: "space-evenly",
    marginTop: 100,
    width: 100,
    height: 100,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
  },
});
