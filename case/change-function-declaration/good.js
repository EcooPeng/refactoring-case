// 原则：给函数起个有意义的名字
function circumference(radius) {
  return 2 * Math.PI * radius;
}


// 原则：添加参数时，使用断言确保所有地方都使用了新参数
function addReservation(customer, isPriority) {
  assert(isPriority === true || isPriority === false);
  this._reservations.push(customer);
}