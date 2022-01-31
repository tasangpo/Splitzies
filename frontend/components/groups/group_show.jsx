import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchGroups, deleteGroup } from "../../actions/group_actions";
import { fetchExpenses } from "../../actions/expense_actions";
import { openModal } from "../../actions/modal_actions";
import ExpenseShow from "../expenses/expense_show";


const mSTP = state => ({
    groups: state.entities.groups,
    users: state.entities.users,
    currentUserId: state.session.id,
    expenses: state.entities.expenses
})

const mDTP = dispatch => ({
    fetchGroups: () => dispatch(fetchGroups),
    openModal: (modal,id) => dispatch(openModal(modal,id)),
    deleteGroup: groupId => dispatch(deleteGroup(groupId)),
    fetchExpenses: () => dispatch(fetchExpenses())
})


class GroupShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchGroups();
        this.props.fetchExpenses();
    }

    render() {
        const { groups, users, expenses } = this.props;
        const group = groups[this.props.match.params.groupId]
        if (!group || Object.keys(users).length < 2) {
            return null
        }
        const groupExpenses = Object.values(expenses).filter(expense => expense.group_id === group.id);
        return (
            <div>
                <section className="grp-hd-show">
                    <h1>&#128101; {group.name}</h1>
                    <div className="grp-show-btns">
                        <button id="grp-show-btn1" onClick={() => this.props.openModal('addGroupExpense', group.id)}>Add group expense</button>
                        <button id="grp-show-btn2" onClick={() => this.props.deleteGroup(group.id).then(this.props.history.push("/"))}>Delete Group</button>
                    </div>
                </section>
                <section className="grp-show-members">
                    {group.memberIds.map(id => {
                        const member = users[id]
                        return (
                            <NavLink key={id} to={`/friends/${id}`}><div>{member.name}</div></NavLink>
                        )
                    })}
                </section>
                <section>
                    {groupExpenses.map(expense => {
                        return <ExpenseShow key={expense.id} expense={expense}/> 
                    })}
                </section>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(GroupShow);