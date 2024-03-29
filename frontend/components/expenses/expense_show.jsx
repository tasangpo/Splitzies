import React from "react"
import { connect } from "react-redux";
import { deleteExpense } from "../../actions/expense_actions";
import { fetchUsers } from "../../actions/user_actions";
import { openModal } from "../../actions/modal_actions";
import Comments from "../comments/comments";

const mSTP = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users
    })
}

const mDTP = dispatch => {
    return ({
        deleteExpense: expenseId => dispatch(deleteExpense(expenseId)),
        fetchUsers: () => dispatch(fetchUsers()),
        openModal: (modal, id) => dispatch(openModal(modal, id))
    })
};

class ExpenseShow extends React.Component{
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchUsers();
    }

    reveal(id) {
        const ele = document.getElementById(id)
            if (ele.style.height === 'auto') {
                ele.style.height = 0
            } else {
                ele.style.height = 'auto'
            }
    }

    render() {
        const id = this.props.expense.id

        const totalDisplay = parseFloat(this.props.expense.amount).toFixed(2)

        const { users } = this.props
        if (Object.keys(this.props.users).length < 2) {
            return null
        }

        const payer = users[this.props.expense.payer_id]
        let name = payer.name

        let split = this.props.expense.amount / this.props.expense.splitterIds.length

        if (payer === this.props.currentUser) {
            name = 'You';
            split = this.props.expense.amount - split; // if you are payer, you are owed total minus split
        }
        split = parseFloat(split).toFixed(2);


        const date = new Date(this.props.expense.date)
        const month = date.toLocaleDateString('default', {month: 'long'})
        return (

            <div className="exp-all-container">
                <div onClick={() => setTimeout(() => this.reveal(id), 100)} className="exp-item" >
                    <div className="exp-left">
                        <div id="exp-date"> <strong>Date: </strong>{`${this.props.expense.date}`}</div>
                        &nbsp;	&nbsp;
                            {/* <span style={{ 'fontSize': '30px' }}>&#128203;</span> */}
                        {this.props.expense.group_id ? <span style={{ 'fontSize': '30px' }}>&#128101;</span> : <span style={{ 'fontSize': '30px' }}>&#128203;</span>}

                        &nbsp;	&nbsp;
                        <div style={{ 'textAlign': 'start' }}>{`${this.props.expense.description}`}</div>
                        &nbsp;	&nbsp;

                    </div>

                    <div className="exp-right">
                        <div className="who-who">
                            <div className="bo-hoo">
                                <h4 id="payer-name">{name} paid</h4>
                                <h3 id="paid-amount">{`$${totalDisplay}`}</h3>
                            </div>
                        <div className="yours">
                            <h4 id="payer-name">{name} lent</h4>
                            {payer === this.props.currentUser ?
                            <h3 id="paid-amount" style={{ 'color': '#5BC5A7' }}>{`$${split}`}</h3> :
                            <h3 id="paid-amount" style={{ 'color': '#FF652F' }}>{`$${split}`}</h3>
                                }
                            </div>

                        </div>
                        <button id="del-exp" onClick={() => this.props.deleteExpense(this.props.expense.id)}>&#10060;</button>
                    </div>

                   

                </div>


                <div id={id} className="hidden-expense-divider" style={{'height': '0', 'overflow':'hidden', 'textAlign':'start'}}>
                    <div className="top-hidden">
                        <div className="top-hidden-img">
                            {this.props.expense.group_id ? <span style={{ 'fontSize': '30px' }}>&#128101;</span> : <span style={{ 'fontSize': '70px' }}>&#128203;</span>}
                        </div>
                        <div className="top-hidden-texts">
                            <span style={{'fontSize': '13px'}}>{this.props.expense.description}</span>
                            <span style={{'fontSize': '20px', 'fontWeight': 'bold'}}>${totalDisplay}</span>
                            <span style={{'color': '#999', 'fontSize': '12px'}}>Paid by {name} on {month + ' ' + date.toDateString().split(' ')[2] + ', ' + date.toDateString().split(' ')[3]}</span>
                            <button className="edit-btn" onClick={() => this.props.openModal('editExpense', this.props.expense.id)}>Edit expense</button>
                        </div>
                    </div>
                    <div className="bottom-hidden" >
                        <div className="hidden-participants">
                            <h5 className="hidden-texts"> &#129503; &nbsp;
                                <strong className="hidden-strong">{users[this.props.expense.payer_id].name}</strong> paid <strong className="hidden-strong">${totalDisplay}</strong> and owes <strong className="hidden-strong">${(this.props.expense.amount / this.props.expense.splitterIds.length).toFixed(2)}</strong>
                            </h5>
                            {this.props.expense.splitterIds.map(id => {
                                if (id === this.props.expense.payer_id) {
                                    return null
                                } else {
                                    return <h5 key={id} className="hidden-texts">&#129503; &nbsp;<strong className="hidden-strong">{users[id].name}</strong> owes <strong className="hidden-strong">${(this.props.expense.amount / this.props.expense.splitterIds.length).toFixed(2)}</strong></h5>
                                }
                            })}
                        </div>
                        <Comments expense={this.props.expense} users={this.props.users} currentUser={this.props.currentUser}/>
                    </div>
                </div>   
            </div>            
        )
    };
}

    

export default connect(mSTP, mDTP)(ExpenseShow)