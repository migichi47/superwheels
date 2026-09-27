const products = [
  {
    id: 1,
    category: "Tailgate",
    make: "Honda",
    model: "vezel",
    year: 2014,
    image:
      "https://pictures-kenya.jijistatic.com/76573071_MTIwMC0xNjAwLTIwZWYyYjFhMDc.webp",
    price: "100000",
    description:
      "A used tailgate for a 2014 Honda Vezel. Suitable as a replacement for a damaged or worn-out rear hatch.",
  },
  {
    id: 2,
    category: "Bonnet",
    make: "Toyota",
    model: "Harrier",
    year: 2015,
    image:
      "https://pictures-kenya.jijistatic.com/75931630_MzAwLTIwOC1jMDJhYmFhYzhk.webp",
    price: "25000",
    description:
      "Replacement bonnet for a 2015 Toyota Harrier. A practical option for replacing a damaged front hood.",
  },
  {
    id: 3,
    category: "Sidemirror",
    make: "Toyota",
    model: "Spade",
    year: 2018,
    image:
      "https://pictures-kenya.jijistatic.com/66594896_MTUwMC02OTItMWVlYWZlMjM5OA.webp",
    price: "16000",
    description:
      "Replacement side mirror for a 2018 Toyota Spade. Ideal for replacing a broken or missing original mirror.",
  },
  {
    id: 4,
    category: "Sidemirror",
    make: "Mazda",
    model: "Axela",
    year: 2010,
    image:
      "https://pictures-kenya.jijistatic.com/66594896_MTUwMC02OTItMWVlYWZlMjM5OA.webp",
    price: "25000",
    description:
      "Used side mirror suitable for a 2010 Mazda Axela. A replacement option for damaged or faulty side mirrors.",
  },
  {
    id: 5,
    category: "Sidemirror",
    make: "Honda",
    model: "vezel",
    year: 2007,
    image:
      "https://pictures-kenya.jijistatic.com/76570335_NzM3LTE2MDAtOWVhY2ExNmQyOA.webp",
    price: "28000",
    description:
      "Replacement side mirror for a Honda Vezel. Designed to restore visibility and replace a damaged original mirror.",
  },
  {
    id: 6,
    category: "Grille",
    make: "Toyota",
    model: "Ist",
    year: 2020,
    image:
      "https://pictures-kenya.jijistatic.com/64543663_MTUwMC02OTItZmM2ZWFiZmNmZg.webp",
    price: "9000",
    description:
      "Front grille replacement for a 2020 Toyota Ist. Suitable for refreshing the front appearance or replacing a damaged grille.",
  },
  {
    id: 7,
    category: "Sidemirror",
    make: "Mazda",
    model: "Atenza",
    year: 2010,
    image:
      "https://pictures-kenya.jijistatic.com/75661634_MTYwMC0xMjAwLThjZTU2YzNiYzk.webp",
    price: "25000",
    description:
      "Replacement side mirror for a 2010 Mazda Atenza. Suitable for replacing a cracked, broken, or missing mirror.",
  },
  {
    id: 8,
    category: "Sidemirror",
    make: "Toyota",
    model: "Avensis",
    year: 2014,
    image:
      "https://pictures-kenya.jijistatic.com/66638130_MTUwMC02OTItNzAzMzQ4ZTU2Nw.webp",
    price: "16000",
    description:
      "Used side mirror for a 2014 Toyota Avensis. A suitable replacement for a damaged or non-functional side mirror.",
  },
  {
    id: 9,
    category: "Door",
    make: "Toyota",
    model: "Mark X",
    year: 2011,
    image:
      "https://pictures-kenya.jijistatic.com/76569666_MzAwLTY1MS0wN2Q4NmUxNzg3.webp",
    price: "100000",
    description:
      "Replacement door panel for a 2011 Toyota Mark X. Suitable for repairs following body damage or replacement of a worn door.",
  },
  {
    id: 10,
    category: "Bonnet chrome",
    make: "Harrier",
    model: "",
    year: 2014,
    image:
      "https://pictures-kenya.jijistatic.com/76573071_MTIwMC0xNjAwLTIwZWYyYjFhMDc.webp",
    price: "26000",
    description:
      "Chrome bonnet trim suitable for a 2014 Harrier. Adds a clean finishing detail to the front bonnet area and can replace damaged trim.",
  },
  {
    id: 11,
    category: "headlight",
    make: "Mazda",
    model: "Atenza",
    year: 2016,
    image:
      "https://pictures-kenya.jijistatic.com/63186269_MTUwMC0xMTI1LTA1NTE2MjIxNzg.webp",
    price: 28000,
    description: "Front headlight assembly for Mazda Atenza 2016 model.",
  },
  {
    id: 12,
    category: "bumper",
    make: "Toyota",
    model: "Fielder",
    year: 2017,
    image:
      "https://pictures-kenya.jijistatic.com/76573277_MTYwMC03MzktNmEyZWIyZmVlNg.webp",
    price: 22000,
    description: "Front bumper replacement for Toyota Fielder 2017 model.",
  },
  {
    id: 13,
    category: "windbreaker",
    make: "Subaru",
    model: "Forester",
    year: 2015,
    image:
      "https://pictures-kenya.jijistatic.com/75681784_OTgxLTE2MDAtNDdjODBhYmE5Mg.webp",
    price: 8500,
    description: "Set of side window windbreakers for Subaru Forester 2015.",
  },
  {
    id: 14,
    category: "foglight",
    make: "Nissan",
    model: "X-Trail",
    year: 2016,
    image:
      "https://pictures-kenya.jijistatic.com/63227835_MTQ3Mi0xMDk5LTMyNTQwZTI3Y2M.webp",
    price: 9500,
    description: "Front fog light assembly for Nissan X-Trail 2016 model.",
  },
  {
    id: 15,
    category: "tailgate",
    make: "Toyota",
    model: "Axio",
    year: 2018,
    image:
      "https://pictures-kenya.jijistatic.com/76573071_MTIwMC0xNjAwLTIwZWYyYjFhMDc.webp",
    price: 45000,
    description: "Replacement rear tailgate for Toyota Axio 2018 model.",
  },
  {
    id: 16,
    category: "grille",
    make: "Mazda",
    model: "CX-5",
    year: 2017,
    image:
      "https://pictures-kenya.jijistatic.com/64543663_MTUwMC02OTItZmM2ZWFiZmNmZg.webp",
    price: 18000,
    description: "Front radiator grille replacement for Mazda CX-5 2017 model.",
  },
  {
    id: 17,
    category: "fender",
    make: "Honda",
    model: "Fit",
    year: 2016,
    image:
      "https://pictures-kenya.jijistatic.com/63288192_Njc1LTE1MDAtZWRiMWU1NDJmZA.webp",
    price: 16000,
    description: "Front fender replacement for Honda Fit 2016 model.",
  },
  {
    id: 18,
    category: "tail-light",
    make: "Toyota",
    model: "Premio",
    year: 2015,
    image:
      "https://pictures-kenya.jijistatic.com/62787551_MTUwMC0xMTI1LTNiM2I4NzMyNTQ.webp",
    price: 14000,
    description: "Rear tail light assembly for Toyota Premio 2015 model.",
  },
  {
    id: 19,
    category: "bumper",
    make: "Nissan",
    model: "Note",
    year: 2016,
    image:
      "https://pictures-kenya.jijistatic.com/67883873_MzAwLTEzOS04NTc1MmM0MmY2.webp",
    price: 20000,
    description: "Replacement front door panel for Nissan Note 2016 model.",
  },
  {
    id: 20,
    category: "headlight",
    make: "Subaru",
    model: "Impreza",
    year: 2017,
    image:
      "https://pictures-kenya.jijistatic.com/63186269_MTUwMC0xMTI1LTA1NTE2MjIxNzg.webp",
    price: 30000,
    description: "Front headlight assembly for Subaru Impreza 2017 model.",
  },
];

export default products;
