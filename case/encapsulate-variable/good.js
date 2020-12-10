// 原则：封装数据的访问.这样就能把“重新组织数据”的困难任务转化为“重新组织函数”这个相对简单的任务
// 习惯：“我不喜欢get前缀，但我会保留set前缀。”

let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" };

export function defaultOwner() {
  return defaultOwnerData;
}
export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}