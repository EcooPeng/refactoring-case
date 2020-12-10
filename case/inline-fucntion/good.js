// 原则：“如果有些函数其内部代码和函数名称同样清晰易读，那就应该去掉函数，直接使用其中的代码”

function getRating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}