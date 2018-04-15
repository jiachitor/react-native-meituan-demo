
import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import '@app/config/Global'
export const tabOptions = (params) => {
    return {
        title: params.title,
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                resizeMode="contain"
                style={{ height: ScaleSize(80), width: ScaleSize(80) }}
                source={!focused ? params.normalIcon : params.selectedIcon}
            />
        )
    }
}
