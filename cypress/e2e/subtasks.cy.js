describe('TodoList Application - Subtasks', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-ci="task-name-input"]').type('Main task')
    cy.get('[data-ci="task-submit-button"]').click()
  })

  it('should add a subtask to a task', () => {
    cy.get('[data-ci="add-subtask-button"]').click()
    cy.get('[data-ci="subtask-name-input"]').should('be.visible')
  })

  it('should display subtask input field', () => {
    cy.get('[data-ci="add-subtask-button"]').click()
    cy.get('[data-ci="subtask-name-input"]').should('have.length', 1)
  })

  it('should allow editing subtask name', () => {
    cy.get('[data-ci="add-subtask-button"]').click()
    cy.get('[data-ci="subtask-name-input"]').type('Subtask 1')
    cy.get('[data-ci="subtask-name-input"]').should('have.value', 'Subtask 1')
  })

  it('should mark subtask as complete', () => {
    cy.get('[data-ci="add-subtask-button"]').click()
    cy.get('[data-ci="subtask-name-input"]').type('Subtask 1')
    cy.get('[data-ci="subtask-checkbox"]').check()
    cy.get('[data-ci="subtask-checkbox"]').should('be.checked')
  })
})
