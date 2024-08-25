const data = [
  {
    id: 1,
    name: "Spicy Delight",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&s",
    cuisine: "Indian, Chinese",
    rating: 4.5,
    price_for_two: 500,
    location: "123 Food Street, City Center",
    delivery_time: "30-40 mins",
  },
  {
    id: 2,
    name: "Pasta Paradise",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&s",
    cuisine: "Italian",
    rating: 4.2,
    price_for_two: 700,
    location: "456 Gourmet Avenue, Downtown",
    delivery_time: "20-30 mins",
  },
  {
    id: 3,
    name: "Burger Hub",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&s",
    cuisine: "American",
    rating: 4.0,
    price_for_two: 300,
    location: "789 Fast Food Lane, Uptown",
    delivery_time: "15-25 mins",
  },
  {
    id: 4,
    name: "Sushi Express",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&s",
    cuisine: "Japanese",
    rating: 4.7,
    price_for_two: 900,
    location: "321 Sashimi Blvd, Waterfront",
    delivery_time: "40-50 mins",
  },
  {
    id: 5,
    name: "Vegan Bites",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&s",
    cuisine: "Vegan, Healthy",
    rating: 4.3,
    price_for_two: 600,
    location: "654 Green Way, Suburbs",
    delivery_time: "25-35 mins",
  },
  {
    id: 6,
    name: "Taco Fiesta",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&s",
    cuisine: "Mexican",
    rating: 4.6,
    price_for_two: 450,
    location: "987 Spice Road, Old Town",
    delivery_time: "20-30 mins",
  },
  {
    id: 7,
    name: "Pizza Planet",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&s",
    cuisine: "Italian, Fast Food",
    rating: 4.8,
    price_for_two: 800,
    location: "432 Cheese Street, Midtown",
    delivery_time: "25-35 mins",
  },
  {
    id: 8,
    name: "Curry Corner",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&s",
    cuisine: "Indian",
    rating: 4.4,
    price_for_two: 550,
    location: "567 Spice Lane, Market District",
    delivery_time: "30-40 mins",
  },
  {
    id: 9,
    name: "Dim Sum House",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&s",
    cuisine: "Chinese",
    rating: 4.5,
    price_for_two: 650,
    location: "210 Chopstick Avenue, Chinatown",
    delivery_time: "35-45 mins",
  },
  {
    id: 10,
    name: "Biryani Bowl",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&s",
    cuisine: "Indian, Mughlai",
    rating: 4.3,
    price_for_two: 700,
    location: "876 Royal Street, Palace Grounds",
    delivery_time: "40-50 mins",
  },
  {
    id: 11,
    name: "Grill & Chill",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&s",
    cuisine: "Barbecue, American",
    rating: 4.7,
    price_for_two: 1200,
    location: "321 BBQ Drive, Riverside",
    delivery_time: "45-55 mins",
  },
  {
    id: 12,
    name: "Noodle Nirvana",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&s",
    cuisine: "Asian, Thai",
    rating: 4.2,
    price_for_two: 500,
    location: "654 Rice Bowl Street, Eastside",
    delivery_time: "30-40 mins",
  },
  {
    id: 13,
    name: "Sizzler's Delight",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&sg",
    cuisine: "Continental, Fast Food",
    rating: 4.0,
    price_for_two: 850,
    location: "908 Flame Grill Road, West End",
    delivery_time: "20-30 mins",
  },
  {
    id: 14,
    name: "Wrap & Roll",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&s",
    cuisine: "Healthy, Fast Food",
    rating: 4.1,
    price_for_two: 400,
    location: "213 Quick Bite Lane, South City",
    delivery_time: "15-25 mins",
  },
  {
    id: 15,
    name: "Dessert Haven",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRXfsQi6DlCivDRmPiGlYgyMsF6OQKnvi0w&s",
    cuisine: "Bakery, Desserts",
    rating: 4.9,
    price_for_two: 300,
    location: "789 Sweet Tooth Avenue, Uptown",
    delivery_time: "10-20 mins",
  },
];
export default data;