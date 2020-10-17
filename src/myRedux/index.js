import React, {Component} from 'react'
import PropTypes, {func} from 'prop-types'
import Header from './Header'
import Content from './Content'
import './index.css'
import {createStore} from 'redux'

const themeReducer = (state, action) => {
    if (!state) {
        return {
            themeColor: 'red'
        }
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state, themeColor: action.themeColor}
        default:
            return state
    }
}

export const store = createStore(themeReducer)


class Index extends Component {
    static childContextTypes = {
        store: PropTypes.object,
    }

    getChildContext() {
        return {
            store: store
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}

export default Index;
