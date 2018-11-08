import React from 'react';
import { Button } from 'react-native-elements';

const WatchButton = ({ videoId }) => (
    
    <Button
        title="Watch"
        icon={{ name: 'play-arrow' }}
        backgroundColor='transparent'
        onPress={() => videoId.onWatchPressListItem({ videoId })}
            // WebBrowser.openBrowserAsync(
            //     `https://m.youtube.com/watch?v=${videoId}`
            // );
    />
);

export default WatchButton;
