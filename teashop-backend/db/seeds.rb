# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Tea.create([
    {
    name: "Long Island",
    brand: "Chocolaitte",
    price: 7.99,
    img_url: "https://www.supergoldenbakes.com/wordpress/wp-content/uploads/2019/07/Long_island_iced_tea-1-4s.jpg",
    description: "Herbal Mix: A Slice of Ginger",
  },
  {
    name: "Organic English Breakfast Black Tea",
    brand: "Full Leaf Tea Company",
    price: 17.95,
    img_url: "https://cdn.shopify.com/s/files/1/0645/1401/products/FOR_WEB_English-Breakfast_1400x.jpg?v=1582337875",
    description: "This classic blend steeps a red-gold cup with a smooth and hearty black tea flavor profile",
  },
  {
    name: "Organic Sweet Spiced Citrus",
    brand: "Full Leaf Tea Company",
    price: 3.99,
    img_url: "https://cdn.shopify.com/s/files/1/0645/1401/products/FOR_WEB_Sweet-Spiced-Citrus_1400x.jpg?v=1582328400",
    description: "Tea Pro - High Caffeine",
  },
  {
    name: "Green Tea",
    brand: "Wine Depot",
    price: 7.99,
    img_url: "http://2.bp.blogspot.com/-2Sx6xoKzvWA/UgEmHqHyDBI/AAAAAAAAOY4/JvpJp7n4GXY/s1600/6-copyright-yedycalaguas-la-maison-du-the-tea-france-manila-wine-depot-hightea.JPG",
    description: "Chamomille Smooth",
  },
  {
    name: "Lipton Yellow Label",
    brand: "Unilever",
    price: 4.56,
    img_url: "http://www.unilever.com/Images/Lipton-yellow-label-tea_tcm244-408681.jpg",
    description: "Fresh Blend of Tea",
  },
#   {
#     name: "Tea Coffee Drink",
#     brand: "Trend Hunter",
#     price: 10.99,
#     img_url: "https://cdn.trendhunterstatic.com/thumbs/tea-and-coffee-drink.jpeg",
#     description: "Mix Of Both Taste",
#   },
#   {
#     name: "Single Origin w Black Tea",
#     brand: "Birdchalltea",
#     price: 9.99,
#     img_url: "https://birchalltea.co.uk/wp-content/uploads/2015/08/Black-Tea.jpg",
#     description: "Tasty Two",
#   },
])

Review.create([
    {
     tea_id: 1,
        comment: 'Heavenly Composed'
    },
    {
        tea_id: 2,
        comment: 'Would definitely Come Back!'
    },
    {
        tea_id: 3,
        comment: 'Sloppy Taste!'
    },
    {
        tea_id: 4,
        comment: 'Something Different! But not so bad!!'
    },
    {
        tea_id: 5,
        comment: 'No Comment!'
    },
])
# Tea.find_by_id(1).update(review_ids: [1,3,2])
# Tea.find_by_id(2).update(review_ids: [2,4,5])
# Tea.find_by_id(3).update(review_ids: [3,5,2])
# Tea.find_by_id(4).update(review_ids: [1,4,3])
# Tea.find_by_id(5).update(review_ids: [5,4,3])
# Tea.find_by_id(6).update(review_ids: [1,4,2])
# Tea.find_by_id(7).update(review_ids: [3,5,2])