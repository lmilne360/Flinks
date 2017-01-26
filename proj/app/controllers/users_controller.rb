class UsersController < ApplicationController

	def show
		@user = User.find(params[:id])
		@links = Link.where(user: @user)
	end
end
