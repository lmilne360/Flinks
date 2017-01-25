class Link < ApplicationRecord
	validates_presence_of :title, :url
	belongs_to :user
	has_many :comments

	
end
