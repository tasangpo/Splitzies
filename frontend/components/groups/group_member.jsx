import React from 'react';
import { connect } from 'react-redux';

const mSTP = state => ({
    expenses: state.entities.expenses
});

const mDTP = dispatch => ({
})

class GroupMember extends React.Component {
    constructor(props){
        super(props)
    }



    render() {
        const { member, group, expenses } = this.props;
        const firstName = member.name.split(' ')[0];
        const groupExpenses = Object.values(expenses).filter(expense => group.id === expense.group_id );
        let memberBalance = 0;
        for (let expense of groupExpenses) {
            if (expense.payer_id === member.id) {
                memberBalance += expense.amount * (expense.splitterIds.length - 1)/(expense.splitterIds.length)
            } else if (expense.splitterIds.includes(member.id)) {
                memberBalance -= expense.amount / expense.splitterIds.length;
            }
        }
        memberBalance = parseFloat(memberBalance).toFixed(2);
        return (
            <div className='member-balance'>
                <h1>{firstName}</h1>
                {memberBalance >= 0 ? <span id="green-span">gets back ${memberBalance}</span> : <span id="red-span">owes ${parseFloat(memberBalance * -1).toFixed(2)} </span>}
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(GroupMember);