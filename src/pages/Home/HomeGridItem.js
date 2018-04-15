/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */


import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {Heading2, Heading3} from '@app/components/Text'


type Props = {
    info: Object,
    onPress: Function,
}


class HomeGridItem extends PureComponent<Props> {

    render() {
        let info = this.props.info

        let title = info.maintitle
        let color = info.typeface_color
        let subtitle = info.deputytitle
        let imageUrl = info.imageurl.replace('w.h', '120.0')

        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <View>
                    <Heading2 style={{color: Color, marginBottom: 10}}>{title}</Heading2>
                    <Heading3 >{subtitle}</Heading3>
                </View>

                <Image style={styles.icon} source={{uri: imageUrl}} />
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN.width / 2 - SCREEN.onePixel,
        height: SCREEN.width / 4,
        backgroundColor: 'white',
        borderBottomWidth: SCREEN.onePixel,
        borderRightWidth: SCREEN.onePixel,
        borderColor: Color.border
    },
    icon: {
        width: SCREEN.width / 5,
        height: SCREEN.width / 5,
    }
})


export default HomeGridItem
