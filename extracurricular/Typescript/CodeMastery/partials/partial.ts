/*
We define an interface Configuration that represents the configuration object of our application. It has properties apiKey, endpoint, timeout, and retries.

The configureApp function is declared. It takes a single parameter config of type Partial<Configuration>. The Partial utility type makes all properties of Configuration optional.

Inside the function, we define a local variable appConfig of type Configuration. We provide default values for each property, and then use the spread operator (...) to merge the provided config object with the default configuration. This ensures that any provided properties override the defaults.

We log the updated appConfig to the console, showcasing the merged configuration.

We call the configureApp function, passing an object with specific configuration settings. In this case, we update the endpoint property to a different URL and increase the number of retries.

By utilizing the Partial<Configuration> type, we allow users to configure the application by providing only the specific properties they want to change, while keeping the rest as default values.

The code snippet demonstrates how Partial can be used effectively to enable patch-like updates or customization of object properties.

Using Partial can make your code more flexible and reusable, allowing for easy configuration or modification of objects without the need to provide values for all properties.
*/

interface Configuration {
  apiKey: string;
  endpoint: string;
  timeout: number;
  retries: number;
}

function configureApp(config: Partial<Configuration>): void {
  // Update the global application configuration with the provided options
  const appConfig: Configuration = {
    apiKey: "defaultApiKey",
    endpoint: "https://api.example.com",
    timeout: 5000,
    retries: 3,
    // Merge the provided options into the default configuration
    ...config,
  };

  // Log the updated configuration
  console.log("Application configuration:", appConfig);
}

// Configure the application with custom settings
configureApp({
  endpoint: "https://api.example.com/v2",
  retries: 5,
});
