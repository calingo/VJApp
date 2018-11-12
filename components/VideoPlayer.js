import React, { Component} from 'react';
import { WebView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    fliters: {
      opacity: 0.8,
      filter: 'contrast(90%) brightness(120%) saturate(110%)'
    }
  }); 

class VideoPlayer extends Component {
    
    render() {
        return (

            <WebView 
                style={styles.fliters}
                allowsInlineMediaPlayback
                javaScriptEnabled
                thirdPartyCookiesEnabled
                originWhitelist={['*']}
                source={{
                uri: `https://www.youtube.com/embed/${this.props.selectedvideo}?rel=0&autoplay=1&showinfo=0&controls=0&playsinline=1`
                }}
            />  
                  
        ); 
    }
}

export default VideoPlayer;
