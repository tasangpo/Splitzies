class Api::ExpenseSplitsController < ApplicationController

    def create
        @expense_split = ExpenseSplit.new(expense_id: params[:payload][:expense_id], user_id: params[:payload][:user_id])
        if @expense_split.save
            @expense = Expense.find(params[:payload][:expense_id])
            render :show
            # render json: ['Relationship established'], status: 200
        else
            render json: @expense_split.errors.full_messages, status: 422
        end

    end

    def destroy
    end

    private

    def expense_split_params
        params.require(:expense_split).permit(:expense_id, :user_id, :payer_id, :description, :amount, :date, :split_option)
    end

end
