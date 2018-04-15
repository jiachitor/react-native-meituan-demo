//import liraries
import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    InteractionManager
} from 'react-native';
import { NavigationBar, Theme } from 'teaset';
import '../config/Global'
// create a component
class CusNavigationBar extends PureComponent {
    static propTypes = {
        ...NavigationBar.propTypes
    }

    static defaultProps = {
        ...NavigationBar.defaultProps
    }
    _rightViewOnPress = (p) => {
        this.props.rightViewOnPress && this.props.rightViewOnPress({ event: p, rightView: this.rightView })
    }
    _backOnPress = (p) => {
        this.props.backOnPress && this.props.backOnPress({ event: p, backButton: this.leftView })
    }
    render() {
        const { style } = this.props
        return (
            <NavigationBar
                background={
                    <ImageBackground
                        style={styles.navBackImage}
                        source={Images.nav_bar}
                    />
                }
                rightView={
                    <TouchableOpacity
                        ref={v => this.rightView = v}
                        style={styles.navRight}
                        onPress={this._rightViewOnPress}
                    >
                        <Image
                            source={Images.nav_right_button}
                        />
                    </TouchableOpacity>
                }
                leftView={
                    <NavigationBar.BackButton
                        ref={v => this.leftView = v}
                        onPress={this._backOnPress}
                    />
                }
                {...this.props}
                style={[styles.navBarStyle, style]}
            />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    navBarStyle: {
        position: 'relative', backgroundColor: '#3c884c'
    },
    navBackImage: {
        flex: 1,
    },
    navRight: {
        width: 30,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

//make this component available to the app
export default CusNavigationBar;
