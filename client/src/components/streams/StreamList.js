import React from "react";
import {connect} from 'react-redux';
import {fetchStreamList} from '../../actions'

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreamList();
    }

    render() {
        <div>StreamList</div>
    }
}

export default connect(null, {fetchStreamList})(StreamList);