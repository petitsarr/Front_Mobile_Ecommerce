type dataType = {
  _id: {
      $oid: string;
  };
  image: string;
  brand: string;
  price: number;
  rating: number;
  numReviews: number;
  isFeatured: boolean;
  name: string;
  description: string; 
  category: {
      $oid: string;
  };
  countInStock: number;
  __v: number;
}

  const data : dataType[] =[ 
  {
    "_id": {
      "$oid": "5f15d8852a025143f9593a7c"
    },
    "image": "https://images.coinafrique.com/1665005_uploaded_image1_1581965329.88.png",
    "brand": "PS3",
    "price": 250,
    "rating": 1,
    "numReviews": 0,
    "isFeatured": true,
    "name": "FIFA 20",
    "description": "The most hard FIFA eve t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',r",
    "category": {
      "$oid": "5f15d5cdcb4a6642bddc0fe9"
    },
    "countInStock": 25,
    "__v": 0
  }, 
  {
    "_id": {
      "$oid": "5f15d92ee520d44421ed8e9b"
    },
    "image": "https://media.4rgos.it/s/Argos/3412688_R_SET?$Main768$&w=620&h=620",
    "brand": "IKEA",
    "price": 350.9,
    "rating": 5,
    "numReviews": 0,
    "isFeatured": true,
    "name": "Garden Chair " ,
    "description": "beautiful chair for garden  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    "category": {
      "$oid": "5f15d5b7cb4a6642bddc0fe8"
    },
    "countInStock": 10,
    "__v": 0
  }, 
  {
    "_id": {
      "$oid": "5f15d964e520d44421ed8e9c"
    },
    "image": "https://www.copares.com/photos/Appareil%20vapeur%20ozone%20domicile.jpg",
    "brand": "OBI",
    "price": 1350.9,
    "rating": 5,
    "numReviews": 0,
    "isFeatured": true,
    "name": "Swimming Pool",
    "description": "beautiful Swimming Pool for garden t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    "category": {
      "$oid": "5f15d5b7cb4a6642bddc0fe8"
    },
    "countInStock": 10,
    "__v": 0
  }, 
  {
    "_id": {
      "$oid": "5f15d9b3e520d44421ed8e9d"
    },
    "image": "https://static1.squarespace.com/static/5a51022ff43b55247f47ccfc/5a567854f9619a96fd6233bb/5b74446c40ec9afbc633e555/1534346950637/Husqvarna+545FR+%282%29.png?format=1500w",
    "brand": "OBI",
    "price": 490.9,
    "rating": 5,
    "numReviews": 0,
    "isFeatured": true,
    "name": "Grass Cut " ,
    "description": "Grass Cut Machine for garden t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',  ",
    "category": {
      "$oid": "5f15d5b7cb4a6642bddc0fe8"
    },
    "countInStock": 5,
    "__v": 0
  }, 
  {
    "_id": {
      "$oid": "5f15da13e520d44421ed8e9e"
    },
    "image": "https://content.la-z-boy.com/Images/product/category/white/small/620600.jpg",
    "brand": "Mobilix",
    "price": 1000,
    "rating": 5,
    "numReviews": 0,
    "isFeatured": true,
    "name": "Sofa2",
    "description": "Big Sofa for living room t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    "category": {
      "$oid": "5f15d5b2cb4a6642bddc0fe7"
    },
    "countInStock": 2,
    "__v": 0
  }  ,
  {
    "_id": {
      "$oid": "5f15da13e520d44421ed8e9eee"
    },
    "image": "https://content.la-z-boy.com/Images/product/category/white/small/620600.jpg",
    "brand": "Mobilix",
    "price": 1000,
    "rating": 5,
    "numReviews": 0,
    "isFeatured": true,
    "name": "Sofa",
    "description": "Big Sofa for living room t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    "category": {
      "$oid": "5f15d5b2cb4a6642bddc0fe7"
    },
    "countInStock": 2,
    "__v": 0
  } , 
  {
    "_id": {
      "$oid": "5f15d8852a025143f9593a7cfhgg"
    },
    "image": "https://images.coinafrique.com/1665005_uploaded_image1_1581965329.88.png",
    "brand": "PS3",
    "price": 250,
    "rating": 1,
    "numReviews": 0,
    "isFeatured": true,
    "name": "FIFA 20 -2",
    "description": "The most hard FIFA ever t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    "category": {
      "$oid": "5f15d5cdcb4a6642bddc0fe9"
    },
    "countInStock": 25,
    "__v": 0
  }
]   

export default data;

  