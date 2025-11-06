/*Q-TASK:

Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

@MITASK */

function hasProperty(obj: object, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); // false
