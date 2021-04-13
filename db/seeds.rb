# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = [
    {
        email: 'jane@email.com',
        password: 'password'
    },
    {
        email: 'john@email.com',
        password: 'password'
    }
]

users.each do |attributes|
    User.create attributes
end

apartments = [
    {
        street: "177a Bleecker Street",
        city: "New York",
        state: "New York",
        manager: "Dr. Strange",
        email: "mstrmystik@othrelm.com",
        price: "12000000",
        bedrooms: 28,
        bathrooms: 1,
        pets: "mythical",
        image_url: "https://i.pinimg.com/originals/1a/f4/ab/1af4abcc82d17d8c8d91b6bdc572701c.png",
        user_id: 1
    },
    {
        street: "2421 S. Figueroa Street",
        city: "Los Angeles",
        state: "California",
        manager: "Hank McCoy",
        email: "Hmccoy2@xsg.edu",
        price: "15700000",
        bedrooms: 47,
        bathrooms: 50,
        pets: "mutuant",
        image_url: "https://i.pinimg.com/originals/65/0f/14/650f148686c47eb17d72c32fcfc72da3.jpg",
        user_id: 1
    },
    {
        street: "42nd Street and Madison Avenue",
        city: "Manhattan",
        state: "New York",
        manager: "Thing",
        email: "mrThing@fan4.co",
        price: "9700000",
        bedrooms: 4,
        bathrooms: 5,
        pets: "no",
        image_url: "https://www.fortressofsolitude.co.za/wp-content/uploads/2014/05/Baxter_Building-1.jpg",
        user_id: 1
    
    },
    {
        street: "1313 Mockingbird Lane",
        city: "Mockingbird Heights",
        state: "Pennsylvania",
        manager: "Herman Munster",
        email: "noFire@ohgoody.com",
        price: "52000",
        bedrooms: 6,
        bathrooms: 4,
        pets: "Stair Monster",
        image_url: "https://i.pinimg.com/originals/fa/f5/75/faf5759915a3cdfafde3bff7b9f776aa.jpg",
        user_id: 2
    }

]

apartments.each do |attributes|
    Apartment.create attributes
    puts "creating apt : #{attributes}"
end