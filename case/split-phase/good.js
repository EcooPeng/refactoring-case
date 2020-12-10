// 原则：“每当看见一段代码在同时处理两件不同的事，我就想把它拆分成各自独立的模块，
// 因为这样到了需要修改的时候，我就可以单独处理每个主题，而不必同时在脑子里考虑两个不同的主题”
// 简单方法：“把一大段行为分成顺序执行的两个阶段。”


const orderRecord = parseOrder(order);
const orderPrice = price(orderRecord, priceList);

function parseOrder(aString) {
　const values = aString.split(/\s+/); 
　return ({
　　productID: values[0].split("-")[1], 
　　quantity: parseInt(values[1]),
　});
}

function price(order, priceList) {
　return order.quantity * priceList[order.productID];
}