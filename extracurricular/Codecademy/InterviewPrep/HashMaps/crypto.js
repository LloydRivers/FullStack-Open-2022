// Import the crypto module
const crypto = require("crypto");

// The password to be hashed
const myPlaintextPassword = "s0//P4$$w0rD";

// Generate a random salt. The randomBytes method will accept a number argument and generate that many random bytes.
const salt = crypto.randomBytes(16).toString("hex");

// Create a hash object. This object can be used to generate a hash of the password.
const hash = crypto.createHash("sha256");

// Add the plaintext password and salt to the hash object
hash.update(myPlaintextPassword + salt);

// Generate the hashed password
const hashedPassword = hash.digest("hex");

console.log("Salt:", salt);
console.log("Hashed Password:", hashedPassword);
