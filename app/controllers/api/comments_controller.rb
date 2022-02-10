class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            @expense = Expense.find(params[:comment][:expense_id])
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @expense = Expense.find(@comment.expense_id)
        @comment.destroy
        render :show
        
        # after comment is destroyed, the expense it belonged to is returned in ordered to be recieved on the front end and udpate accordingly in the expense reducer
    end

    private

    def comment_params
        params.require(:comment).permit(:author_id, :expense_id, :body)
    end
end