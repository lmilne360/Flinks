class Link < ApplicationRecord
	validates_presence_of :title, :url
	belongs_to :user
	has_many :comments
	has_many :linktags
	has_many :tags, through: :linktags
	acts_as_votable

	def all_tags=(names)
		self.tags = names.split(",").map do |name|
			Tag.where(name: name.strip).first_or_create!
		end
	end

	def all_tags
		self.tags.map{|t| t.name}.join(" ")
	end

	def owner
		self.user.username
	end

	def self.search(term)
		links = Tag.find_by_name(term).try(:links)
  		if links.nil? || links.empty?
    		self.order('id DESC')
    	else
    		links
  		end
	end
end
