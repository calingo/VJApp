import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = () => (
        <Header
            centerComponent={{ text: 'Ray', style: { color: '#fff' } }}
            outerContainerStyles={{ backgroundColor: "transparent"}}
        />
    )

export default AppHeader;