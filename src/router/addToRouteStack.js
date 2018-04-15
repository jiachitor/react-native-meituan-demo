/**
 * User: puti.
 * Time: 2018/2/10 下午3:49.
 * GitHub:https://github.com/puti94
 * Email:1059592160@qq.com
 */


import React, { PureComponent } from 'react'
import RouteHelper from './RouteHelper'
import hoistNonReactStatics from 'hoist-non-react-statics'
import {
    InteractionManager
} from 'react-native';
export const addToRouteStack = (OldComponent) => {
    class NewComponent extends PureComponent {
        static displayName = `addToRouteStack(${OldComponent.displayName ||
            OldComponent.name})`;

        componentDidMount() {
            console.log('componentDidMount')
            requestAnimationFrame(() => {
                console.log('componentDidMount--requestAnimationFrame')
                RouteHelper.addStack(this.props.navigation);
            })
            InteractionManager.runAfterInteractions(() => {
                console.log('componentDidMount--runAfterInteractions')
            })
        }

        componentWillUnmount() {
            console.log('componentWillUnmount')
            requestAnimationFrame(() => {
                console.log('componentWillUnmount--requestAnimationFrame')
                RouteHelper.remove(this.props.navigation);
            })
            InteractionManager.runAfterInteractions(() => {
                console.log('componentWillUnmount--runAfterInteractions')
            })
        }

        render() {
            return <OldComponent
                ref={v => this.oldComponent = v}
                {...this.props}
            // {...this.props.navigation.state.params}
            />
        }
    }

    return hoistNonReactStatics(NewComponent, OldComponent)
};

export function configRoute(routeConfig) {
    for (let name in routeConfig) {
        let Component = routeConfig[name].screen;
        routeConfig[name].screen = addToRouteStack(Component)
    }
    return routeConfig
}