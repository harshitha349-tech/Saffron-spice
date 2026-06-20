// Each food item now has an image URL.
// Free Unsplash images — these load without any API key.
// When a user adds a new item, it uses the defaultImage below.

export const defaultImage =
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&q=80";

export const initialFoods = [
  {
    id: 1,
    name: "Burger",
    category: "Fast Food",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80",
  },
  {
    id: 2,
    name: "Pizza",
    category: "Fast Food",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=80",
  },
  {
    id: 3,
    name: "Biryani",
    category: "Main Course",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&q=80",
  },
];