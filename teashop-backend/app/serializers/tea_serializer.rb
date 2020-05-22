class TeaSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :img_url, :brand
  
  has_many :reviews
end
