import React, { Component } from 'react';
import { WebView } from 'react-native';
import YouTube from 'react-native-youtube';

class VideoPlayer extends Component {
    
    render() {
        return (
            <WebView 
                allowsInlineMediaPlayback
                // style={styles.Videocontainer}
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
