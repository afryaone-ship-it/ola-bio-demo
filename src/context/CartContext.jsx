import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();
const STORAGE_KEY = 'olabio_cart_v1';

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product, qty = 1, options = '') => {
    setItems((prev) => {
      const key = `${product.id}::${options}`;
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [
        ...prev,
        { key, id: product.id, name: product.name, image: product.image, qty, options },
      ];
    });
  };

  const updateQty = (key, qty) => {
    if (qty <= 0) return removeItem(key);
    setItems((prev) => prev.map((i) => (i.key === key ? { ...i, qty } : i)));
  };

  const removeItem = (key) =>
    setItems((prev) => prev.filter((i) => i.key !== key));

  const clear = () => setItems([]);

  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider value={{ items, addItem, updateQty, removeItem, clear, count }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
