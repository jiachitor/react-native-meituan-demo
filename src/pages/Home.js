//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NavigationBar from '@app/components/NavigationBar'

// create a component
class Home extends Component {
    componentDidMount() {
        Services.get('https://cnodejs.org/api/v1/topics', {}).then((data) => {
            console.log(data)
        })
    }
    rightOnPress = (info) => {
        ToastManager.showToast('qwe')
        MenuManager.showMenu(info.rightView)
    }
    onPress = () => {
        /* 这里有2种方式触发action*/

        /* 方法1 */
        // const {dispatch} = this.props
        // dispatch(addQury())

        /* 方法2 */
        const {onAddQuery} = this.props
        onAddQuery()

        RouteHelper.navigate('Mine')
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'Home'}
                    leftView={null}
                    rightViewOnPress={this.rightOnPress}
                />
                <Text
                    style={{ fontSize: FontSize(17) }}
                    onPress={this.onPress}>
                    {this.props.query}</Text>
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
export default Home;
