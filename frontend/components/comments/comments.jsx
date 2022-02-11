import React from 'react';
import { connect } from 'react-redux';
import { createComment, deleteComment } from '../../actions/expense_actions';


const mDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: id => dispatch(deleteComment(id))
});

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author_id: this.props.currentUser.id,
            expense_id: this.props.expense.id,
            body: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    reset() {
        this.setState({ body: '' })
        const commentArea = document.getElementById('comment-area');
        commentArea.innerText = '';
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state).then(this.reset());
    }


    render() {
        const { expense, users } = this.props;
        const comments = expense.comments;
        return (
            <div className='comments-container'>
                <h1 className='comments-header'> &#128172;&nbsp;&nbsp; NOTES AND COMMENTS</h1>
                <div className='comments-list'>
                    {comments.map(comment => {
                        return ( <div className='each-comment'> 
                            <div style={{'display': 'flex', 'justifyContent': 'space-between'}}>
                                <h1>{users[comment.author_id].name.split(' ')[0]}</h1>
                                <button className='delete-comment-btn' onClick={() => this.props.deleteComment(comment.id)}>&#10060;</button>
                            </div>
                            <span>{comment.body}</span>
                        </div>)
                    })}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div style={{'display': 'flex', 'flexDirection': 'column', 'width': '60%'}}>
                        <textarea id="comment-area" style={{'padding': '5px', 'marginBottom': '10px'}} placeholder='Add a comment' onChange={this.update('body')} value={this.state.body}></textarea>
                        <button className='post-comment-btn'>Post</button>
                    </div>
                    
                </form>
            </div>
        )
    };
}

export default connect(null, mDTP)(Comments)