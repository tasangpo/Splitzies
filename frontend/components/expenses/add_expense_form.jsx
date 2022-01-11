import React from "react";
import { connect } from "react-redux";

const mSTP = state => ({

});

const mDTP = dispatch => ({

});


class AddExpenseForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(AddExpenseForm);