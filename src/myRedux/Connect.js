import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes  = {
            store: PropTypes.object,
        }

        constructor() {
            super();
            this.state = { allProps: {} }
        }

        componentWillMount() {
            const { store } = this.context;
            this._updateProps()
            store.subscribe(() => this._updateProps())
        }

        _updateProps() {
            const { store } = this.context;
            let stateProps = mapStateToProps(store.getState())
            this.setState({
                allProps: {
                    ...stateProps,
                }
            })
        }

        render() {
            const { store } = this.context;
            // let stateProps = mapStateToProps(store.getState())
            return(
                <WrappedComponent {...this.state.allProps}></WrappedComponent>
            )
        }

    }
    return Connect;
}
