class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.integer :tea_id
      t.string :comment

      t.timestamps
    end
  end
end
