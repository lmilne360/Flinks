class PostCommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :commenter
end
