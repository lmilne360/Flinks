class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :link
  validates_presence_of :body, :user_id

  def commenter
  	self.user.username
  end
end
