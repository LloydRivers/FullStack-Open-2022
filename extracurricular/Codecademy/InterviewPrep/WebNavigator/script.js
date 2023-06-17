const Stack = require("./Stack.js");
const prompt = require("prompt-sync")();
const {
  showCurrentPage,
  newPage,
  backPage,
  nextPage,
} = require("./helpers.js");

let backPages = new Stack(),
  nextPages = new Stack(),
  currentPage = "Start Page";

const baseInfo = "\nEnter a url";
const backInfo = "B|b for back page";
const nextInfo = "N|n for next page";
const quitInfo = "Q|q for quit";
const question = "Where would you like to go today? ";

let finish = false;
let showBack = false;
let showNext = false;

showCurrentPage(currentPage);
const response = prompt("How are you today?");
while (finish === false) {
  let instructions = baseInfo;

  if (backPages.peek() != null) {
    instructions = `${instructions}, ${backInfo}`;
    showBack = true;
  } else {
    showBack = false;
  }

  if (nextPages.peek() !== null) {
    instructions = `${instructions}, ${nextInfo}`;
    showNext = true;
  } else {
    showNext = false;
  }

  instructions = `${instructions}, ${quitInfo}.`;
  console.log(instructions);

  // const response = prompt("How are you today?");
  const answer = prompt(question);
  const lowerCaseAnswer = answer.toLowerCase();

  if (
    lowerCaseAnswer !== "n" &&
    lowerCaseAnswer !== "b" &&
    lowerCaseAnswer !== "q"
  ) {
    const updatedPages = newPage(answer, currentPage, backPages, nextPages);
    currentPage = updatedPages.currentPage;
    backPages = updatedPages.backPages;
    nextPages = updatedPages.nextPages;
  } else if (showNext === true && lowerCaseAnswer === "n") {
    const updatedPages = nextPage(currentPage, backPages, nextPages);
    currentPage = updatedPages.currentPage;
    backPages = updatedPages.backPages;
    nextPages = updatedPages.nextPages;
  } else if (showBack === true && lowerCaseAnswer === "b") {
    const updatedPages = backPage(currentPage, backPages, nextPages);
    currentPage = updatedPages.currentPage;
    backPages = updatedPages.backPages;
    nextPages = updatedPages.nextPages;
  } else if (lowerCaseAnswer === "b") {
    console.log("Cannot go back a page. Stack is empty.");
  } else if (lowerCaseAnswer === "n") {
    console.log("Cannot go to the next page. Stack is empty.");
  } else if (lowerCaseAnswer === "q") {
    finish = true;
  }
}
