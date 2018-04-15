/*
 react-navigation 该库包含三类组件：
（1）StackNavigator：用来跳转页面和传递参数
（2）TabNavigator：类似底部导航栏，用来在同一屏幕下切换不同界面
（3）DrawerNavigator：侧滑菜单导航栏，用于轻松设置带抽屉导航的屏幕
*/

import React, {PureComponent} from 'react'
import {
    StackNavigator,
    TabBarBottom,
    TabNavigator
} from 'react-navigation';

import { tabOptions } from './navigationConfig';
import { configRoute } from './addToRouteStack'

import TabBarItem from '@app/components/TabBarItem'

import HomeScreen from '@app/containers/HomePage';
import NearbyScreen from '@app/containers/NearbyPage';
import OrderScreen from '@app/containers/OrderPage';
import MineScreen from '@app/containers/MinePage';

import DetailScreen from '@app/containers/DetailPage';

// 实现底部导航栏
const Tab = TabNavigator(
    {
        // Home: {
        //     screen: HomeScreen,
        //     navigationOptions: tabOptions({
        //         title: '首页',
        //         // normalIcon: Images.tab_home_normal,
        //         // selectedIcon: Images.tab_home_selected
        //     })
        // },
        Home: {
            screen: HomeScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '团购',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('@app/assets/images/tabbar/tabbar_homepage.png')}
                        selectedImage={require('@app/assets/images/tabbar/tabbar_homepage_selected.png')}
                    />
                )
            }),
        },
        Nearby: {
            screen: NearbyScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '附近',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('@app/assets/images/tabbar/tabbar_merchant.png')}
                        selectedImage={require('@app/assets/images/tabbar/tabbar_merchant_selected.png')}
                    />
                )
            }),
        },
        Order: {
            screen: OrderScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '订单',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('@app/assets/images/tabbar/tabbar_order.png')}
                        selectedImage={require('@app/assets/images/tabbar/tabbar_order_selected.png')}
                    />
                )
            }),
        },
        Mine: {
            screen: MineScreen,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('@app/assets/images/tabbar/tabbar_mine.png')}
                        selectedImage={require('@app/assets/images/tabbar/tabbar_mine_selected.png')}
                    />
                )
            }),
        },
    }, {
        tabBarOptions: {
            showIcon: true,
            indicatorStyle: { height: 0 },
            activeTintColor: "#0085da",
            style: {
                backgroundColor: "#fff"
            },
            activeTintColor: '#589017',
            tabStyle: {
                margin: 2,
            },
        },
        lazy: true, //懒加载
        swipeEnabled: false,
        animationEnabled: false, //关闭安卓底栏动画
        tabBarPosition: "bottom",
        tabBarComponent: TabBarBottom,
        initialRouteName: 'Home'
    }
)


// 配置路由，实现界面间跳转
const navigation = StackNavigator({
    ...configRoute({
        Tab: { screen: Tab },
        // Mine: { screen: MineScreen },
        DetailScreen: {screen: DetailScreen},
    })
}, {
    initialRouteName: 'Tab',
    // 这里配置子页面的 static navigationOptions 项
    navigationOptions: {
        // header: null
        headerBackTitle: null,
        headerTintColor: '#333333',
        showIcon: true,
    }
});

export default navigation;
