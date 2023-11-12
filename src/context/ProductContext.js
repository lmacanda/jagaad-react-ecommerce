import React, { createContext, useContext, useState } from "react";
import IMG1 from "../images/IMG1.png";
import IMG2 from "../images/IMG2.png";
import IMG3 from "../images/IMG3.png";
import IMG4 from "../images/IMG4.png";
import IMG5 from "../images/IMG5.png";
import IMG6 from "../images/IMG6.png";
import IMG7 from "../images/IMG7.png";
import IMG8 from "../images/IMG8.png";
import IMG9 from "../images/IMG9.png";
import IMG10 from "../images/IMG10.png";
import IMG11 from "../images/IMG11.png";
import IMG12 from "../images/IMG12.png";
import IMG13 from "../images/IMG13.png";
import IMG14 from "../images/IMG14.png";
import IMG15 from "../images/IMG15.png";
import IMG16 from "../images/IMG16.png";
import IMG1_1 from "../images/IMG1_1.png";
import IMG1_2 from "../images/IMG1_2.png";
import IMG1_3 from "../images/IMG1_3.png";
import IMG1_4 from "../images/IMG1_4.png";

// Create a context
const ProductContext = createContext();

// Create a provider component
export const ProductProvider = ({ children }) => {
  // Placeholder data for product
  const initialProduct = [
    {
      id: 1,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG1],
      name: "Trenton modular sofa_3",
      price: "25,000.00",
      description:
        "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      colors: [
        "rgba(129, 109, 250, 1)",
        "rgba(0, 0, 0, 1)",
        "rgba(205, 186, 123, 1)",
      ],
      sizes: ["L", "XL", "XS"],
      sku: "SS001",
      category: "Sofas",
      tags: ["sofa", "furniture", "living room"],
      style: {
        // Add the styling object for Product 1 here
        transform: "translateY(30px)",
      }
    },
    {
      id: 2,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG2],
      name: "Granite dining table with dining chair",
      price: "25,000.00",
      description:
        "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      colors: ["red", "black", "blue"],
      sizes: ["S", "M", "L", "XL"],
      sku: "SS001",
      category: "Sofas",
      tags: ["sofa", "furniture", "living room"],
    },
    {
      id: 3,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG3],
      name: "Outdoor bar table and stool",
      price: 30,
      description: "Description for Product 3",
      colors: ["red", "black", "blue"],
      sizes: ["S", "M", "L", "XL"],
      sku: "SS001",
      category: "Sofas",
      tags: ["sofa", "furniture", "living room"],
    },
    {
      id: 4,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG4],
      name: "Plain console with teak mirror",
      price: 20,
      description: "Description for Product 2",
      colors: ["red", "black", "blue"],
      sizes: ["S", "M", "L", "XL"],
      sku: "SS001",
      category: "Sofas",
      tags: ["sofa", "furniture", "living room"],
    },
    {
      id: 5,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG5],
      name: "Grain coffee table",
      price: 20,
      description: "Description for Product 2",
      colors: ["red", "black", "blue"],
      sizes: ["S", "M", "L", "XL"],
      sku: "SS001",
      category: "Sofas",
      tags: ["sofa", "furniture", "living room"],
    },
    {
      id: 6,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG6],
      name: "Kent coffee table",
      price: 20,
      description: "Description for Product 2",
      colors: ["red", "black", "blue"],
      sizes: ["S", "M", "L", "XL"],
      sku: "SS001",
      category: "Sofas",
      tags: ["sofa", "furniture", "living room"],
    },
    {
      id: 7,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG7],
      name: "Round coffee table_color 2",
      price: 20,
      description: "Description for Product 2",
      colors: ["red", "black", "blue"],
      sizes: ["S", "M", "L", "XL"],
      sku: "SS001",
      category: "Sofas",
      tags: ["sofa", "furniture", "living room"],
      style: {
        // Add the styling object for Product 1 here
        transform: "translateY(30px)",
      }
    },
    {
      id: 8,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG8],
      name: "Reclaimed teak coffee table",
      price: 20,
      description: "Description for Product 2",
      colors: ["red", "black", "blue"],
      sizes: ["S", "M", "L", "XL"],
      sku: "SS001",
      category: "Sofas",
      tags: ["sofa", "furniture", "living room"],
    },
    {
      id: 9,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG9],
      name: "Plain console_",
      price: 20,
      description: "Description for Product 2",
      colors: ["red", "black", "blue"],
      sizes: ["S", "M", "L", "XL"],
      sku: "SS001",
      category: "Sofas",
      tags: ["sofa", "furniture", "living room"],
    },
    {
      id: 10,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG10],
      name: "Reclaimed teak Sideboard 1",
      price: 20,
      description: "Description for Product 2",
      colors: ["red", "black", "blue"],
      sizes: ["S", "M", "L", "XL"],
      style: {
        // Add the styling object for Product 1 here
        transform: "translateY(30px)",
      }
    },
    {
      id: 11,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG11],
      name: "SJP_0825  1",
      price: 20,
      description: "Description for Product 2",
      colors: ["red", "black", "blue"],
      sizes: ["S", "M", "L", "XL"],
      sku: "SS001",
      category: "Sofas",
      tags: ["sofa", "furniture", "living room"],
    },
    {
      id: 12,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG12],
      name: "Bella chair and table 1",
      price: 20,
      description: "Description for Product 2",
      colors: ["red", "black", "blue"],
      sizes: ["S", "M", "L", "XL"],
      sku: "SS001",
      category: "Sofas",
      tags: ["sofa", "furniture", "living room"],
    },
    {
      id: 13,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG13],
      name: "Granite square side table 2",
      price: 20,
      description: "Description for Product 2",
      colors: ["red", "black", "blue"],
      sizes: ["S", "M", "L", "XL"],
      sku: "SS001",
      category: "Sofas",
      tags: ["sofa", "furniture", "living room"],
      style: {
        // Add the styling object for Product 1 here
        transform: "translateY(30px)",
      }
    },
    {
      id: 14,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG14],
      name: "Asgaard sofa",
      price: 20,
      description: "Description for Product 2",
      colors: ["red", "black", "blue"],
      sizes: ["S", "M", "L", "XL"],
      sku: "SS001",
      category: "Sofas",
      tags: ["sofa", "furniture", "living room"],
    },
    {
      id: 15,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG15],
      name: "Maya sofa three seater",
      price: 20,
      description: "Description for Product 2",
      colors: ["red", "black", "blue"],
      sizes: ["S", "M", "L", "XL"],
      sku: "SS001",
      category: "Sofas",
      tags: ["sofa", "furniture", "living room"],
    },
    {
      id: 16,
      images: [IMG1_1, IMG1_2, IMG1_3, IMG1_4, IMG16],
      name: "Outdoor sofa set 1",
      price: 20,
      description: "Description for Product 2",
      colors: ["red", "black", "blue"],
      sizes: ["S", "M", "L", "XL"],
      sku: "SS001",
      category: "Sofas",
      tags: ["sofa", "furniture", "living room"],
    },
    // Add more product as needed
  ];

  // State to hold the product
  const [product] = useState(initialProduct);

  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to access the product
export const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
