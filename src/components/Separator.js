import React, {PureComponent} from 'react'
import {View, Text, StyleSheet} from 'react-native'

type Props = {
    style?: any,
}

class Separator extends PureComponent<Props> {
    render() {
        return (
            <View style={[styles.line, this.props.style]} />
        )
    }
}


const styles = StyleSheet.create({
    line: {
        width: SCREEN.width,
        height: SCREEN.onePixel,
        backgroundColor: Color.border,
    },
})


export default Separator
