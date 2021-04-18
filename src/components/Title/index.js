import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Title extends Component{
  // constructor(){
  //   super();
  //   this.state = {
  //     userName: 'JohnDoe',
  //   }
  // }
  state = {
    userName: 'John Doe',
  }

  componentDidMount() {
    console.log('component Title did mount');
    setTimeout(()=>{
      this.setState({userName: 'Fernando Vincent'});
    }, 5000);
  }

  componentDidUpdate() {
    console.log('component Title did update');
  }

  componentWillUnmount() {
    console.log('component Title will unmount');
  }

  render(){
    //Lifecycle
    console.log('render component Title');
    return (
      <View style={styles.container}>
      <Text style={styles.text}>{this.props.text}</Text>
      <Text>Username: {this.state.userName}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    alignItems: 'center',
    paddingVertical: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default Title;