describe('TodoList Application - Add Tasks', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the application', () => {
    cy.get('[data-ci="task-list-app"]').should('be.visible')
    cy.get('[data-ci="task-name-input"]').should('be.visible')
  })

  it('should add a new task', () => {
    cy.get('[data-ci="task-name-input"]').type('Buy groceries')
    cy.get('[data-ci="task-submit-button"]').click()

    cy.get('[data-ci="task-row"]').should('have.length', 1)
    cy.get('[data-ci="task-row"]').contains('Buy groceries').should('be.visible')
  })

  it('should not add an empty task', () => {
    cy.get('[data-ci="task-submit-button"]').should('be.disabled')
  })

  it('should add multiple tasks', () => {
    const tasks = ['Task 1', 'Task 2', 'Task 3']

    tasks.forEach((task) => {
      cy.get('[data-ci="task-name-input"]').type(task)
      cy.get('[data-ci="task-submit-button"]').click()
    })

    cy.get('[data-ci="task-row"]').should('have.length', 3)
    tasks.forEach((task) => {
      cy.get('[data-ci="task-table"]').contains(task).should('be.visible')
    })
  })

  it('should clear input after adding a task', () => {
    cy.get('[data-ci="task-name-input"]').type('New task')
    cy.get('[data-ci="task-submit-button"]').click()

    cy.get('[data-ci="task-name-input"]').should('have.value', '')
  })
})
