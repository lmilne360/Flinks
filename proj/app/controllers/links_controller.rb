class LinksController < ApplicationController
	before_action :set_link, only: [:show, :edit, :update, :destroy]

	def index
		@links = Link.search(params[:term])
	end

	def show	
	end

	def new
		@link = Link.new
	end

	def create
			link = Link.new(link_params)
			link.user = current_user
		if link.save
			redirect_to links_path
		else
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
			redirect_to links_path, alert: "You're not authorized to edit this lin!"
		end
	end

	def destroy
		@link.destroy
		redirect_to links_path
	end

	private

		def link_params
			params.require(:link).permit(:user_id, :title, :url, :all_tags, :term)
		end

		def set_link
			@link = Link.find(params[:id])
		end
end
