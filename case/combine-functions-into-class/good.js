// 原则：“如果发现一组函数形影不离地操作同一块数据（通常是将这块数据作为参数传递给函数），就是时候组建一个类了”

class Reading { 
  base() {...}
  taxableCharge() {...} 
  calculateBaseCharge() {...}
}