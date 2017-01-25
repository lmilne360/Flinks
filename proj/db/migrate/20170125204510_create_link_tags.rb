class CreateLinkTags < ActiveRecord::Migration[5.0]
  def change
    create_table :linktags do |t|
      t.references :link, foreign_key: true
      t.references :tag, foreign_key: true

      t.timestamps
    end
  end
end
