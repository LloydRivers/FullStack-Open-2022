import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:

// Define a function called `getMaxPrice` that takes a parameter `priceBracket` of type `PriceBracket`.
const getMaxPrice = (priceBracket: PriceBracket) => {
  // Use a switch statement to evaluate the value of `priceBracket`.
  switch (priceBracket) {
    // If `priceBracket` is equal to `PriceBracket.Low`, return the value 10.
    case PriceBracket.Low:
      return 10;

    // If `priceBracket` is equal to `PriceBracket.Medium`, return the value 20.
    case PriceBracket.Medium:
      return 20;

    // If `priceBracket` is equal to `PriceBracket.High`, return the value 30.
    case PriceBracket.High:
      return 30;

    // If `priceBracket` is not equal to any of the `PriceBracket` enum values, return the value 0.
    default:
      return 0;
  }
};

/// Add your getOrders() function below:
const getOrders = (price: PriceBracket, orders: Order[][]) => {
  let filteredOrders: Order[][] = [];
  orders.forEach((restaurant: Order[]) => {
    const result = restaurant.filter(
      (order: Order) => order.price <= getMaxPrice(price)
    );
    filteredOrders.push(result);
  });

  return filteredOrders;
};
/// Add your printOrders() function below:
const printOrders = (restaurants: Restaurant[], orders: Order[][]) => {
  restaurants.forEach((restaurant: Restaurant, index: number) => {
    if (orders[index].length === 0) return;
    const restaurantName = restaurant.name;
    console.log(`\n ${restaurantName} #${index} `);

    orders[index].forEach((order: Order) => {
      console.log(`- ${order.name}: ${order.price}`);
    });
  });
};
/// Main
const elligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, elligibleOrders);
