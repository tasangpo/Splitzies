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
            render json: ['Not Valid']
        end
    end

    def destroy
        @expense = Expense.find(params[:id])
        @bill.destroy
    end


    private 
    
    def expense_params
        params.require(:expense).permit(:payer_id, :description, :amount, :date, :split_option)
    end

end