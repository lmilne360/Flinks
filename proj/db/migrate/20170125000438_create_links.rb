class CreateLinks < ActiveRecord::Migration[5.0]
  def change
    create_table :links do |t|
      t.references :user
      t.string :title
      t.timestamps
    end
  end
end
