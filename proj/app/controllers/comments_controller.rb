class CommentsController < ApplicationController

	def create
		comment = Comment.new(comment_params)
		comment.user_id = current_user.id
		comment.save
		redirect_to link_path(comment.link)

	end


	private

		def comment_params
			params.require(:comment).permit(:body, :link_id)
		end
end
