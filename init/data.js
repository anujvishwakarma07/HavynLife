const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a serene escape.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Experience the grandeur of a bygone era in this beautifully restored castle. Explore the breathtaking Scottish Highlands.",
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 10000,
    location: "Edinburgh",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this stunning oasis-style villa with a private pool.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZpZXd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in this unique eco-friendly treehouse for a truly immersive nature experience.",
    image: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmlld3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Canal House in Amsterdam",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in the heart of Amsterdam.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself in this ultra-exclusive luxury resort.",
    image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque English countryside in this charming cottage with a thatched roof.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this sleek and modern apartment in Shinjuku.",
    image: "https://images.unsplash.com/photo-1480796724541-27bc31c50ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days fishing and kayaking on the lake in this cozy cabin in the woods.",
    image: "https://images.unsplash.com/photo-1445013081040-d14f1f5d7af7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in overwater luxury in this stunning villa with a private pool and direct ocean access.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style in this luxurious ski-in/ski-out chalet in Aspen.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to this secluded beach house for a truly relaxing and private getaway in Costa Rica.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Modern Loft in Paris",
    description:
      "Stay in the heart of Paris in this stylish and modern loft apartment near the Louvre.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Paris",
    country: "France",
  },
  {
    title: "Luxury Cabin in the Mountains",
    description:
      "Experience the ultimate mountain getaway in this luxury cabin with a hot tub and gourmet kitchen.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Oceanfront Condo in Maui",
    description:
      "Wake up to the sound of waves in this stunning oceanfront condo in Maui.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2NlYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Maui",
    country: "United States",
  },
  {
    title: "Historic Townhouse in Charleston",
    description:
      "Stay in a piece of history in this beautifully restored townhouse in Charleston's historic district.",
    image: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGlzdG9yaWNhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Villa in Bali",
    description:
      "Experience tropical luxury in this stunning modern villa with a private pool in Ubud.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Luxury Penthouse in London",
    description:
      "Indulge in ultra-luxury living in this stunning penthouse with panoramic views of London.",
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9uZG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "London",
    country: "United Kingdom",
  },
  {
    title: "Secluded Cottage in the Mountains",
    description:
      "Escape to this secluded cottage for a truly peaceful and relaxing mountain retreat.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Blue Ridge Mountains",
    country: "United States",
  },
  {
    title: "Oceanfront Cabin in Oregon",
    description:
      "Spend your days hiking the coast and your nights listening to the ocean in this cozy cabin.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Oregon Coast",
    country: "United States",
  },
  {
    title: "Modern Beachfront Villa",
    description:
      "Enjoy the sun and sand in this stunning modern beachfront villa with a private pool.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Cabo San Lucas",
    country: "Mexico",
  },
  {
    title: "Historic Lakefront Mansion",
    description:
      "Stay in the height of luxury in this beautifully restored lakefront mansion in Lake Como.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZpZXd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Lake Como",
    country: "Italy",
  },
  {
    title: "Luxury Safari Lodge",
    description:
      "Experience the African savanna in ultimate comfort and style in this luxury safari lodge.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8bef99c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FmYXJpfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 6000,
    location: "Kruger National Park",
    country: "South Africa",
  },
  {
    title: "Modern Loft in Manhattan",
    description:
      "Stay in the heart of NYC in this sleek and stylish modern loft in Chelsea.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50JTIwdmlld3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Manhattan",
    country: "United States",
  },
  {
    title: "Secluded Villa in Tuscany",
    description:
      "Escape to the rolling hills of Tuscany in this secluded and beautifully restored villa.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZpZXd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3200,
    location: "Tuscany",
    country: "Italy",
  },
];

module.exports = { data: sampleListings };