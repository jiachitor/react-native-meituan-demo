import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

import {Heading3} from '@app/components/Text'

type Props = {
    icon: any,
    title: string,
    onPress?: Function,
}

class OrderMenuItem extends PureComponent<Props> {
    render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={this.props.onPress}>
                <Image source={this.props.icon} resizeMode='contain' style={styles.icon} />
                <Heading3>
                    {this.props.title}
                </Heading3>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN.width / 4,
        height: SCREEN.width / 5,
    },
    icon: {
        width: 30,
        height: 30,
        margin: 5,
    }
})


export default OrderMenuItem
