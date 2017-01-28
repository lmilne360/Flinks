class LinksController < ApplicationController
	before_action :set_link, only: [:show, :edit, :update, :destroy, :upvote, :downvote]

	def index
		@links = Link.search(params[:term])
	end

	def show	
	end

	def new
		@link = Link.new
	end

	def create
		@link = Link.new(link_params)
		@link.user = current_user
			
		if @link.valid?
			@link.save
			redirect_to links_path, notice: "Success!"
		else
			flash.now[:alert]= @link.errors.full_messages.to_sentence 
			render :new
		end
	end

	def edit
	end

	def update
		if current_user == @link.user
			@link.update(link_params)
			redirect_to links_path
		else
			redirect_to links_path, alert: "You are not authorized to edit this link"
		end
	end

	def destroy
		@link.destroy
		redirect_to links_path
	end

	def upvote
		@link.upvote_by current_user
  		redirect_to @link
	end

	def downvote
		@link.downvote_by current_user
  		redirect_to @link
	end

	private

		def link_params
			params.require(:link).permit(:user_id, :title, :url, :all_tags, :term)
		end

		def set_link
			@link = Link.find(params[:id])
		end
end
