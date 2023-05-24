// Example taken from https://ultimatecourses.com/blog/use-intersection-types-to-combine-types-in-typescript

// Define the Order interface
interface Order {
  total: number;
  currency: string;
}

// Define the Stripe interface
interface Stripe {
  card: number;
}

// Define the PayPal interface
interface PayPal {
  email: string;
}

// Define a type that combines Order and Stripe interfaces
type StripeOrder = Order & Stripe;

// Define a type that combines Order and PayPal interfaces
type PayPalOrder = Order & PayPal;
/*
The & syntax is used in TypeScript to create an intersection type. 
In the code type PayPalOrder = Order & PayPal;, it means that PayPalOrder is a type that has all the properties of both the Order interface and the PayPal interface. 
This allows you to create a type that combines the properties of multiple types.
*/

// Define a function to check if the order is a Stripe order
const isStripe = (order: StripeOrder | PayPalOrder): order is StripeOrder => {
  // Check if "card" property is present in the order object
  return "card" in (order as StripeOrder);
  /*
  The bracket () syntax in the line return "card" in (order as StripeOrder); is used for type assertion in TypeScript. The as keyword is used for type casting, allowing you to treat an expression as a different type than its original inferred or declared type. In this case, (order as StripeOrder) is casting the order variable to the StripeOrder type. The parentheses () are used to group the expression and ensure that the type assertion is applied to the entire expression. Then, the in operator checks if the "card" property exists in the casted order object, and the result is returned as a boolean value.
  */
};

// Define a function to process the order
const processOrder = (order: StripeOrder | PayPalOrder) => {
  if (isStripe(order)) {
    // If the order is a Stripe order
    // Access the properties specific to Stripe
    // ✅ order.card
    // ❌ order.email
  } else {
    // If the order is a PayPal order
    // Access the properties specific to PayPal
    // ✅ order.email
    // ❌ order.card
  }
};
