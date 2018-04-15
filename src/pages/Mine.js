//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NavigationBar from '@app/components/NavigationBar'

class Mine extends Component {
    backOnPress = () => {
        RouteHelper.goBack()
    }
    rightOnPress = (info) => {
        ToastManager.showToast('qwe')
        MenuManager.showMenu(info.rightView)
    }
    onPress = () => {
        RouteHelper.navigate('Home')
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'我的home'}
                    rightViewOnPress={this.rightOnPress}
                    backOnPress={this.backOnPress}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

//make this component available to the app
export default Mine;
