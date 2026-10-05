const cartoons = [
  {
    title: "Futurama",
    year: 1999,
    genres: ["Sci-Fi", "Comedy"],
    network: "Fox / Hulu",
    animation_style: "2D",
    path: "assets/futurama.jpeg"
  },
  {
    title: "Bob's Burgers",
    year: 2011,
    genres: ["Comedy"],
    network: "Fox",
    animation_style: "2D",
    path: "assets/bobs_burgers.jpeg"
  },
  {
    title: "The Simpsons",
    year: 1989,
    genres: ["Comedy"],
    network: "Fox",
    animation_style: "2D",
    path: "assets/the_simpsons.jpeg"
  },
  {
    title: "Family Guy",
    year: 1999,
    genres: ["Comedy"],
    network: "Fox",
    animation_style: "2D",
    path: "assets/family_guy.jpeg"
  },
  {
    title: "American Dad!",
    year: 2005,
    genres: ["Comedy"],
    network: "Fox / TBS",
    animation_style: "2D",
    path: "assets/american_dad.jpeg"
  },
  {
    title: "South Park",
    year: 1997,
    genres: ["Comedy", "Satire"],
    network: "Comedy Central",
    animation_style: "Cutout-style 2D",
    path: "assets/south_park.jpeg"
  },
  {
    title: "Rick and Morty",
    year: 2013,
    genres: ["Sci-Fi", "Comedy"],
    network: "Adult Swim",
    animation_style: "2D",
    path: "assets/rickmorty.jpeg"
  },
  {
    title: "King of the Hill",
    year: 1997,
    genres: ["Comedy"],
    network: "Fox",
    animation_style: "2D",
    path: "assets/king_ofthe_hill.jpeg"
  },
  {
    title: "Beavis and Butt-Head",
    year: 1993,
    genres: ["Comedy"],
    network: "MTV",
    animation_style: "2D",
    path: "assets/beavisbutthead.jpeg"
  },
  {
    title: "Archer",
    year: 2009,
    genres: ["Comedy", "Spy"],
    network: "FX",
    animation_style: "2D",
    path: "assets/archer.jpeg"
  },
  {
    title: "BoJack Horseman",
    year: 2014,
    genres: ["Comedy", "Drama"],
    network: "Netflix",
    animation_style: "2D",
    path: "assets/bojack_horseman.jpeg"
  },
  {
    title: "Big Mouth",
    year: 2017,
    genres: ["Comedy"],
    network: "Netflix",
    animation_style: "2D",
    path: "assets/big_mouth.jpeg"
  },
  {
    title: "Disenchantment",
    year: 2018,
    genres: ["Fantasy", "Comedy"],
    network: "Netflix",
    animation_style: "2D",
    path: "assets/disenchantment.jpeg"
  },
  {
    title: "Solar Opposites",
    year: 2020,
    genres: ["Sci-Fi", "Comedy"],
    network: "Hulu",
    animation_style: "2D",
    path: "assets/solar_opposites.jpeg"
  },
  {
    title: "Gravity Falls",
    year: 2012,
    genres: ["Mystery", "Adventure"],
    network: "Disney",
    animation_style: "2D",
    path: "assets/gravity_falls.jpeg"
  },
  {
    title: "Adventure Time",
    year: 2010,
    genres: ["Fantasy", "Adventure"],
    network: "Cartoon Network",
    animation_style: "2D",
    path: "assets/adventure_time.jpeg"
  },
  {
    title: "Regular Show",
    year: 2009,
    genres: ["Comedy", "Adventure"],
    network: "Cartoon Network",
    animation_style: "2D",
    path: "assets/regular_show.jpeg"
  },
  {
    title: "The Amazing World of Gumball",
    year: 2011,
    genres: ["Comedy"],
    network: "Cartoon Network",
    animation_style: "Mixed media",
    path: "assets/amazing_world.jpeg"
  },
  {
    title: "Over the Garden Wall",
    year: 2014,
    genres: ["Fantasy", "Mystery"],
    network: "Cartoon Network",
    animation_style: "2D",
    path: "assets/over_the_garden_wall.jpeg"
  },
  {
    title: "Teen Titans",
    year: 2003,
    genres: ["Superhero"],
    network: "Cartoon Network",
    animation_style: "2D",
    path: "assets/teen_titans.jpeg"
  },
  {
    title: "Courage the Cowardly Dog",
    year: 1999,
    genres: ["Horror", "Comedy"],
    network: "Cartoon Network",
    animation_style: "2D",
    path: "assets/courage_the_cowardly_dog.jpeg"
  },
  {
    title: "Dexter's Laboratory",
    year: 1996,
    genres: ["Comedy", "Sci-Fi"],
    network: "Cartoon Network",
    animation_style: "2D",
    path: "assets/dexters_laboratory.jpeg"
  },
  {
    title: "Ed, Edd n Eddy",
    year: 1999,
    genres: ["Comedy"],
    network: "Cartoon Network",
    animation_style: "2D",
    path: "assets/ed_edd_eddy.jpeg"
  },
  {
    title: "The Powerpuff Girls",
    year: 1998,
    genres: ["Superhero", "Comedy"],
    network: "Cartoon Network",
    animation_style: "2D",
    path: "assets/powerpuff_girls.jpeg"
  },
  {
    title: "Hey Arnold!",
    year: 1996,
    genres: ["Comedy"],
    network: "Nickelodeon",
    animation_style: "2D",
    path: "assets/hey_arnold.jpeg"
  },
  {
    title: "SpongeBob SquarePants",
    year: 1999,
    genres: ["Comedy"],
    network: "Nickelodeon",
    animation_style: "2D",
    path: "assets/spongebob_squarepants.jpeg"
  },
  {
    title: "Avatar: The Last Airbender",
    year: 2005,
    genres: ["Fantasy", "Adventure"],
    network: "Nickelodeon",
    animation_style: "2D",
    path: "assets/avatar_the_last_airbender.jpeg"
  },
  {
    title: "Danny Phantom",
    year: 2004,
    genres: ["Superhero", "Comedy"],
    network: "Nickelodeon",
    animation_style: "2D",
    path: "assets/danny_phantom.jpeg"
  },
  {
    title: "Invader Zim",
    year: 2001,
    genres: ["Sci-Fi", "Comedy"],
    network: "Nickelodeon",
    animation_style: "2D",
    path: "assets/invader_zim.jpeg"
  },
  {
    title: "Boondocks",
    year: 2005,
    genres: ["Comedy", "Satire"],
    network: "Adult Swim",
    animation_style: "2D",
    path: "assets/boondocks.jpeg"
  },
  {
    title: "Clone High",
    year: 2002,
    genres: ["Comedy"],
    network: "MTV",
    animation_style: "2D",
    path: "assets/clone_high.jpeg"
  },
  {
    title: "Daria",
    year: 1997,
    genres: ["Comedy"],
    network: "MTV",
    animation_style: "2D",
    path: "assets/daria.jpeg"
  },
  {
    title: "Smiling Friends",
    year: 2022,
    genres: ["Comedy"],
    network: "Adult Swim",
    animation_style: "2D / Mixed",
    path: "assets/smiling_friends.jpeg"
  }
];