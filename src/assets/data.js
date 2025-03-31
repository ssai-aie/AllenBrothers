export const mainCategories = ["Beef", "Lamb", "Pork", "Seafood", "Poultry", "Veal", "Game"];

export const otherCategories = ["Gift Center", "Bundles", "Deals!"];


export const OrderInfoSection = {
    infoItems: [
      {
        icon: "fa-truck-front",
        title: "Order before Wednesday, Noon 12:00pm CST to receive your order on Friday of the same week!",
        description: "Allen Brothers Prime Delivery Days: Wednesday, Thursday, or Friday.",
        linkText: "Shipping Page",
        linkUrl: "#"
      },
      {
        icon: "fa-box",
        title: "Premium Packaging for Fresh Delivery",
        description: "All meats are individually shrink-wrapped and flash frozen to lock in all natural juices and flavor.",
        linkText: "Storage & Thawing",
        linkUrl: "#"
      },
      {
        icon: "fa-tags",
        title: "Bundle Deal",
        description: "This item is part of the USDA Prime Steak Filet/Strip Combo.",
        linkText: "See Bundle Deal",
        linkUrl: "#"
      }
    ]
  };


export const productData = {
    title: "About the Product",
    description:
      "Our very own Angus Filets Mignon, from 100% Black Angus cattle raised in the Midwest heartland by a select few family-owned ranches and farms. We hand-select for a high degree of marbling and tenderness that you’ll savor and hand-cut by highly skilled butchers applying the same artisanal standards pioneered by the neighborhood butcher. All of this combined with our patented wet-aging process results in consistently exceptional flavor and texture beyond compare. Allen Brothers Angus earns some of the highest accolades of any USDA Certified Premium Beef Programs.",
    cookingInstructions: {
      filetMignon: {
        servingSize: 1,
        weight: "8 ounce",
        methods: {
          searRoast: {
            title: "Sear & Roast",
            steps: [
              "Preheat oven to 400°F.",
              "Season filets with salt and pepper.",
              "In skillet, heat 2 teaspoons of olive oil on medium-high heat until almost smoking.",
              "Sear filets 1 minute on each side.",
              "Roast in oven 6–8 minutes on each side for medium-rare.",
            ],
          },
          grill: {
            title: "Grill",
            steps: [
              "Heat grill to medium-high.",
              "Lightly brush filets with olive oil and season with salt and pepper.",
              "Grill 4–5 minutes on each side for medium-rare.",
            ],
          },
          broil: {
            title: "Broil",
            steps: [
              "Preheat broiler to high.",
              "Lightly brush filets with olive oil and season with salt and pepper.",
              "Broil 5–7 minutes on each side for medium-rare.",
            ],
          },
        },
      },
    },
  };


  export const similarProducts = [
    {
      id: 1,
      name: "Allen Brothers Angus Filet Mignon",
      price: "$69.95",
      image: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124894/usda-prime-black-angus-filet-mignon-barrel-cut.d8cc2329b1333ba156de95d06ab84cb4.jpg?ixlib=react-9.9.0&ar=1%3A1&fit=crop&w=1080&auto=format",
    },
    {
      id: 2,
      name: "Wagyu Filet Mignon",
      price: "$69.95",
      image: "https://cdn.shopify.com/s/files/1/0012/4328/3505/files/120721.WagyuShop.Filet.025_600x600.jpg?v=1639117518",
    },
    {
      id: 3,
      name: "USDA Prime Bone-In Filet Mignon",
      price: "$69.95",
      image: "https://assets2.kansascitysteaks.com/dyn-images/pdp_hero/Filet_Bone_In_SU17-8cb495950f0d9c9f73829717c9bf1ebb.jpg",
    },
    {
      id: 4,
      name: "Individual Beef Wellington",
      price: "$69.95",
      image: "https://static01.nyt.com/images/2022/02/09/dining/04fortworex-individual-beef-wellingtons/04for-tworex-individual-beef-wellingtons-mediumSquareAt3X.jpg",
    },
    {
      id: 5,
      name: "Dry-Aged Porterhouse Steak",
      price: "$89.95",
      image: "https://shop.lafrieda.com/cdn/shop/products/ChopHousePorter-1496-2.jpg?v=1659498137&width=1080",
    },
    {
      id: 6,
      name: "Japanese A5 Wagyu Striploin",
      price: "$249.95",
      image: "https://petruscocaviar.com/cdn/shop/files/Screenshot2024-02-28131158_1080x.png?v=1735330759",
    },
    {
      id: 7,
      name: "Prime Ribeye Steak",
      price: "$79.95",
      image: "https://www.allenbrothers.com/dam/AB/catalog/images/product/Prime-Boneless-Ribeye_2021-06.jpg",
    },
    {
      id: 8,
      name: "Tomahawk Ribeye Steak",
      price: "$119.95",
      image: "https://i0.wp.com/fedandfull.com/wp-content/uploads/2019/02/Grilled-tomahawk-rib-eye.jpg?resize=1200%2C1600&ssl=1",
    },
    {
      id: 9,
      name: "Dry-Aged New York Strip",
      price: "$99.95",
      image: "https://newyorkprimebeef.com/cdn/shop/files/ny-prime-beef-steaks-Dry-Aged-USDA-Prime-Bone-In-NY-Strip-Cooked-Horiz.jpg?v=1701900925&width=1100",
    },
    {
      id: 10,
      name: "Kobe Beef Sliders",
      price: "$59.95",
      image: "https://afm-6b83.kxcdn.com/wp-content/uploads/2017/11/KobeBeefSilders_0316.jpg",
    },
    {
      id: 11,
      name: "Chateaubriand Roast",
      price: "$159.95",
      image: "https://www.dukeshill.co.uk/cdn/shop/articles/20230427150215-chateaubriand_1024x1024.jpg?v=1727426983",
    },
    {
      id: 12,
      name: "Prime Brisket",
      price: "$129.95",
      image: "https://leelands.co.nz/cdn/shop/products/Beef5_Brisket_1296x.jpg?v=1637791623",
    },
  ];

  export const reviewsData = [
    {
      id: 1,
      customer: "John Doe",
      title: "Fantastic Steak",
      verified: true,
      text: "This steak was absolutely delicious! Cooked to perfection, juicy, and full of flavor. I was a little skeptical at first, but it exceeded all expectations. The seasoning was spot on, and it had just the right amount of marbling. Definitely ordering again soon!",
      date: "19 Apr 2022",
      helpful: 6,
    },
    {
      id: 2,
      customer: "Sarah Thompson",
      title: "Best Filet Ever!",
      verified: true,
      text: "The tenderness and taste are unmatched. This is my go-to for special occasions! The steak was buttery soft, and I barely needed a knife to cut through it. My family loved it, and we’ll be making this a regular purchase from now on!",
      date: "22 Apr 2022",
      helpful: 12,
    },
    {
      id: 3,
      customer: "Michael Brown",
      title: "Juicy and Flavorful",
      verified: true,
      text: "I was pleasantly surprised by how tender and juicy this steak was. It had the perfect amount of marbling, and every bite was packed with flavor. I grilled it to medium-rare, and it turned out perfect. I highly recommend this cut!",
      date: "25 Apr 2022",
      helpful: 3,
    },
    {
      id: 4,
      customer: "Emily Carter",
      title: "Tender and Delicious",
      verified: true,
      text: "One of the best steaks I’ve ever had. It was incredibly tender and cooked perfectly medium-rare. The texture was just right, and the flavor was rich without being overpowering. I will definitely be buying more for my next family gathering!",
      date: "28 Apr 2022",
      helpful: 5,
    },
    {
      id: 5,
      customer: "David Miller",
      title: "Amazing Quality",
      verified: true,
      text: "I've tried many filets, but this one is by far the best! It was well-packaged, fresh, and had an amazing depth of flavor. You can really tell this is a high-quality cut of meat. Worth every penny, and I’ll be back for more!",
      date: "30 Apr 2022",
      helpful: 7,
    },
    {
      id: 6,
      customer: "Jessica Roberts",
      title: "Melt-in-Your-Mouth Good",
      verified: true,
      text: "Absolutely phenomenal steak! It was so tender that it practically melted in my mouth. I seasoned it lightly with salt and pepper, and that was all it needed. The quality was outstanding, and it tasted like something from a high-end steakhouse.",
      date: "02 May 2022",
      helpful: 9,
    },
    {
      id: 7,
      customer: "Chris Anderson",
      title: "Perfect for Special Occasions",
      verified: true,
      text: "This filet mignon was a showstopper. I made it for my anniversary dinner, and my wife couldn't stop raving about it. The texture, the juiciness, and the rich flavor made it unforgettable. I’ll be ordering more for future celebrations!",
      date: "05 May 2022",
      helpful: 4,
    },
    {
      id: 8,
      customer: "Olivia Martinez",
      title: "Well Worth the Price",
      verified: true,
      text: "I was hesitant to spend a bit more on premium steak, but I’m so glad I did. This was far better than anything I could get at the grocery store. It cooked beautifully and had that perfect steakhouse flavor. Highly recommend!",
      date: "08 May 2022",
      helpful: 11,
    }
];

export const footerData = {
  companyInfo: {
    name: "Allen Brothers",
    tagline: "The Great Steakhouse Steaks®",
    description:
      "Home of The Great Steakhouse Steaks® and the ultimate source for the highest quality USDA Prime and other gourmet products delivered right to your door.",
    socialLinks: [
      { icon: "facebook", url: "#" },
      { icon: "twitter", url: "#" },
      { icon: "instagram", url: "#" },
      { icon: "linkedin", url: "#" },
    ],
  },
  sections: [
    {
      title: "Customer Service",
      links: ["FAQ's", "Order Tracking", "Shipping", "Returns", "Our Guarantee"],
    },
    {
      title: "Resources",
      links: [
        "Cooking Guide",
        "Steaks Insider Blog",
        "Shop Our Gallery",
        "Storage & Thawing",
        "Catalog Request",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Restaurant Partners",
        "Wholesale Inquiries",
        "Affiliate Program",
        "Careers",
        "Accessibility",
      ],
    },
    {
      title: "Gift Center",
      links: [
        "Gift & Bundles",
        "Corporate Gifting",
        "Holiday Gifts",
        "Gift Cards",
        "Subscriptions",
        "Gift Info",
      ],
    },
  ],
  contactInfo: {
    customerService: {
      title: "Customer Service",
      phone: "1-800-548-7777",
      days: "Monday-Friday",
      hour:"8:00 AM - 5:00 PM CT"
    },
    phoneOrders: {
      title: "Phone Orders",
      phone: "1-800-957-0111",
      days: "Monday-Friday",
      hour:"8:00 AM - 5:00 PM CT"
    },
  },
};


export const pricingOptions = [
  { pack: "1 pack", steaks: "Includes 2 steaks", price: "$XX.XX", discount: "Save 10%" },
  { pack: "2 pack", steaks: "Includes 4 steaks", price: "$XX.XX", discount: "Save 10%" },
  { pack: "3 pack", steaks: "Includes 6 steaks", price: "$XX.XX", discount: "Save 15%" },
  { pack: "4 pack", steaks: "Includes 8 steaks", price: "$XX.XX", discount: "Save 20%" }
];


// List of product categories
export const meatCategories = ["Beef", "Lamb", "Pork", "Seafood", "Poultry", "Veal", "Game"];

// List of additional categories (specialty)
export const specialCategories = [
  { name: "Gift Center", isDeal: false },
  { name: "Bundles", isDeal: false },
  { name: "Deals!", isDeal: true } // Marked as a deal
];


export const product = {
  name: "Allen Brothers Angus Filet Mignon",
  isOnSale: true,
  rating: 5,
  reviewCount: 69,
  packDetails: "2 steaks per pack",
  itemCode: "#99085",
  weights: [
    { size: "6 oz.", thickness: "Approx. 1.5\" Thick" },
    { size: "8 oz.", thickness: "Approx. 2\" Thick" },
    { size: "10 oz.", thickness: "Approx. 2.5\" Thick" }
  ],
  price: 64.94,
  originalPrice: 99.95,
  discount: "Save $30.00 (30%)"
};

export const productImages = {
  thumbnails: [
    { type: "image", src: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124894/usda-prime-black-angus-filet-mignon-barrel-cut.d8cc2329b1333ba156de95d06ab84cb4.jpg?ixlib=react-9.9.0&ar=1%3A1&fit=crop&w=1080&auto=format", alt: "Thumbnail 1" },
    { type: "image", src: "https://trailcrestfarm.com/wp-content/uploads/2023/03/angus-filet-mignon-steak-prepared.jpg", alt: "Thumbnail 2" },
    { type: "video", src: "https://www.youtube.com/embed/psp702ghkaI?si=LtEs_uOKapMG93Bm", alt: "Product Video" }
  ],
  mainImage: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124894/usda-prime-black-angus-filet-mignon-barrel-cut.d8cc2329b1333ba156de95d06ab84cb4.jpg?ixlib=react-9.9.0&ar=1%3A1&fit=crop&w=1080&auto=format",
  bestFor: [
    { icon: "fa-solid fa-burger", text: "Grilling" },
    { icon: "fa-solid fa-kitchen-set", text: "On the Skillet" }
  ],
  highlights: [
    "Premium quality Angus beef, aged for optimal tenderness.",
    "Individually vacuum-sealed for freshness and easy storage.",
    "Ideal for grilling, pan-searing, or oven cooking."
  ]
};

export const ratingsData = {
  overallRating: 4.5,
  totalReviews: 69,
  ratingBreakdown: [
    { star: 5, count: 30 },
    { star: 4, count: 20 },
    { star: 3, count: 10 },
    { star: 2, count: 5 },
    { star: 1, count: 4 }
  ]
};

export const reviewFilters = ["All Reviews", "Verified Buyers", "With Photos"];

export const sortOptions = ["Most Recent", "Highest Rating", "Lowest Rating"];



