describe("Blog app", async function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3003/api/testing/reset");
    const user = {
      name: "name_test",
      username: "username_test",
      password: "password_test",
    };
    cy.request("POST", "http://localhost:3003/api/users/", user);
    cy.visit("http://localhost:3000");
  });

  it("Login form is shown", function () {
    cy.visit("http://localhost:3000");
    cy.contains("proceed to login");
    cy.get("#proceed_to_login").click();
    cy.contains("Blogs");
    cy.contains("login");
  });

  describe("Login", function () {
    it("succeeds with correct credentials", function () {
      cy.get("#proceed_to_login").click();
      cy.get("#username").type("username_test");
      cy.get("#password").type("password_test");
      cy.get("#login-button").click();
      cy.contains("success: username_test");
      cy.contains("Recent blogs:").should("be.visible");
    });

    it("fails with wrong credentials", function () {
      cy.get("#proceed_to_login").click();
      cy.get("#username").type("unknown_user");
      cy.get("#password").type("wrong_password");
      cy.get("#login-button").click();
      cy.get(".error")
        .should("contain", "invalid username or password")
        .and("have.css", "color", "rgb(255, 0, 0)")
        .and("have.css", "border-style", "solid");

      cy.get("html").should("not.contain", "unknown_user logged in");
    });
  });

  describe("When logged in", function () {
    beforeEach(function () {
      cy.get("#proceed_to_login").click();
      cy.login({ username: "username_test", password: "password_test" });
    });

    it("a blog can be created", function () {
      cy.createBlog({
        title: "Here is a new blog",
        author: "Jimmy Riddle",
        url: "https://www.bodybuilding.com/",
      });
    });

    describe("and several blogs exist", function () {
      beforeEach(function () {
        cy.createBlog({
          title: "1st Blogs",
          author: "Hoof Hearted",
          url: "https://www.test.com/",
        });
        cy.createBlog({
          title: "2nd blogs",
          author: "Look Hoof Hearted Now",
          url: "https://www.test.com/",
        });
        cy.createBlog({
          title: "3rd blogs",
          author: "Hoof Hearted again!",
          url: "https://www.test.com/",
        });
      });

      it("one of those can be liked", function () {
        cy.contains("Recent blogs:").should("be.visible");

        cy.contains("1st Blogs").parent().find("button").click();
        cy.get("#like-btn").click();
      });

      it("one of those can be deleted", function () {
        cy.contains("2nd blog").parent().find("button").click();
        cy.get("#delete-btn").click();
        cy.get("html").should("not.contain", "second blog");
      });

      it("they are ordered by the number of likes in descending order", async function () {
        cy.contains("3rd blog").parent().find("button").click();
        cy.get("#like-btn").click().wait(500).click().wait(500);
        cy.contains("3rd blog").parent().find("button").click();

        cy.contains("2nd blog").parent().find("button").click();
        cy.get("#like-btn")
          .click()
          .wait(500)
          .click()
          .wait(500)
          .click()
          .wait(500);

        cy.get(".blog").eq(0).should("contain", "2nd blog");
        cy.get(".blog").eq(1).should("contain", "3rd blog");
        cy.get(".blog").eq(2).should("contain", "1st blog");
      });
    });
  });
});
