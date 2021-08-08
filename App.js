import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      text:'',
      displayText:''
    }
  }
  render(){
  return (
    <View style={styles.container}>
        <Header
  leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent={{ text: 'Monkey Chunky', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>

  <TextInput
        style={styles.input}
       onChangeText={(text)=>{this.setState({text:text})}}
        value={this.state.text}
      />
      <View>
        <TouchableOpacity onPress={()=>{
          this.setState({displayText:this.state.text});
        }} style={styles.buttonStyle}>
          <Text>Play</Text>
        </TouchableOpacity>
        <Text>{this.state.displayText}</Text>
        </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b8b8b8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle:{
    backgroundColor: 'yellow',
    alignSelf:'center',
      
  },
  input: {
    height: 40,
    width:'80%',
    marginTop: 200,
    borderWidth: 4,
    padding: 10,
    alignSelf:'center',
    textAlign:'center'
  }
});
