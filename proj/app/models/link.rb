class Link < ApplicationRecord
	validates_presence_of :title, :url
	belongs_to :user
	has_many :comments
	has_many :linktags
	has_many :tags, through: :linktags

	def all_tags=(names)
		self.tags = names.split(",").map do |name|
			Tag.where(name: name.strip).first_or_create!
		end
	end

	def all_tags
		self.tags.map{|t| t.name}.join(", ")
	end

	def owner
		self.user.username
	end

	def self.search(term)
  		if term
    		Tag.find_by_name!(term).links.sort_by{|l| l.id}.reverse
  		else
    		self.order('id DESC') 
  		end
	end
end
