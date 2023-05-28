/*
The getValue function is a generic function that takes two arguments: obj and key. The purpose of this function is to retrieve a value from an object based on a given key.

Let's break down the generic constraints used in this function:

T extends object: This constraint specifies that the generic type T must be a subtype of object. In other words, T must be an object type or a more specific subtype of the object type. This constraint ensures that the obj argument passed to the function is an object.

K extends keyof T: This constraint specifies that the generic type K must be a subtype of keyof T. The keyof operator in TypeScript returns a union type of all property names of an object type. So, keyof T represents all possible keys of the object type T. This constraint ensures that the key argument passed to the function is a valid key of the obj object.

Now, let's understand the function signature and its return type:

The function signature (obj: T, key: K) indicates that the function takes an object of type T and a key of type K.

The return type of the function is T[K], which represents the type of the value associated with the given key K in the object T. It uses an indexed access type to lookup the value type from the object type.

The body of the function simply accesses the value of the key property in the obj object using the obj[key] syntax and returns it.

By applying these generic constraints, TypeScript ensures that the getValue function can only be used with objects (T extends object) and valid keys of those objects (K extends keyof T). This provides type safety and prevents potential runtime errors when accessing properties dynamically.
*/
export function getValue<T extends object, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}
