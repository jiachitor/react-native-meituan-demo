// 项目中的图片可以通过Images.xxx 获取
import Images from '@app/assets/index';
import { Dimensions, Platform, PixelRatio} from 'react-native';
import { scaleSize, fontSize, isMobile, checkMobile, checkPassword, isEmpty, containsChinese } from './Tool';
import AsyncStorage from '@app/utils/AsyncStorage';
import Services from '@app/utils/Services';
import Color from './Color'
import MenuManager from './MenuManager'
import ToastManager from './ToastManager';
import { Theme } from 'teaset'
import RouteHelper from '@app/router/RouteHelper';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
Theme.set({ fitIPhoneX: true });

if (!__DEV__) {
    global.console = {
        info: () => { },
        log: () => { },
        warn: () => { },
        debug: () => { },
        error: () => { }
    };
}
// 通过系统API获得屏幕宽高
let { height, width } = Dimensions.get('window');

// 系统是iOS
global.iOS = (Platform.OS === 'ios');
// 系统是安卓
global.Android = (Platform.OS === 'android');
// 获取屏幕参数
global.SCREEN = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    onePixel: 1 / PixelRatio.get(),
    statusBarHeight: (Platform.OS === 'ios' ? 20 : 0)
}
// 获取屏幕宽度
global.SCREEN_WIDTH = width;
// 获取屏幕高度
global.SCREEN_HEIGHT = height;
// 适配字体
global.FontSize = fontSize;
// 颜色
global.Color = Color;
// 屏幕适配
global.ScaleSize = scaleSize;
// 图片加载
global.Images = Images;
// 存储
global.Storage = AsyncStorage
// 存储
global.Services = Services

global.Moment = moment

global.RouteHelper = RouteHelper

global.MenuManager = MenuManager

// 消息提示
global.ToastManager = ToastManager
