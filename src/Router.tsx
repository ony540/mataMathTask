import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import loadMockData from './utils/loadMockData'
import SelfDirectedPage from './pages/SelfDirectedPage'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<SelfDirectedPage />}
      loader={() => loadMockData()}></Route>
  )
)
