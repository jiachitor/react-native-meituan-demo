import {connect} from 'react-redux'
import AppWebView from '@app/pages/Detail/DetailScene'
import {changeArticle} from '@app/radux/actions'

// connect 指定了该组件会与store的哪些值进行连接。
export default connect()(AppWebView)
