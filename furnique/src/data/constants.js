//products img
import armchair from "../assets/img/products/armchair.png";
import brownSofa from "../assets/img/products/brownSofa.png";
import cupboard from "../assets/img/products/cupboard.png";
import fabricChair from "../assets/img/products/fabricChair.png";
import greenChair from "../assets/img/products/greenChair.png";
import lamp from "../assets/img/products/lamp.png";
import springbed from "../assets/img/products/springbed.png";
import woodenChair from "../assets/img/products/woodenChair.png";
import sofa from "../assets/img/products/sofa.png";

//people img
import johny from "../assets/img/people/johny.png";
import sarah from "../assets/img/people/sarah.png";
import kim from "../assets/img/people/kim.png";

//gallery img
import gallery1 from "../assets/img/gallery/gallery1.png";
import gallery2 from "../assets/img/gallery/gallery2.png";
import gallery3 from "../assets/img/gallery/gallery3.png";
import gallery4 from "../assets/img/gallery/gallery4.png";
import gallery5 from "../assets/img/gallery/gallery5.png";
import gallery6 from "../assets/img/gallery/gallery6.png";
import gallery7 from "../assets/img/gallery/gallery7.png";
import gallery8 from "../assets/img/gallery/gallery8.png";
import gallery9 from "../assets/img/gallery/gallery9.png";
import gallery10 from "../assets/img/gallery/gallery10.png";

//brands svg
import Amazon from "../assets/img/brands/Amazon.svg";
import Google from "../assets/img/brands/Google.svg";
import CocaCola from "../assets/img/brands/CocaCola.svg";
import Airbnb from "../assets/img/brands/Airbnb.svg";
import Samsung from "../assets/img/brands/Samsung.svg";

//gallery tabs icons
import { Mail, Medal, Party, Shop } from "../assets/icons";

export const brands = [Amazon, Google, CocaCola, Airbnb, Samsung];

export const headerNav = [
  { path: "#product", text: "Product" },
  { path: "#gallery", text: "Services" },
  { path: "#reviews", text: "Article" },
  { path: "#comments", text: "About us" },
];

export const hero = {
  title: {
    mainTitle: "Transform Your Space, Elevate Your Style.",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },

  slider: [
    { src: gallery7 },
    { src: gallery8 },
    { src: gallery9 },
    { src: gallery10 },
  ],
};

export const products = {
  title: {
    link: {
      text: "Check Our Product",
      path: "",
    },
    mainTitle: "Crafted with excellent material",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
};

export const shopItems = [
  {
    img: greenChair,
    sale: "-35%",
    title: "Lifestyle Green Chair",
    prevPrice: "$105.00",
    currentPrice: "$105.00",
  },
  {
    img: cupboard,
    sale: "-35%",
    title: "Modern Cupboard",
    prevPrice: "$105.00",
    currentPrice: "$185.00",
  },
  {
    img: fabricChair,
    sale: "0",
    title: "Fabric Chair",
    prevPrice: "$105.00",
    currentPrice: "$95.00",
  },
  {
    img: armchair,
    sale: "-35%",
    title: "White Armchair",
    prevPrice: "$105.00",
    currentPrice: "$125.00",
  },
  {
    img: brownSofa,
    sale: "0",
    title: "Brown Sofa",
    prevPrice: "$105.00",
    currentPrice: "$365.00",
  },
  {
    img: woodenChair,
    sale: "-25%",
    title: "Wooden Chair",
    prevPrice: "",
    currentPrice: "$155.00",
  },
  {
    img: lamp,
    sale: "0",
    title: "Modern Lamp",
    prevPrice: "",
    currentPrice: "$65.00",
  },
  {
    img: springbed,
    sale: "-25%",
    title: "Comfy Springbed",
    prevPrice: "$105.00",
    currentPrice: "$1525.00",
  },
];

export const comments = {
  title: {
    link: {
      text: "Testimonial Section",
      path: "",
    },
    mainTitle: "What Our Customer Say",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },

  slider: [
    {
      text: "I've always been hesitant about buying furniture online, but this website exceeded my expectations. The selection is incredible, offering a wide range of styles to suit any taste. The detailed product descriptions and high-resolution images provided a clear picture of what to expect. I took the plunge and ordered a sofa, and I'm thrilled with the result. The quality is superb, and it's even more beautiful in person. I'm grateful for the excellent customer service throughout the process. This website has won my trust, and I'll be recommending it to all my friends!",
      author: "Johny Assloy",
      img: johny,
      stars: 4.5,
    },
    {
      text: "I recently purchased furniture from this website, and I couldn't be happier with my experience. The quality of the furniture is outstanding, and it arrived exactly as described. The customer service was top-notch, with prompt and helpful responses to all my inquiries. I highly recommend this website for anyone looking to buy furniture for their home.",
      author: "Johny Assloy",
      img: johny,
      stars: 4.5,
    },
    {
      text: "Shopping for furniture has never been easier! I stumbled upon this website and decided to give it a try. From browsing the extensive catalog to placing my order, the process was smooth and seamless. The website's intuitive interface made it simple to find the perfect pieces for my home. The furniture arrived on time, well-packaged, and in excellent condition. I'm thrilled with my purchase and will definitely be a returning customer.",
      author: "Sarah H",
      img: sarah,
      stars: 5,
    },
  ],
};

export const reviews = {
  title: {
    link: {
      text: "Review",
      path: "",
    },
    mainTitle: "Our Furniture Review",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  slider: [
    {
      text: "I've always been hesitant about buying furniture online, but this website exceeded my expectations. The selection is incredible, offering a wide range of styles to suit any taste.",
      position: "Directur Google Inc.",
      author: "Kim Shan Dhi",
      img: kim,
      stars: 4.5,
      productImg: sofa,
    },
    {
      text: "I've always been hesitant about buying furniture online, but this website exceeded my expectations. The selection is incredible, offering a wide range of styles to suit any taste.",
      position: "Directur Google Inc.",
      author: "Johny Assloy",
      img: johny,
      stars: 4.5,
      productImg: sofa,
    },
    {
      text: "I've always been hesitant about buying furniture online, but this website exceeded my expectations. The selection is incredible, offering a wide range of styles to suit any taste.",
      position: "Directur Google Inc.",
      author: "Sarah H",
      img: sarah,
      stars: 5,
      productImg: sofa,
    },
  ],
};

export const categories = [
  {
    label: "Wooden Chair",
    path: "",
    text: "Shop now",
    bgColor: "grey",
    bgImg: "chair",
  },
  {
    label: "Bookcase",
    path: "",
    text: "Shop now",
    bgColor: "indigo",
    bgImg: "bookcase",
  },
  {
    label: "Single Sofa",
    path: "",
    text: "Shop now",
    bgColor: "derby",
    bgImg: "sofa",
  },
];

export const gallery = {
  title: {
    link: {
      text: "Check Our Collection",
      path: "",
    },
    mainTitle: "Our Furniture Gallery",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },

  tabs: {
    btns: [
      {
        text: "All",
        id: "all",
        icon: Shop(),
      },
      {
        text: "Best Sellers",
        id: "bestSellers",
        icon: Medal(),
      },
      {
        text: "New",
        id: "new",
        icon: Party(),
      },
      {
        text: "Up Coming",
        id: "upComing",
        icon: Mail(),
      },
    ],

    imgs: [
      {
        src: gallery1,
        id: "new",
      },
      {
        src: gallery2,
        id: "bestSellers",
      },
      {
        src: gallery3,
        id: "bestSellers",
      },
      {
        src: gallery4,
        id: "upComing",
      },
      {
        src: gallery5,
        id: "upComing",
      },
      {
        src: gallery6,
        id: "new",
      },
    ],
  },
};

export const subscribe = {
  title: "Subscribe to get attractive offers on our products",
};

export const footerInfo = {
  descr:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  nav: [
    {
      title: "Category",
      content: [
        { path: "#", text: "Living Room" },
        { path: "#", text: "Bed Room" },
        { path: "#", text: "Kitchen" },
        { path: "#", text: "Bath Room" },
      ],
    },
    {
      title: "Popular Product",
      content: [
        { path: "#", text: "Single Sofa Black" },
        { path: "#", text: "Wooden Bookcase" },
        { path: "#", text: "Wooden Chair" },
        { path: "#", text: "Luxury White Bed" },
      ],
    },
    {
      title: "Sitemap",
      content: [
        { path: "#product", text: "Product" },
        { path: "#gallery", text: "Services" },
        { path: "#reviews", text: "Article" },
        { path: "#comments", text: "About us" },
      ],
    },
    {
      title: "Follow Us",
      content: [
        { path: "#", text: "Facebook" },
        { path: "#", text: "Instagram" },
        { path: "#", text: "TikTok" },
        { path: "#", text: "Youtube" },
      ],
    },
  ],
  rights: "© 2023 by Logo Furniture. All rights reserved.",
};
