import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestData } from '../actions';

class Root extends Component {
  componentDidMount() {
    this.props.request();
  }

  render() {
    console.log(this.props.data);
    return (
      <h1>
        {this.props.data.title}
      </h1>
    )
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => ({
  request: () => dispatch(requestData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Root);
