
import React, {PureComponent} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import HomeGridItem from './HomeGridItem'

type Props = {
    infos: Array<Object>,
    onGridSelected: Function,
}


class HomeGridView extends PureComponent<Props> {

    static defaultProps = {
        infos: []
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.infos.map((info, index) => (
                    <HomeGridItem
                        info={info}
                        key={index}
                        onPress={() => this.props.onGridSelected(index)}
                    />
                ))}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderTopWidth: SCREEN.onePixel,
        borderLeftWidth: SCREEN.onePixel,
        borderColor: Color.border
    },
})


export default HomeGridView
