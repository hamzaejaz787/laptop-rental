// pages/index.tsx

import { ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

interface Category {
  category: string;
  items: string[];
}

const Sidebar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLaptopListOpen, setIsLaptopListOpen] = useState<boolean>(false);
  const [isCategoryListOpen, setIsCategoryListOpen] = useState<{ [key: string]: boolean }>({});

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleLaptopList = () => {
    setIsLaptopListOpen(!isLaptopListOpen);
  };

  const toggleCategoryList = (category: string) => {
    setIsCategoryListOpen((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const filterItems = (items: string[]) => {
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const laptopItems: string[] = [
    'Dell Laptop',
    'Lenovo Laptop',
    'HP Laptop',
    'Microsoft Laptop',
    'MSI Laptop',
    'Acer Laptop',
    'Asus Laptop',
  ];

  const otherCategories: Category[] = [
    {
      category: 'Tablet Rental',
      items: ['iPad', 'Samsung Tablet', 'Amazon Fire Tablet'],
    },
    {
      category: 'Mobile Rental',
      items: ['iPhone', 'Samsung Galaxy', 'Google Pixel'],
    },
    {
      category: 'AV Rental',
      items: ['Projector', 'Speakers', 'Microphone'],
    },
    {
      category: 'Screen Rental',
      items: ['LED Screen', 'LCD Screen', 'Touch Screen'],
    },
    {
      category: 'Event Wifi Rental',
      items: ['Portable WiFi', 'Hotspot', 'Router'],
    },
    {
      category: 'Event Services',
      items: ['Catering', 'Security', 'Logistics'],
    },
  ];

  return (
    <div className="flex">
      <div className="w-64 bg-gray-50 p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search Products..."
            className="w-full p-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Product Categories</h2>
          <div className="mb-2">
            <h3
              className="text-red-500 font-semibold cursor-pointer flex"
              onClick={toggleLaptopList}
            >
              <ChevronRight className={`mr-2 ${isLaptopListOpen ? 'rotate-90' : ''}`} />
              Laptop Rental
            </h3>
            {isLaptopListOpen && (
              <ul className="pl-4">
                {filterItems(laptopItems).map((item, index) => (
                  <li key={index} className="text-gray-700 flex">
                    <ChevronRight className="mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Other Categories</h2>
          {otherCategories.map((category, index) => (
            <div key={index} className="mb-2">
              <h3
                className="text-gray-700 font-semibold cursor-pointer flex"
                onClick={() => toggleCategoryList(category.category)}
              >
                <ChevronRight className={`mr-2 ${isCategoryListOpen[category.category] ? 'rotate-90' : ''}`} />
                {category.category}
              </h3>
              {isCategoryListOpen[category.category] && (
                <ul className="pl-4">
                  {filterItems(category.items).map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex">
                      <ChevronRight className="mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
