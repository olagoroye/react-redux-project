class Tea < ApplicationRecord
    has_many :reviews
    validates :name, :brand, presence: true
   
end
