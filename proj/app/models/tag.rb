class Tag < ApplicationRecord
	has_many :linktags
	has_many :links, through: :linktags

end
