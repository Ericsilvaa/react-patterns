import { MenuItemTypes } from './types'

const menuPlanning: MenuItemTypes[] = [
  { title: 'Daily Tasks', path: '/daily-tasks' },
  {
    title: 'Morning Routine',
    path: '/daily-tasks/morning-routine'
  },
  {
    title: 'Evening Wrap-up',
    path: '/daily-tasks/evening-wrap-up'
  },
  {
    title: 'Work Sessions',
    path: '/daily-tasks/work-sessions'
  }
]

const menuDevelopment: MenuItemTypes[] = [
  { title: 'Project Setup', path: '/development/project-setup' },
  {
    title: 'Code Standards',
    path: '/development/code-standards'
  },
  {
    title: 'Version Control',
    path: '/development/version-control'
  },
  {
    title: 'Testing & QA',
    path: '/development/testing-qa'
  },
  {
    title: 'Deployment',
    path: '/development/deployment'
  }
]

export { menuDevelopment, menuPlanning }
