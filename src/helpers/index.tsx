import { bag, cardBeachImg, cardHomeImg, cardOfficeImg, cardStreetImg, cardStudyImg, cardpartyImg, fullLook, related1, related2, shoe, shoe2, underwear } from "./images";
import { colorsType, complectsType, typeForCategoriyesCard } from "./types";


export const items:typeForCategoriyesCard[] = [
    {
      title: "Clothes for party",
      count: "120 on sale",
      products: [
        {
          id: 0,
          title: "Salsy ferp",
          sizes: ["S", "M", "L", "XL"],
          imgUrl: cardpartyImg,
          colors: [ "SNOW WHITE", "ALMOST YELLOW", "CHOCOLATE BROWN", "black"]
        },
        {
          id: 0,
          title: "Drend senser",
          sizes: ["S", "M", "L", "XL"],
          imgUrl: cardStreetImg,
          colors: [ "SNOW WHITE", "ALMOST YELLOW", "PALE BLUE","CHERRY RED", "CHOCOLATE BROWN", "black"]
        }
      ],
      imageUrl: cardpartyImg
    },
    {
      title: "Clothes for street",
      count: "64 on sale",
      products: [
        {
          id: 0,
          title: "lover duny",
          sizes: ["S", "M", "L", "XL"],
          imgUrl: cardpartyImg,
          colors: [ "STEEL GREY", "CHERRY RED", "CHOCOLATE BROWN", "black"]
        },
        {
          id: 0,
          title: "Grade flows",
          sizes: ["S", "M", "L", "XL"],
          imgUrl: cardStreetImg,
          colors: [ "SNOW WHITE", "ALMOST YELLOW", "PALE BLUE", "black"]
        }
      ],
      imageUrl: cardStreetImg
    },
    {
      title: "Clothes for office",
      count: "88 on sale",
      products: [
        {
          id: 0,
          title: "Relsor",
          sizes: ["S", "M", "L", "XL"],
          imgUrl: cardpartyImg,
          colors: ["SNOW WHITE", "ALMOST YELLOW", "PALE BLUE", "PISTACHIO GREEN", "EVERY ORANGE", "STEEL GREY"]
        },
        {
          id: 0,
          title: "Jenkins",
          sizes: ["S", "M", "L", "XL"],
          imgUrl: cardStreetImg,
          colors: ["ALMOST YELLOW", "PALE BLUE", "PISTACHIO GREEN", "CHOCOLATE BROWN", "black"]
        }
      ],
      imageUrl: cardOfficeImg
    },
    {
      title: "Clothes for study",
      count: "45 on sale",
      products: [
        {
          id: 0,
          title: "Freshly krendy",
          sizes: ["S", "M", "L", "XL"],
          imgUrl: cardpartyImg,
          colors: [ "SNOW WHITE", "ALMOST YELLOW", "PALE BLUE", "PISTACHIO GREEN"]
        },
        {
          id: 0,
          title: "snowly just",
          sizes: ["S", "M", "L", "XL"],
          imgUrl: cardStreetImg,
          colors: [ "SNOW WHITE","STEEL GREY", "CHERRY RED", "CHOCOLATE BROWN", "black"]
        }
      ],
      imageUrl: cardStudyImg
    },
    {
      title: "Casual Clothes",
      count: "34 on sale",
      products: [
        {
          id: 0,
          title: "nike slim",
          sizes: ["S", "M", "L", "XL"],
          imgUrl: cardpartyImg,
          colors: [ "SNOW WHITE", "ALMOST YELLOW", "PALE BLUE", "PISTACHIO GREEN", "EVERY ORANGE", "STEEL GREY", "CHERRY RED", "CHOCOLATE BROWN", "black"]
        },
        {
          id: 0,
          title: "shade jenc",
          sizes: ["S", "M", "L", "XL"],
          imgUrl: cardStreetImg,
          colors: [ "SNOW WHITE", "ALMOST YELLOW", "PALE BLUE", "PISTACHIO GREEN", "EVERY ORANGE", "STEEL GREY", "CHERRY RED", "CHOCOLATE BROWN", "black"]
        }
      ],
      imageUrl: cardHomeImg
    },
    {
      title: "Summer Clothes",
      count: "58 on sale",
      products: [
        {
          id: 0,
          title: "Lorem ispum",
          sizes: ["S", "M", "L", "XL"],
          imgUrl: cardpartyImg,
          colors: ["SNOW WHITE", "ALMOST YELLOW", "PISTACHIO GREEN", "CHERRY RED", "CHOCOLATE BROWN","black"]
        },
        {
          id: 0,
          title: "Lorem ispum",
          sizes: ["S", "M", "L", "XL"],
          imgUrl: cardStreetImg,
          colors: ["EVERY ORANGE", "STEEL GREY", "CHERRY RED", "CHOCOLATE BROWN", "black"]
        }
      ],
      imageUrl: cardBeachImg
    },
];
  
export const colors:colorsType[] = [
  {
    name: "SNOW WHITE",
    color:{
      from: '#FFFFFF', 
      to: '#D3CBC6'
    }
  },
  {
    name: "ALMOST YELLOW",
    color:{
      from: '#F5E9D4', 
      to: '#C6A16E'
    }
  },
  {
    name: "PALE BLUE",
    color:{
      from: '#A6BCD0', 
      to: '#357897'
    }
  },
  {
    name: "PISTACHIO GREEN",
    color:{
      from: '#DFE3C5', 
      to: '#C8B595'
    }
  },
  {
    name: "EVERY ORANGE",
    color:{
      from: '#F3CDBA', 
      to: '#EFA16A'
    }
  },
  {
    name: "STEEL GREY",
    color:{
      from: '#D5D9DD', 
      to: '#686C6F'
    }
  },
  {
    name: "CHERRY RED",
    color:{
      from: '#F44248', 
      to: '#771818'
    }
  },
  {
    name: "CHOCOLATE BROWN",
    color:{
      from: '#50392F', 
      to: '#291B1D'
    }
  },
  {
    name: "black",
    color:{
      from: '#2C2F39', 
      to: '#000'
    }
  },
]
export const defaultColors: colorsType[] = [
  {
    name: 'blue',
    color: {
      from: "#6151A2", 
       to: "#3853A4"
    }
  }, 
  {
    name: 'green',
    color: {
      from: "#00A651", 
       to: "#3FB97B"
    }
  }, 
  {
    name: 'yellow',
    color: {
      from: "#BCD630", 
       to: "#EDB01C"
    }
  },
  {
    name: 'yellow',
    color: {
      from: "#BCD630", 
       to: "#EDB01C"
    }
  }
]
export const ClothingCategores: string[] = ["outerwear", 'underwear', "accories", "shoes"]

export const complect: complectsType[] = [
  {
    id: 0, 
    complectId: ["Salsy ferp", "Drend senser"], 
    name: 'Jimmy Choo', 
    describtion: 'Amita 65mm leather pumps',
    price: 89, 
    priceOff: 123, 
    imgUrl: fullLook
  },
  {
    id: 1, 
    complectId: ["Salsy ferp", "Drend senser"], 
    name: 'Jimmy Choo', 
    describtion: 'Amita 65mm leather pumps',
    price: 55, 
    priceOff: 72, 
    imgUrl: shoe
  },
  {
    id: 2, 
    complectId: ["Salsy ferp", "Drend senser"], 
    name: 'Del Core', 
    describtion: 'boat-neck tie-waist poplin',
    price: 32, 
    priceOff: 52, 
    imgUrl: bag
  },
  {
    id: 3, 
    complectId: ["Salsy ferp", "Drend senser"], 
    name: 'ERDEM', 
    describtion: 'rehfrency ferrikonse klonmy',
    price: 41, 
    priceOff: 56, 
    imgUrl: underwear
  },
  {
    id: 3, 
    complectId: ["Salsy ferp", "Drend senser"], 
    name: 'ERDEM', 
    describtion: 'rehfrency ferrikonse klonmy',
    price: 41, 
    priceOff: 56, 
    imgUrl: shoe2
  }
]
export const related: complectsType[] = [
  {
    id: 0, 
    complectId: ["Salsy ferp", "Drend senser"], 
    name: 'Srelly fer', 
    describtion: 'Amita 65mm leather pumps',
    price: 99, 
    priceOff: 123, 
    imgUrl: related2
  },
  {
    id: 1, 
    complectId: ["Salsy ferp", "Drend senser"], 
    name: 'Jimmy Choo', 
    describtion: 'Amita 65mm leather pumps',
    price: 55, 
    priceOff: 72, 
    imgUrl: related1
  },
  {
    id: 2, 
    complectId: ["Salsy ferp", "Drend senser"], 
    name: 'Del Core', 
    describtion: 'boat-neck tie-waist poplin',
    price: 32, 
    priceOff: 52, 
    imgUrl: cardHomeImg
  },
]

