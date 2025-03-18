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
    new Apparels("Denim Jacket", "Men",  "Denim",  "499", "Blue",  "A stylish and durable denim jacket, perfect for casual wear.","blue-denim-jacket.jpg"),
    new Apparels( "Cotton T-Shirt", "Men",  "Cotton", "199", "Red", "Soft and breathable cotton T-shirt, ideal for daily wear.","redt-shirt.jpg"),
    new Apparels("Leather Jacket", "Men",  "Leather", "899", "Black","Premium leather jacket with a modern fit, great for bikers.","black-leather-jacket.jpg"),
    new Apparels("Formal Shirt","Men", "Linen", "349", "Light Blue", "Elegant linen shirt, perfect for office and formal occasions.","blue_formal_shirt.jpg"),
    new Apparels("Jeans", "Men","Denim","399", "Dark Blue","Classic denim jeans with a comfortable slim fit.","dark-blue-denim.jpg"),
    new Apparels("Polo T-Shirt","Men", "Cotton", "299", "Green","Classic polo T-shirt with a breathable cotton finish.","green-tshirt.jpg"),
    new Apparels("Floral Dress", "Women", "Cotton", "499", "Pink", "Elegant floral dress with a flowy silhouette, perfect for summer.", ""),
    new Apparels("Skinny Jeans", "Women", "Denim", "549", "Blue", "Stylish skinny jeans with a stretchable fit.", ""),
    new Apparels("Crop Top", "Women", "Polyester", "199", "White", "Trendy crop top with a round neck, ideal for casual outings.", ""),
    new Apparels("Long Cardigan", "Women", "Wool", "699", "Beige", "Cozy long cardigan to keep you warm during chilly days.", ""),
    new Apparels("Ankle Boots", "Women", "Leather", "799", "Brown","Stylish leather ankle boots with a block heel.", ""),
    new Apparels("Maxi Skirt", "Women", "Chiffon", "399", "Red", "Flowy chiffon maxi skirt with an elegant design.", ""),
    new Apparels("Cartoon T-Shirt", "Kids", "Cotton", "149", "Yellow", "Fun and comfortable T-shirt featuring a cute cartoon print.", ""),
    new Apparels("Denim Shorts", "Kids", "Denim", "249", "Light Blue", "Classic denim shorts with a soft waistband for extra comfort.", ""),
    new Apparels("Hooded Jacket", "Kids", "Fleece", "349", "Red", "Warm and stylish hoodie with a zip closure.", ""),
    new Apparels("Summer Dress", "Kids", "Cotton", "299", "Purple", "Lightweight summer dress with cute floral patterns.", ""),
    new Apparels("Velcro Sneakers", "Kids", "Synthetic", "199", "White", "Easy-to-wear velcro sneakers for active kids.", ""),
    new Apparels("Printed Pajamas", "Kids", "Cotton", "249", "Blue", "Soft and comfy pajama set with fun printed patterns.", "")
  ]

export const uniqueCategories = [...new Set(products.map(item => item.category))]
console.log(uniqueCategories)

export const menCategories = products.filter((item)=>item.category === "Men")
console.log(menCategories)

export const colorFilter = [...new Set(products.map(item => item.colour) )]
console.log(colorFilter)

const sizes = ["XS ", "S ", "M ", "L ", "XL ", "XXL "];

export const getRandomSizes = () => {
  return sizes.sort(() => 0.5 - Math.random()).slice(0, 2);
};
getRandomSizes(); // Example Output: ["M", "XL"]

export const size = getRandomSizes();

