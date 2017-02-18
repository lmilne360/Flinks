class LinkSerializer < ActiveModel::Serializer
  attributes :id, :title, :url, :user_id, :owner, :created_at, :all_tags
end
