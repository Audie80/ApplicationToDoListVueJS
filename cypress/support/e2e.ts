// Cypress support file for e2e tests
// Learn more: https://docs.cypress.io/api/introduction/api.html

// Hide fetch/XHR requests in command log
const app = window.top as Window | null

if (app?.document.head && !app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style')
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }'
  style.setAttribute('data-hide-command-log-request', '')

  app.document.head.appendChild(style)
}

// Clear localStorage before each test
beforeEach(() => {
  cy.clearLocalStorage()
})
