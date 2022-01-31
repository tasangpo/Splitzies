import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../actions/user_actions";
import { createGroup, createGroupMember, removeGroupErrors } from "../../actions/group_actions"

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    errors: state.errors.group
})

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    createGroup: group => dispatch(createGroup(group)),
    createGroupMember: payload => dispatch(createGroupMember(payload)),
    removeGroupErrors: () => dispatch(removeGroupErrors())
})


class AddGroupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            group_type: 'Home',
            creator_id: this.props.currentUser.id,
            members: [this.props.currentUser.id]
        };
            this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        this.props.fetchUsers();
        this.props.removeGroupErrors();

    };

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    };

    updateMembers() {
        const members = this.state.members;
        return e => {
            let memberId = parseInt(e.currentTarget.value);
            if (members.includes(memberId)) {
                let idx = members.indexOf(memberId);
                members.splice(idx, 1);
            } else {
                members.push(memberId);
            }
            this.setState({ members: members })
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        const groupPayload = { name: this.state.name, group_type: this.state.group_type, creator_id: this.state.creator_id };
        this.props.createGroup(groupPayload).then(group => {
            for (const memberId of this.state.members) {
                this.props.createGroupMember({ group_id: group.id, user_id: memberId})
            };
        }).then(() => {
            if (!this.props.errors.length) {
                this.props.history.push("/")
            }
        })
        // this.props.history.push("/")
    };

    renderErrors() {
        const { errors } = this.props;
        return (
            <div>
                {errors ? <ul>
                    {errors.map((err, i) => <li className="err-frd-add" key={i}>{err}</li>)}
                </ul> : ""}
            </div>
        )
    }

    reveal() {
        document.getElementById('hidden-input').style.height = "auto";
    }
    
    render() {
        const { currentUser, users } = this.props;
        if (Object.keys(users).length < 2) return null;
        return (
            <div className="add-group-form-container">
                <div className="add-group-img">
                    <Link to="/" style={{'textDecoration': 'none'}}>&#128232;</Link>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="start-new-group">
                        {this.renderErrors()}  

                        <h1>START A NEW GROUP</h1>
                        <div className="group-name-label">My group shall be called... </div>
                        <input className="group-name" type="text" onChange={this.update('name')} onInput={() => setTimeout(() => this.reveal(), 100)}/>
                        <div id='hidden-input' style={{'height': '0', 'overflow': 'hidden'}}>
                            <h1>GROUP MEMBERS</h1>
                            <br />
                            <span className="group-member-name">&#127744; {currentUser.name}({currentUser.email})</span>

                            {currentUser.friendIds.map(id =>
                                <div key={id}>
                                    <input type="checkbox" value={id} onChange={this.updateMembers()} /> {users[id].name}
                                </div>
                            )}

                            <br />
                            <br />

                            <h1>GROUP TYPE</h1>
                            <br />
                            <select className="group-type" onChange={this.update('group_type')}>
                                <option value="Home">Home</option>
                                <option value="Trip">Trip</option>
                                <option value="Couple">Couple</option>
                                <option value="Other">Other</option>
                            </select>

                            <br />
                            <br />

                            <button className="group-save">Save</button>
                            <br />
                        </div>

                    </div>
                </form>
            </div>
        )
    };
};

export default connect(mSTP, mDTP)(AddGroupForm);