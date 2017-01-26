class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :link

  def commenter
  	self.user.username
  end
end
