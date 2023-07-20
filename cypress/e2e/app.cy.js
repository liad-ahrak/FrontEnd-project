describe('Navigation to login page', () => {
    it('should navigate to the login page', () => {
      // Start from the index page
      cy.visit("/")
   
      // Find a link with an href attribute containing "about" and click it
      cy.get('a[href*="login"]').click()
   
      // The new url should include "/about"
      cy.url().should('include', '/login')
   
      // The new page should contain  "Login"
      cy.contains('Login')
    })
    
  })

describe('Navigation to signup page', () => {
  it('should navigate to the signup page', () => {
    // Start from the index page
    cy.visit("/")
  
    // Find a link with an href attribute containing "singup" and click it
    cy.get('a[href*="/TokenAuth/signup"]').click()
   
    // The new page should contain "Sign Up"
    cy.contains('Sign Up')
  })
})

describe('Navigation to unAthorize page', () => {
  it('should navigate to the unAthorize page', () => {
    // Start from the index page
    cy.visit("http://localhost:3000/profile")
  
    // The new page should contain "Sign Up"
    cy.contains('Please login first')
  })
})

describe('signup page new user', () => {
  it('should signup page new user', () => {
    const d = new Date();
    let time = d.getTime();
    // Start from the index page
    cy.visit("/")
  
    // Find a link with an href attribute containing "singup" and click it
    cy.get('a[href*="/TokenAuth/signup"]').click()

    // Fill input fields
    cy.get('input[name="name"]').type(d.getTime())
    cy.get('input[name="userName"]').type(d.getTime())
    cy.get('input[name="email"]').type(d.getTime() + "@gmail.com")
    cy.get('input[name="psw"]').type(d.getTime())
    cy.get('input[name="psw-repeat"]').type(d.getTime())

    // Click on submit button
    cy.get('button[type="submit"]').click()

    // The new page should contain "Sign Up"
    cy.contains('Login')
  })
})

describe('login user', () => {
  it('login user', () => {
    // Start from the index page
    cy.visit("/")
  
    // Find a link with an href attribute containing "singup" and click it
    cy.get('a[href*="/TokenAuth/login"]').click()

    // Fill input fields
    cy.get('input[name="email"]').type("q")
    cy.get('input[name="password"]').type("q")

    // Click on submit button
    cy.get('button[type="submit"]').click()

    // The new page should contain "Sign Up"
    cy.contains('My drafts')
  })
})