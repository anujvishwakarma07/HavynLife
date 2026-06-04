const sampleListings = [
{
title: "Seaside Villa Escape",
description: "A luxurious seaside villa with breathtaking sunset views.",
image: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2f8b",
price: 4500,
location: "Goa",
country: "India"
},
{
title: "Snowy Mountain Retreat",
description: "A cozy wooden cabin surrounded by snow-covered mountains.",
image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
price: 2200,
location: "Manali",
country: "India"
},
{
title: "Modern City Loft",
description: "Stylish loft apartment in the heart of the city.",
image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
price: 3500,
location: "Mumbai",
country: "India"
},
{
title: "Desert Camp Experience",
description: "Enjoy peaceful nights and camel rides in the desert.",
image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
price: 1800,
location: "Jaisalmer",
country: "India"
},
{
title: "Lakeside Cottage",
description: "Relax by the lake in this peaceful countryside cottage.",
image: "https://images.unsplash.com/photo-1505692794403-34d4982f88aa",
price: 2100,
location: "Udaipur",
country: "India"
},
{
title: "Jungle Treehouse",
description: "Stay above the forest floor in a magical treehouse.",
image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
price: 2600,
location: "Wayanad",
country: "India"
},
{
title: "Luxury Palace Stay",
description: "Experience royal living in a historic palace.",
image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
price: 5200,
location: "Jaipur",
country: "India"
},
{
title: "Himalayan Camping Spot",
description: "Camp under the stars with stunning Himalayan views.",
image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
price: 1400,
location: "Rishikesh",
country: "India"
},
{
title: "Tea Garden Homestay",
description: "Wake up to fresh tea gardens and misty mornings.",
image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
price: 1700,
location: "Darjeeling",
country: "India"
},
{
title: "Beach Hut Paradise",
description: "A charming beach hut just steps from the ocean.",
image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
price: 2300,
location: "Andaman",
country: "India"
},
{
title: "Hilltop View House",
description: "Panoramic views from a peaceful hilltop house.",
image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
price: 2000,
location: "Shimla",
country: "India"
},
{
title: "Riverside Wooden Cabin",
description: "A quiet cabin beside a flowing river.",
image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
price: 1900,
location: "Kasol",
country: "India"
},
{
title: "Luxury Pool Resort Room",
description: "A premium resort room with a private pool.",
image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
price: 4800,
location: "Kerala",
country: "India"
},
{
title: "Historic Fort Stay",
description: "Live inside an ancient fort with modern comfort.",
image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
price: 3900,
location: "Jodhpur",
country: "India"
},
{
title: "Backwater Houseboat",
description: "Cruise peacefully through Kerala backwaters.",
image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
price: 4200,
location: "Alleppey",
country: "India"
},
{
title: "Cozy Studio Apartment",
description: "Minimalist studio perfect for solo travelers.",
image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
price: 1600,
location: "Bangalore",
country: "India"
},
{
title: "Village Farmhouse Stay",
description: "Enjoy organic food and peaceful village life.",
image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
price: 1500,
location: "Punjab",
country: "India"
},
{
title: "Arctic Style Igloo Dome",
description: "A glass dome perfect for stargazing.",
image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
price: 3000,
location: "Leh",
country: "India"
},
{
title: "Luxury Beach Resort",
description: "Premium beachfront resort with infinity pool.",
image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c1",
price: 5000,
location: "Pondicherry",
country: "India"
},
{
title: "Forest Eco Lodge",
description: "Eco-friendly stay deep inside the forest.",
image: "https://images.unsplash.com/photo-1472220625704-91e1462799b2",
price: 2100,
location: "Coorg",
country: "India"
},
{
title: "Royal Haveli Stay",
description: "Traditional haveli with beautiful architecture.",
image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
price: 3400,
location: "Udaipur",
country: "India"
},
{
title: "Minimalist Wooden Cabin",
description: "Simple wooden cabin perfect for relaxation.",
image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
price: 1800,
location: "Mcleodganj",
country: "India"
},
{
title: "Luxury Penthouse View",
description: "Penthouse apartment with skyline views.",
image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
price: 4700,
location: "Delhi",
country: "India"
},
{
title: "Island Beach Bungalow",
description: "A private bungalow on a tropical island.",
image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
price: 3600,
location: "Lakshadweep",
country: "India"
},
{
title: "Mountain Glass Cabin",
description: "A modern glass cabin overlooking mountains.",
image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
price: 2500,
location: "Auli",
country: "India"
},
{
title: "Camping by the Lake",
description: "Enjoy peaceful camping by a crystal lake.",
image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
price: 1200,
location: "Nainital",
country: "India"
},
{
title: "Traditional Mud House",
description: "Stay in a rustic mud house with local charm.",
image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
price: 1300,
location: "Kutch",
country: "India"
},
{
title: "Cliffside Ocean House",
description: "A dramatic house perched above the ocean.",
image: "https://images.unsplash.com/photo-1505692794403-34d4982f88aa",
price: 4100,
location: "Varkala",
country: "India"
},
{
title: "Luxury Safari Tent",
description: "Glamping experience in luxury tents.",
image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
price: 2700,
location: "Ranthambore",
country: "India"
},
{
title: "Sunset View Cottage",
description: "Watch the sunset every evening from your balcony.",
image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
price: 2000,
location: "Ooty",
country: "India"
}
];

module.exports = { data: sampleListings };