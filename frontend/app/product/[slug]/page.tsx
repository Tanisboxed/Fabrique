import { useState } from 'react';
import Image from 'next/image';
import { StarIcon } from 'lucide-react';

export default async function ProductPage({ params }: { params: { slug: string } }) {
    // Fetch product data based on the slug (dynamic route parameter)
    const product = await fetchProductData(params.slug);
  
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState('Large');
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
  
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="flex gap-4 md:w-1/2">
            <div className="flex flex-col gap-4">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-2 cursor-pointer ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={img}
                    alt={`Product view ${index + 1}`}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex-1">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
  
          {/* Product Info */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-gray-600">{product.rating}/5</span>
            </div>
  
            <div className="mt-4">
              <span className="text-2xl font-bold">${product.price}</span>
              <span className="ml-2 text-gray-500 line-through">
                ${product.originalPrice}
              </span>
              <span className="ml-2 text-red-500">
                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            </div>
  
            <p className="mt-4 text-gray-600">{product.description}</p>
  
            {/* Color Selection */}
            <div className="mt-6">
              <h3 className="text-sm font-medium">Select Colors</h3>
              <div className="flex gap-2 mt-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full ${
                      selectedColor === index ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(index)}
                  />
                ))}
              </div>
            </div>
  
            {/* Size Selection */}
            <div className="mt-6">
              <h3 className="text-sm font-medium">Choose Size</h3>
              <div className="flex gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-md ${
                      selectedSize === size
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
  
            {/* Quantity and Add to Cart */}
            <div className="mt-6 flex gap-4">
              <div className="flex items-center border rounded-md">
                <button
                  className="px-4 py-2 text-gray-600"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-16 text-center border-x"
                />
                <button
                  className="px-4 py-2 text-gray-600"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Mock function to simulate product data fetching
  async function fetchProductData(slug: string) {
    const products = {
      'one-life-graphic-t-shirt': {
        id: '1',
        name: 'One Life Graphic T-Shirt',
        price: 260,
        originalPrice: 300,
        description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
        rating: 4.5,
        images: ['/path-to-image1.jpg', '/path-to-image2.jpg', '/path-to-image3.jpg'],
        colors: ['#4A5D4B', '#2F4F4F', '#000080'],
        sizes: ['Small', 'Medium', 'Large', 'X-Large'],
      },
    };
    return products[slug];
  }