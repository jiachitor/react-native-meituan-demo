import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar, FlatList} from 'react-native'

import {Heading2, Heading3, Paragraph} from '@app/components/Text'
import NavigationItem from '@app/components/NavigationItem'
import SpacingView from '@app/components/SpacingView'
import GroupPurchaseCell from '@app/components/GroupPurchaseCell'

import api from '@app/services/api'

import HomeMenuView from './HomeMenuView'
import HomeGridView from './HomeGridView'


type Props = {
    navigation: any,
}

type State = {
    discounts: Array<Object>,
    dataList: Array<Object>,
    refreshing: boolean,
}


class HomeScene extends PureComponent<Props, State> {

    // 定义 头部
    static navigationOptions = ({navigation}: any) => ({
        headerTitle: (
            <TouchableOpacity style={styles.searchBar}>
                <Image source={require('@app/assets/images/home/search_icon.png')} style={styles.searchIcon} />
                <Paragraph>一点点</Paragraph>
            </TouchableOpacity>
        ),
        headerRight: (
            <NavigationItem
                icon={require('@app/assets/images/mine/icon_navigation_item_message_white.png')}
                onPress={() => {

                }}
            />
        ),
        headerLeft: (
            <NavigationItem
                title='福州'
                titleStyle={{color: 'white'}}
                onPress={() => {

                }}
            />
        ),
        headerStyle: {backgroundColor: Color.primary},
    })

    constructor(props: Props) {
        super(props)

        this.state = {
            discounts: [],
            dataList: [],
            refreshing: false,
        }
    }

    componentDidMount() {
        this.requestData()
    }

    // 请求数据
    requestData = () => {
        this.setState({refreshing: true})

        // 貌似这两个API都不能使用，所以先不用了，用模拟数据
        // this.requestDiscount()
        // this.requestRecommend()

        // 使用模拟数据
        this.simulationData2()
        this.simulationData1()
    }

    // 模拟数据1
    simulationData1 () {
        let json = require('@app/services/data1.json')

        let dataList = json.data.map(
            (info) => {
                return {
                    id: info.id,
                    imageUrl: info.squareimgurl,
                    title: info.mname,
                    subtitle: `[${info.range}]${info.title}`,
                    price: info.price
                }
            }
        )

        this.setState({
            dataList: dataList,
            refreshing: false,
        })
    }

    // 模拟数据2
    simulationData2 () {
        let json = require('@app/services/data2.json')

        this.setState({discounts: json.data})
    }

    // 请求推荐数据
    requestRecommend = async () => {
        try {
            let response = await fetch(api.recommend, {
                method: 'GET',
                headers: {
                    //'Accept': 'application/json',
                    //表单
                    //'Content-Type': 'application/x-www-form-urlencoded',
                    'User-Agent': 'Mozilla/5.0'  //坑啊，花了三小时,提示服务端，我是网页端(骗他) //https://zhidao.baidu.com/question/1767408752449075980.html
                },
                //body: formData
            })
            let json = await response.json()

            let dataList = json.data.map(
                (info) => {
                    return {
                        id: info.id,
                        imageUrl: info.squareimgurl,
                        title: info.mname,
                        subtitle: `[${info.range}]${info.title}`,
                        price: info.price
                    }
                }
            )

            this.setState({
                dataList: dataList,
                refreshing: false,
            })
        } catch (error) {
            this.setState({refreshing: false})
        }
    }

    // 请求折扣数据
    requestDiscount = async () => {
        try {
            let response = await fetch(api.discount)
            let json = await response.json()
            this.setState({discounts: json.data})
        } catch (error) {
            alert(error)
        }
    }

    renderCell = (info: Object) => {
        return (
            <GroupPurchaseCell
                info={info.item}
                onPress={this.onCellSelected}
            />
        )
    }

    // 跳转到产品详情
    onCellSelected = (info: Object) => {
        StatusBar.setBarStyle('default', false)
        this.props.navigation.navigate('DetailScreen', {info: info})
    }

    keyExtractor = (item: Object, index: number) => {
        return item.id
    }

    renderHeader = () => {
        return (
            <View>
                <HomeMenuView menuInfos={api.menuInfo} onMenuSelected={this.onMenuSelected} />
                <SpacingView />
                <HomeGridView infos={this.state.discounts} onGridSelected={(this.onGridSelected)} />
                <SpacingView />
                <View style={styles.recommendHeader}>
                    <Heading3>猜你喜欢</Heading3>
                </View>
            </View>
        )
    }

    onGridSelected = (index: number) => {
        let discount = this.state.discounts[index]

        if (discount.type == 1) {
            StatusBar.setBarStyle('default', false)

            let location = discount.tplurl.indexOf('http')
            let url = discount.tplurl.slice(location)
            this.props.navigation.navigate('Web', {url: url})
        }
    }

    onMenuSelected = (index: number) => {
        alert(index)
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    // data属性目前只支持普通数组。
                    data={this.state.dataList}

                    // 根据行数据data渲染每一行的组件。
                    renderItem={this.renderCell}

                    // 此函数用于为给定的item生成一个不重复的key
                    keyExtractor={this.keyExtractor}

                    // 如果设置了此选项，则会在列表头部添加一个标准的RefreshControl控件，以便实现“下拉刷新”的功能。同时你需要正确设置refreshing属性。
                    onRefresh={this.requestData}

                    // 在等待加载新数据时将此属性设为true，列表就会显示出一个正在加载的符号。
                    refreshing={this.state.refreshing}

                    // 头部组件
                    ListHeaderComponent={this.renderHeader}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.paper
    },
    recommendHeader: {
        height: 35,
        justifyContent: 'center',
        borderWidth: SCREEN.onePixel,
        borderColor: Color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    searchBar: {
        width: SCREEN.width * 0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    }
})


export default HomeScene
