describe('TodoList Application - LocalStorage Persistence', () => {
  it('should persist tasks to localStorage', () => {
    cy.visit('/')

    cy.get('[data-ci="task-name-input"]').type('Task 1')
    cy.get('[data-ci="task-submit-button"]').click()

    cy.get('[data-ci="task-name-input"]').type('Task 2')
    cy.get('[data-ci="task-submit-button"]').click()

    cy.get('[data-ci="task-row"]').should('have.length', 2)

    cy.window().then((win) => {
      const stored = win.localStorage.getItem('tabTaches')
      expect(stored).to.exist
      expect(stored).to.include('Task 1')
      expect(stored).to.include('Task 2')
    })
  })

  it('should load tasks from localStorage on page reload', () => {
    cy.visit('/')

    cy.get('[data-ci="task-name-input"]').type('Persistent task')
    cy.get('[data-ci="task-submit-button"]').click()

    cy.reload()

    cy.get('[data-ci="task-row"]').should('have.length', 1)
    cy.get('[data-ci="task-table"]').contains('Persistent task').should('be.visible')
  })

  it('should persist task completion status', () => {
    cy.visit('/')

    cy.get('[data-ci="task-name-input"]').type('Task to complete')
    cy.get('[data-ci="task-submit-button"]').click()

    cy.get('[data-ci="task-complete-checkbox"]').first().check()

    cy.reload()

    cy.get('[data-ci="task-row"]').should('have.length', 0)
    cy.get('[data-ci="completed-tasks-table"]').contains('Task to complete').should('be.visible')
  })

  it('should persist multiple state changes', () => {
    cy.visit('/')

    cy.get('[data-ci="task-name-input"]').type('Task 1')
    cy.get('[data-ci="task-submit-button"]').click()

    cy.get('[data-ci="task-name-input"]').type('Task 2')
    cy.get('[data-ci="task-submit-button"]').click()

    cy.get('[data-ci="task-name-input"]').type('Task 3')
    cy.get('[data-ci="task-submit-button"]').click()

    cy.get('[data-ci="task-complete-checkbox"]').first().check()

    cy.get('[data-ci="delete-task-button"]').last().click()
    cy.on('window:confirm', () => true)

    cy.reload()

    cy.get('[data-ci="task-row"]').should('have.length', 1)
    cy.get('[data-ci="completed-tasks-table"]').contains('Task 1').should('be.visible')
    cy.get('[data-ci="task-table"]').contains('Task 3').should('not.exist')
  })

  it('should clear localStorage when localStorage is cleared', () => {
    cy.visit('/')

    cy.get('[data-ci="task-name-input"]').type('Task to delete')
    cy.get('[data-ci="task-submit-button"]').click()

    cy.clearLocalStorage()
    cy.reload()

    cy.get('[data-ci="task-row"]').should('have.length', 0)
  })
})
