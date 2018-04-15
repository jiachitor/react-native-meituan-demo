import { Menu, Theme } from 'teaset';
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
const initialOption = {
    align: 'end',
    popoverStyle: { backgroundColor: '#FFFFFF', },
    showArrow: true,
}

const initialItems = [
    {
        title: 'Search',
        onPress: () => alert('Search')
    },
    {
        title: '123',
        onPress: () => alert('Edit')
    },
    {
        title: '123',
        onPress: () => alert('Remove')
    },
]

Theme.set({ menuItemTitleColor: '#53812F', menuItemSeparatorColor: '#D8D8D8' })

class MenuManager {
    static showMenu(view, items = initialItems, option = initialOption, offsetY = 0) {
        view.measure((x, y, width, height, pageX, pageY) => {
            Menu.show({ x: pageX, y: pageY + offsetY, width, height }, items, option);
        });
    }
}


export default MenuManager
