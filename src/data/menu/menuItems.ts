import { Menu } from "../../types/menu/menu";

export const MenuItems: Menu[] = [
  {
    imageUrl: "https://source.unsplash.com/NZMeJsrMC8U",
    name: "coffee",
    price: "180",
    allergens: [],
    nutritions: {
      calories: "125kcal",
      proteins: "12g",
      fat: "3g",
      sodium: "45mg",
      carbohydrate: "31g"
    },
    type: "drink"
  },
  {
    imageUrl: "https://source.unsplash.com/qEcWgrTG578",
    name: "tea",
    price: "170",
    allergens: [],
    nutritions: {
      calories: "103kcal",
      proteins: "2g",
      fat: "3g",
      sodium: "4mg",
      carbohydrate: "11g"
    },
    type: "drink"
  },
  {
    imageUrl: "https://source.unsplash.com/nXKWLn8y9qE",
    name: "cake",
    price: "250",
    allergens: ["wheat", "egg", "dairy"],
    nutritions: {
      calories: "305kcal",
      proteins: "9g",
      fat: "29g",
      sodium: "40mg",
      carbohydrate: "30g"
    },
    type: "food"
  },
  {
    imageUrl: "https://source.unsplash.com/6jHpcBPw7i8",
    name: "chokocake",
    price: "280",
    allergens: ["wheat", "egg", "dairy"],
    nutritions: {
      calories: "256kcal",
      proteins: "8g",
      fat: "25g",
      sodium: "45mg",
      carbohydrate: "131g"
    },
    type: "food"
  }
];
