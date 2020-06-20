class CreateBottles < ActiveRecord::Migration[6.0]
  def change
    create_table :bottles do |t|
      t.string :name
      t.float :price
      t.string :brand
      t.string :description
      t.string :img_url

      t.timestamps
    end
  end
end
