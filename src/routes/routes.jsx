
import { RouterProvider, createRouter, Route, Outlet, Link } from '@tanstack/react-router'
import { About} from '../components/About&Skills.jsx'
import { Contact } from '../components/Contact.jsx'
import { Projects } from '../components/Projects.jsx'
import { Layout as RootLayout } from '../components/Layout.jsx'

// Define routes

import { RootRoute } from '@tanstack/react-router'

const rootRoute = new RootRoute({
  component: RootLayout,
})

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'about',
  component: About,
})

const projectsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'projects',
  component: Projects,
})

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'contact',
  component: Contact,
})

// Create router with all routes

const router = createRouter({
  routeTree: rootRoute.addChildren([aboutRoute, projectsRoute, contactRoute]),
})

// Components

export default function AppRouter() {
  return <RouterProvider router={router} />
}
