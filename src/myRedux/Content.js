import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import { connect } from 'react-redux'
class Content extends Component {
    // static contextTypes = {
    //     themeColor: PropTypes.string,
    // }

    constructor() {
        super();
        this.state = {
            themeColor: ''
        }
    }

    // componentWillMount() {
    //     this.context.store.subscribe(() => {this._updateThemeColor()})
    //     this._updateThemeColor()
    // }
    //
    // _updateThemeColor() {
    //     this.setState({
    //         themeColor: this.context.store.getStates().themeColor,
    //     })
    // }


    render () {
        return (
            <div>
                <p style={{color: this.props.themeColor}}>React.js 小书内容</p>
                <ThemeSwitch />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

const ConnectContent = connect(mapStateToProps)(Content)

// export default Content
export default ConnectContent
