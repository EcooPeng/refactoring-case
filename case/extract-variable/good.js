// 原则：逻辑块复杂时，局部变量的良好命名，更有利于理解逻辑
// 注意：如果变量在上下文中都有意义，可以使用函数把它暴露出来

const basePrice = order.quantity * order.itemPrice;
const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
const shipping = Math.min(basePrice * 0.1, 100);
return basePrice - quantityDiscount + shipping;