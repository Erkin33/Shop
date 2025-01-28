import { useRouter } from "next/router";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import TopId from "@/components/topid";
import Listfooter from "@/components/listfooter";
import Aboutheader from "@/components/aboutheader";
import ProductTabs from "@/components/addition";
import BlockList from "@/components/listproductblock";
import ListMainProduct from "@/components/mainProductlist";

const products = [
  { id: "one", name: "Romantic Florals",reinfo: 'Rings & Earrings', price: 10, image: "/Shorts/Black.webp", description: "Description for Product 1" },
  { id: "two", name: "Romantic Florals",reinfo: 'Rings & Earrings', price: 20, image: "/Shorts/black2.webp", description: "Description for Product 2" },
  { id: "three", name: "Romantic Florals",reinfo: 'Rings & Earrings', price: 40, image: "/Shorts/black3.webp", description: "Description for Product 3" },
  { id: "four", name: "Romantic Florals",reinfo: 'Rings & Earrings', price: 60, image: "/Shorts/black3.webp", description: "Description for Product 4" },
];

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1); // Состояние для количества
  const upquant = ()=>{
    setQuantity(quantity + 1)
  }
  const downquant = ()=>{
    setQuantity(quantity - 1)
  }
  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found</p>;

  // Рассчитываем общую цену
  const totalPrice = (quantity * product.price).toFixed(2);

  // Обработка изменения количества
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value > 0 ? value : 1); // Минимум 1
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="h-full w-full">
      {/* Header */}
      <Aboutheader/>
      {/* Name */}
      <TopId/>
      {/* товар и данные */}
      <BlockList/>
      {/* Текст */}
      <ProductTabs/>
      {/* Товары */}
      <ListMainProduct/>
      {/* Футер */}
      <Listfooter/>
    </div>
  );
}
