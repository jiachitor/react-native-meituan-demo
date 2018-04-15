import {connect} from 'react-redux'
import AppWebView from '@app/pages/Home/HomeScene'
import {addQuery} from '@app/radux/actions'

const mapStateToProps = (state) => ({
    query: state.home.query
})

const mapDispatchToProps = (dispatch) => ({
    onAddQuery: (data) => {
        console.log(data)
        dispatch(addQuery(data))
    }
})

// connect 指定了该组件会与store的哪些值进行连接。
export default connect(mapStateToProps, mapDispatchToProps)(AppWebView)
