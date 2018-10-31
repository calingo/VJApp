import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, WebView } from 'react-native';
import { Constants, Video } from 'expo';
import { Header, Button } from 'react-native-elements';


export default class App extends Component {

  state = {
    term: '2skgKgg4hgg'
  };

  render() {

    const {
      containerSearch,
      containerTextStyle,
      buttonStyle
    } = styles;

    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: 'Ray', style: { color: '#fff' } }}
          outerContainerStyles={{ backgroundColor: "transparent"}}
        />
        <View style={styles.containerSearch}>
          <TextInput 
            style={styles.containerTextStyle}
            onChangeText={term => this.setState({ term })}
            value={this.state.term}  
            placeholder={"youtube search"}
            placeholderTextColor={"white"}
          />
          <Button 
            buttonStyle={styles.buttonStyle}
            title="Play"
            onPress={() => console.log(this.state.term) }
          />
        </View>
        <WebView 
            allowsInlineMediaPlayback={true}
            style={styles.Videocontainer}
            javaScriptEnabled={true}
            thirdPartyCookiesEnabled={true}
            originWhitelist={['*']}
            source={{
              uri: 'https://www.youtube.com/embed/' + this.state.term + '?rel=0&autoplay=0&showinfo=0&controls=0&playsinline=1',
            }}
        />
        <Video
                 source={{ uri:'https://www.youtube.com/embed/' + this.state.term }}
                 resizeMode="cover"
                 style={{ width: 600, height: 300 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black' ,
  },
  containerSearch: {
    flexDirection: 'row',
    margin: 18
  },
  containerTextStyle: {
    flex: 1,
    color: 'white',
    borderColor: 'gray',
  },
  buttonStyle: {
    height: 44,
    marginBottom: 8
  },
});