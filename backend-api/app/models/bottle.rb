class Bottle < ApplicationRecord
    has_many :reviews
    validates :name, :brand, presence: true
    validates :img_url, presence: {message: "Image URL required"}
    validates :price, presence: {message: "PRICE required"}
end
