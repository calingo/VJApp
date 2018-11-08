import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import WatchButton from './WatchButton';

const VideoListItem = ({ video }) => {
    const { 
        cardStyle,
        imageStyle,
        contentStyle,
        titleStyle,
        channelTitleStyle
    } = styles;

    const {
        thumbnails: { high: { url } }
    } = video.snippet;

    return (
        <View >
            <Card title={null} containerStyle={cardStyle} >
                <Image 
                    style={imageStyle}
                    source={{ uri: url }}
                />
                <View style={contentStyle}>
                    <Text style={titleStyle}>
                        {video.snippet.title}    
                    </Text>
                    <Text style={channelTitleStyle}>
                        {video.snippet.channelTitle}
                    </Text>
                    <WatchButton 
                        videoId={video.id.videoId}  
                        onWatchPressListItem={video.onWatchPressList}
                    />
                </View>
            </Card>
        </View>
    );
};

const styles = {

    cardStyle: {
        padding: 0,
        margin: 0,
        backgroundColor: 'black',
        borderWidth: 0
        
    },

    imageStyle: {
        alignSelf: 'stretch',
        height: 400
    },
    
    contentStyle: {
        flex: 1,
        backgroundColor: 'black'
    },

    titleStyle: {
        color: 'white'
    },

    channelTitleStyle: {
        color: 'white'
    }

};

export default VideoListItem;
