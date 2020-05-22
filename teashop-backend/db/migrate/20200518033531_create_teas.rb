class CreateTeas < ActiveRecord::Migration[6.0]
  def change
    create_table :teas do |t|
      t.string :name
      t.float :price
      t.string :description
      t.string :img_url
      t.string :brand

      t.timestamps
    end
  end
end
