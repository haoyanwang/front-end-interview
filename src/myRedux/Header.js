import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Header extends Component {
    static contextTypes = {
        themeColor: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            themeColor: ''
        }

    }

    // componentWillMount() {
    //     this._updateThemeColor();
    //     this.context.store.subscribe(this._updateThemeColor.bind(this))
    // }
    //
    // _updateThemeColor() {
    //     const {store} = this.context
    //     const state = store.getStates()
    //     this.setState({themeColor: state.themeColor})
    // }

    render() {
        return (
            <h1 style={{color: this.props.themeColor}}>React.js 小书</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

const connectHeader = connect(mapStateToProps)(Header);

// export default Header

export default connectHeader;
