export default interface Item {
  sku: string; // Unique identifier for the item
  name: string;
  size: string;
  price: number;
  stockLevel: number;
  quantity: number; //optional
}
