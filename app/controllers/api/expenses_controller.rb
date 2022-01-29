class Api::ExpensesController < ApplicationController 
    def index
        @expenses = Expense.all
        render :index
    end

    def show
        @expense = Expense.find(params[:id])
        render :show
    end

    def create
        @expense = Expense.new(expense_params)
        if @expense.save
            render :show
        else
            render json: @expense.errors.full_messages, status: 422
        end
    end

    def update
        @expense = Expense.find(params[:id])
        if @expense
            @expense.update(expense_params)
            render :show
        else
            render json: @expense.errors.full_messages, status: 422
        end
    end

    def destroy
        @expense = Expense.find(params[:id])
        @expense.destroy
    end


    private 
    
    def expense_params
        params.require(:expense).permit(:payer_id, :description, :amount, :date, :split_option)
    end

end