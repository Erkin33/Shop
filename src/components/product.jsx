import { useState } from "react";
export default function ProductList({ products }) {
  const [visibleIcons, setVisibleIcons] = useState({}); // Объект для отслеживания видимости иконок по id

  const toggleIcons = (productId) => {
    setVisibleIcons((prev) => ({
      ...prev,
      [productId]: !prev[productId], // Переключаем видимость для конкретного товара
    }));
  };

  return (
    <div></div>
  );
}
