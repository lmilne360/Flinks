class CommentsController < ApplicationController

	def index
		@comments = Comment.where(link_id: params[:link_id])
 		render json: @comments.to_json(methods: :commenter)
	end

	def create
			@comment = Comment.new(comment_params)
			@comment.user_id = current_user.id
		respond_to do |format|
			if @comment.save
				format.html
				format.json{ render json: @comment.to_json(methods: :commenter) }
			else
				redirect_to link_path(@comment.link), alert: @comment.errors.full_messages.to_sentence
			end
		end
	end


	def destroy
		comment = Comment.find(params[:id])
		if comment.user == current_user || comment.link.user == current_user
			comment.destroy
		  redirect_to comment.link
		else
		  redirect_to comment.link, alert: "You are not authorized to delete this comment"
		end
	end


	private

		def comment_params
			params.require(:comment).permit(:body, :link_id, :id)
		end
end
