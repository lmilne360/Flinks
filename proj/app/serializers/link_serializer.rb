class LinkSerializer < ActiveModel::Serializer
  attributes :id, :title, :url, :user_id, :owner
end
