import React from "react"
import { connect } from "react-redux"
import { deleteExpense } from "../../actions/expense_actions";
import { fetchUsers } from "../../actions/user_actions";

const mSTP = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users
    })
}

const mDTP = dispatch => {
    return ({
        deleteExpense: expenseId => dispatch(deleteExpense(expenseId)),
        fetchUsers: () => dispatch(fetchUsers())
    })
};

class ExpenseFriendShow extends React.Component {
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

        const totalDisplay = parseFloat(this.props.expense.amount).toFixed(2);

        const { users } = this.props
        if (Object.keys(this.props.users).length < 2) {
            return null
        }

        const payer = users[this.props.expense.payer_id]
        let name = payer.name

        let split = this.props.expense.amount / this.props.expense.splitterIds.length
        if (payer === this.props.currentUser) {
            name = 'You';
        }
        split = split.toFixed(2)
        return (

            <div onClick={() => setTimeout(() => this.reveal(id), 100)} className="exp-all-container">
                <div className="exp-item" >
                    <div className="exp-left">
                        <div id="exp-date"> <strong>Date: </strong>{`${this.props.expense.date}`}</div>
                        &nbsp;	&nbsp;
                            <span style={{ 'fontSize': '30px' }}>&#128203;</span>
                        &nbsp;	&nbsp;
                        <div style={{'textAlign':'start'}}>{`${this.props.expense.description}`}</div>
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

            <div id={id} style={{ 'height': '0', 'overflow': 'hidden', 'textAlign': 'start' }}>
                <h5 className="hidden-texts"><strong className="hidden-strong">{users[this.props.expense.payer_id].name}</strong> paid <strong className="hidden-strong">${totalDisplay}</strong> and owes <strong className="hidden-strong">${(this.props.expense.amount / this.props.expense.splitterIds.length).toFixed(2)}</strong> </h5>
                
                {this.props.expense.splitterIds.map(id => {
                    if (id === this.props.expense.payer_id) {
                        return null
                    } else {
                        return <h5 key={id} className="hidden-texts"><strong className="hidden-strong">{users[id].name}</strong> owes <strong className="hidden-strong">${(this.props.expense.amount / this.props.expense.splitterIds.length).toFixed(2)}</strong></h5>
                    }
                })}
            </div>         


            </div>
        )
    };
}



export default connect(mSTP, mDTP)(ExpenseFriendShow)