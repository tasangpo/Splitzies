class Api::ExpenseSplitsController < ApplicationController

    # def create
    #     @expense_split = ExpenseSplit.new(expense_id: params[:payload][:expense_id], user_id: params[:payload][:user_id])
    #     if @expense_split.save
    #         @expense = Expense.find(params[:payload][:expense_id])
    #         render :show
    #     else
    #         render json: @expense_split.errors.full_messages, status: 422
    #     end

    # end

    def destroy
        @expense_split = ExpenseSplit.find_by(expense_id: params[:payload][:expense_id], user_id: params[:payload][:user_id])
        if @expense_split
            @expense_split.destroy
            render :show
        else
            render json: ['This user is not a part of this expense']
        end
        
    end


    def create
        @expense_split = ExpenseSplit.find_by(expense_id: params[:payload][:expense_id], user_id: params[:payload][:user_id])
        @expense = Expense.find(params[:payload][:expense_id])
        if @expense_split
            @expense_split.destroy
            render :show
        else
            @expense_split = ExpenseSplit.new(expense_id: params[:payload][:expense_id], user_id: params[:payload][:user_id])
            if @expense_split.save
                render :show
            else
                render json: @expense_split.errors.full_messages, status: 422
            end
        end 
    end


    private

    def expense_split_params
        params.require(:expense_split).permit(:expense_id, :user_id, :payer_id, :description, :amount, :date, :split_option)
    end

end
