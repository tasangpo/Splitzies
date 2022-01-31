import React from "react";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

const mSTP = (state, ownProps) => {
    return {
        group: state.entities.groups[ownProps.groupId]
    }
};

const mDTP = dispatch => {
    return {
    }
};

const EachGroupItem = props => {
    if (!props.group) {
        return null
    };
    return (
        <ul className="friends-list">
            <NavLink className='frd-link' to={`/groups/${props.group.id}`}><li>{props.group.name}</li></NavLink>
        </ul>
    )
}

export default connect(mSTP, mDTP)(EachGroupItem)