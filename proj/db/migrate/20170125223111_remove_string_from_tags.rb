class RemoveStringFromTags < ActiveRecord::Migration[5.0]
  def change
    remove_column :tags, :string, :string
  end
end
