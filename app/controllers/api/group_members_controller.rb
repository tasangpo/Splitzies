class Api::GroupMembersController < ApplicationController

    def create
        @group_member = GroupMember.new(group_id: params[:payload][:group_id], user_id: params[:payload][:user_id] )
        if @group_member.save
            @group = Group.find(params[:payload][:group_id])
            render :show
        else
            render json: @group_member.errors.full_messages, status: 422
        end
    end

    def destroy
        @group_member = GroupMember.find_by(group_id: params[:payload][:group_id], user_id: params[:payload][:user_id])
        if @group_member
            @group_member.destroy
            @group = Group.find(params[:payload][:group_id])
            render :show
        else
            render json: ['This user is not a part of this group']
        end
    end

end