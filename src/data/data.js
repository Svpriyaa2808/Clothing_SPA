function Apparels (name,category,fabric,price,colour,description,image) {
    this.name = name,
    this.category = category,
    this.fabric= fabric,
    this.price = price,
    this.colour = colour,
    this.description=description,
    this.image=image
}

export const products = [
    new Apparels("Denim Jacket", "Men",  "Denim",  "499", "Blue",  "A stylish and durable denim jacket, perfect for casual wear.","blue_denim_jacket.jpeg"),
    new Apparels( "Cotton T-Shirt", "Men",  "Cotton", "199", "White", "Soft and breathable cotton T-shirt, ideal for daily wear.","white_tshirt.jpeg"),
    new Apparels("Leather Jacket", "Men",  "Leather", "899", "Black","Premium leather jacket with a modern fit, great for bikers.","black_leather_jacket.jpeg"),
    new Apparels("Formal Shirt","Men", "Linen", "349", "Light Blue", "Elegant linen shirt, perfect for office and formal occasions.","light_blue_shirt.jpeg"),
    new Apparels("Jeans", "Men","Denim","399", "Dark Blue","Classic denim jeans with a comfortable slim fit.","dark-blue-denim-jeans.jpeg"),
    new Apparels("Polo T-Shirt","Men", "Cotton", "299", "Green","Classic polo T-shirt with a breathable cotton finish.","green_tshirt.png"),
    new Apparels("Cartoon T-Shirt", "Kids","Cotton", "149", "Blue", "Fun cartoon-printed T-shirt, soft and perfect for kids.",""),
    new Apparels("Casual Hoodie","Women", "Polyester", "299", "Pink", "Cozy and stylish hoodie, great for lounging or running errands.","")
  ]

export const uniqueCategories = [...new Set(products.map(item => item.category))]
console.log(uniqueCategories)

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export const getRandomSizes = () => {
  return sizes.sort(() => 0.5 - Math.random()).slice(0, 2);
};
getRandomSizes(); // Example Output: ["M", "XL"]

export const size = getRandomSizes();

