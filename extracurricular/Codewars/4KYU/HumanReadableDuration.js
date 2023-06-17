const formatDuration = (seconds) => {
  // Check if the input is zero
  if (seconds === 0) {
    return "now";
  }

  // Define an object with the time units and their respective values in seconds
  const time = {
    year: 31536000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  // Create an empty object to store the counts for each time unit
  const result = {};

  // Iterate through the time object
  for (const key in time) {
    const value = time[key];

    // Check if the remaining seconds is greater than or equal to the current time unit
    if (seconds >= value) {
      // Calculate the count by dividing the remaining seconds by the value of the current time unit
      // Example: If seconds = 3662 and the current time unit is 'hour' (3600 seconds),
      // the count will be Math.floor(3662 / 3600) = 1
      const count = Math.floor(seconds / value);

      // Store the count in the result object using the key (time unit) as the property name
      // Example: result = { hour: 1 }
      result[key] = count;

      // Subtract the counted seconds from the remaining seconds
      // Example: If seconds = 3662 and the current time unit is 'hour' (3600 seconds),
      // after subtracting the counted seconds, seconds will become 62
      seconds -= count * value;
    }
  }

  // Create an array to store the formatted time units
  const arr = [];

  // Iterate through the result object
  for (const key in result) {
    const value = result[key];

    // Check if the count is greater than 1 to determine whether to add pluralization
    // Example: If value = 2 and key = 'minute', the formatted string will be '2 minutes'
    if (value > 1) {
      arr.push(`${value} ${key}s`);
    } else {
      // If the count is 1, use the singular form of the time unit
      // Example: If value = 1 and key = 'hour', the formatted string will be '1 hour'
      arr.push(`${value} ${key}`);
    }
  }

  // Check if there is only one formatted time unit in the array
  if (arr.length === 1) {
    return arr[0];
  }

  // Remove the last formatted time unit from the array
  const last = arr.pop();

  // Join the formatted time units with commas and add 'and' before the last one
  // Example: If arr = ['1 hour', '1 minute'] and last = '2 seconds',
  // the final formatted string will be '1 hour, 1 minute and 2 seconds'
  return `${arr.join(", ")} and ${last}`;
};

// Example test cases
console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
