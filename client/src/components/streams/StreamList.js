import React from "react";
import {connect} from 'react-redux';
import {fetchStreamList} from '../../actions'

const StreamList = () => {
    return (
        <div>StreamList</div>
    )
};

export default connect(null, {fetchStreamList})(StreamList);