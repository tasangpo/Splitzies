import React from 'react';
import { connect } from 'react-redux';
import { fetchGroup } from '../../actions/group_actions';
import { fetchUsers } from '../../actions/user_actions';
import GroupMember from './group_member';


const mSTP = state => ({
    groups: state.entities.groups,
    users: state.entities.users
});

const mDTP = dispatch => ({
    fetchGroup: id => dispatch(fetchGroup(id)),
    fetchUsers: () => dispatch(fetchUsers())
});

class RightGroupComponent extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchGroup(this.props.match.params.groupId);
        this.props.fetchUsers();
    }

    render() {
        const { groups, users } = this.props
        if (!Object.keys(groups).length || Object.keys(users).length < 2) {
            return null;
        }
        const group = groups[this.props.match.params.groupId]
        return (<div>
            <h1 className='right-h1-group'>GROUP BALANCES</h1>
            {group.memberIds.map(id => {
                const member = users[id];
                return <GroupMember key={id} member={member} group={group}/>
            })}
        </div>)
    };
};


export default connect(mSTP, mDTP)(RightGroupComponent);