class Api::GroupsController < ApplicationController

    def index
        @groups = Group.all
        render :index
    end

    def show
        @group = Group.find(params[:id])
        render :show
    end

    def create
        @group = Group.new(group_params)
        if @group.save
            render :show
        else
            render json: @group.errors.full_messages, status: 422
        end
    end

    def update
        @group = Group.find(params[:id])
        if @group
            @group.update(group_params)
            render :show
        else
            render json :@group.errors.full_messages, status: 422
        end
    end

    def destroy
        @group = Group.find(params[:id])
        if @group
            @group.destroy
            render :show
        else
            render json: ['Group not found']
        end
    end

    private

    def group_params
        params.require(:group).permit(:name, :group_type, :creator_id)
    end

end