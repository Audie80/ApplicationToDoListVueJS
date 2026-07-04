describe('TodoList Application - Complete and Delete Tasks', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-ci="task-name-input"]').type('Test task')
    cy.get('[data-ci="task-submit-button"]').click()
  })

  it('should mark a task as complete', () => {
    cy.get('[data-ci="task-complete-checkbox"]').first().should('not.be.checked')
    cy.get('[data-ci="task-complete-checkbox"]').first().check()
    cy.get('[data-ci="task-complete-checkbox"]').first().should('be.checked')
  })

  it('should hide completed tasks from the main list', () => {
    cy.get('[data-ci="task-name-input"]').type('Another task')
    cy.get('[data-ci="task-submit-button"]').click()

    cy.get('[data-ci="task-row"]').should('have.length', 2)
    cy.get('[data-ci="task-complete-checkbox"]').first().check()

    cy.get('[data-ci="task-row"]').should('have.length', 1)
  })

  it('should show completed tasks in the completed section', () => {
    cy.get('[data-ci="task-complete-checkbox"]').first().check()
    cy.get('[data-ci="completed-tasks-table"]').contains('Test task').should('be.visible')
  })

  it('should delete a task when delete button is clicked', () => {
    cy.get('[data-ci="task-row"]').should('have.length', 1)
    cy.get('[data-ci="delete-task-button"]').first().click()
    cy.on('window:confirm', () => true)
    cy.get('[data-ci="task-row"]').should('have.length', 0)
  })

  it('should not delete task when canceling the confirmation', () => {
    cy.get('[data-ci="task-row"]').should('have.length', 1)
    cy.get('[data-ci="delete-task-button"]').first().click()
    cy.on('window:confirm', () => false)
    cy.get('[data-ci="task-row"]').should('have.length', 1)
  })
})
