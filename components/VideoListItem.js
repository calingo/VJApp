import React from 'react';
import { View, Text, Image } from 'react-native';

const VideoListItem = ({ video }) => {

    const { imageStyle } = styles;
    const {
        title, 
        channelTitle,
        thumbnails: { medium: {url} }
    } = video.snippet


    return (
        <View>
            <Image 
                style={imageStyle}
                source={{ uri: url }}
            />
            <Text>{video.snippet.title}</Text>
            <Text>{video.snippet.channelTitle}</Text>
        </View>
    );
};

const styles = {
    imageStyle: {
        alignSelf: 'stretch',
        height: 230
    }
}

export default VideoListItem;