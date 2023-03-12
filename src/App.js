import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Login from './pages/Login';
import AuthWrapper from './Layouts/AuthWrapper/AuthWrapper';
import Notations from './pages/Notations';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <AuthWrapper>
          <Home />
        </AuthWrapper>
      ),
    },
    {
      path: 'details/:characterId',
      element: (
        <AuthWrapper>
          <Details />
        </AuthWrapper>
      ),
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/notations',
      element: <Notations />,
    },
    {
      path: '*',
      element: <h1>Not found</h1>,
    },
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
