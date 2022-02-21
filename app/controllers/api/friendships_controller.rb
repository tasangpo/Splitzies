class Api::FriendshipsController < ApplicationController

    def create
        @friend = User.find_by(email: params[:friendship][:email])
        if @friend
            @friendship = Friendship.new(user_id: current_user.id, friend_id: @friend.id)
            if @friendship.save
                render :show
            else
                render json: ['You are already friends with this user'], status: 422
            end
        else
            render json: ['Invalid user – please try again.'], status: 422
        end
    end

    def destroy
        @friendship = Friendship.find_by(user_id: current_user.id, friend_id: params[:id]);
        if @friendship
            @friendship.destroy
            render :show
        else
            render json: ['Friendship not found']
        end
    end

    private

    def friendship_params
        params.require(:friendship).permit(:email)
    end
    
end