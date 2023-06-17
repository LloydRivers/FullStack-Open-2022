const showCurrentPage = (
  action,
  currentPage = "Start Page",
  backPages = null,
  nextPages = null
) => {
  console.log(`\n${action}`);
  console.log("\nCurrent page =", currentPage);
  console.log("Back page = ", backPages ? backPages.peek() : null);
  console.log("Next page = ", nextPages ? nextPages.peek() : null);
};

const newPage = (page, currentPage, backPages, nextPages) => {
  backPages.push(currentPage);
  currentPage = page;
  while (!nextPages.isEmpty()) {
    nextPages.pop();
  }
  showCurrentPage("NEW: ", currentPage, backPages, nextPages);

  return { currentPage, backPages, nextPages };
};

const backPage = (currentPage, backPages, nextPages) => {
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage("Navigated Back", currentPage, backPages, nextPages);

  return { currentPage, backPages, nextPages };
};

const nextPage = (currentPage, backPages, nextPages) => {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage("Navigated Next", currentPage, backPages, nextPages);

  return { currentPage, backPages, nextPages };
};

module.exports = { showCurrentPage, newPage, backPage, nextPage };
