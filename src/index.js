import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppClass from './AppClass';
import ErrorPage from './components/ErrorPage';
import { Analytics } from '@vercel/analytics/react';
//import LoginPage from './components'
import Home from './components/Home';
import Level1 from './components/level/Level1'
import Level2 from './components/level/Level2'
import Level3 from './components/level/Level3'
import Level4 from './components/level/Level4'
import Level5 from './components/level/Level5'
import Level6 from './components/level/Level6'
import Level7 from './components/level/Level7'
import Level8 from './components/level/Level8'
import Level9 from './components/level/Level9'
import Level10 from './components/level/Level10'
import Level11 from './components/level/Level11'
import Level12 from './components/level/Level12'
import Level13 from './components/level/Level13'
import Level14 from './components/level/Level14'
import Level15 from './components/level/Level15'
import Level16 from './components/level/Level16'
import Level17 from './components/level/Level17'
import Level18 from './components/level/Level18'
import Level19 from './components/level/Level19'
import Level20 from './components/level/Level20'
import Level21 from './components/level/Level21'
import Level22 from './components/level/Level22'
import Level23 from './components/level/Level23'
import Level24 from './components/level/Level24'
import Level25 from './components/level/Level25'
import Level26 from './components/level/Level26'
import Level27 from './components/level/Level27'
import Level28 from './components/level/Level28'
import Level29 from './components/level/Level29'
import Level30 from './components/level/Level30'
import Level31 from './components/level/Level31'
import Level32 from './components/level/Level32'
import Level33 from './components/level/Level33'
import Level34 from './components/level/Level34'
import Level35 from './components/level/Level35'
import Level36 from './components/level/Level36'
import Level37 from './components/level/Level37'
import Level38 from './components/level/Level38'
import Level39 from './components/level/Level39'




const router = createBrowserRouter([
  {
    path: "/",
    element: <AppClass />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/level1",
        element: <Level1 />,
      },
      {
        path: "/level2",
        element: <Level2 />,
      },
      {
        path: "/level3",
        element: <Level3 />,
      },
      {
        path: "/level4",
        element: <Level4 />,
      },
      {
        path: "/level5",
        element: <Level5 />,
      },
      {
        path: "/level6",
        element: <Level6 />,
      },
      {
        path: "/level7",
        element: <Level7 />,
      },
      {
        path: "/level8",
        element: <Level8 />,
      },
      {
        path: "/level9",
        element: <Level9 />,
      },
      {
        path: "/level10",
        element: <Level10 />,
      },
      {
        path: "/level11",
        element: <Level11 />,
      },
      {
        path: "/level12",
        element: <Level12 />,
      },
      {
        path: "/level13",
        element: <Level13 />,
      },
      {
        path: "/level14",
        element: <Level14 />,
      },
      {
        path: "/level15",
        element: <Level15 />,
      },
      {
        path: "/level16",
        element: <Level16 />,
      },
      {
        path: "/level17",
        element: <Level17 />,
      },
      {
        path: "/level18",
        element: <Level18 />,
      },
      {
        path: "/level19",
        element: <Level19 />,
      },
      {
        path: "/level20",
        element: <Level20 />,
      },
      {
        path: "/level21",
        element: <Level21 />,
      },
      {
        path: "/level22",
        element: <Level22 />,
      },
      {
        path: "/level23",
        element: <Level23 />,
      },
      {
        path: "/level24",
        element: <Level24 />,
      },
      {
        path: "/level25",
        element: <Level25 />,
      },
      {
        path: "/level26",
        element: <Level26 />,
      },
      {
        path: "/level27",
        element: <Level27 />,
      },
      {
        path: "/level28",
        element: <Level28 />,
      },
      {
        path: "/level29",
        element: <Level29 />,
      },
      {
        path: "/level30",
        element: <Level30 />,
      },
      {
        path: "/level31",
        element: <Level31 />,
      },
      {
        path: "/level32",
        element: <Level32 />,
      },
      {
        path: "/level33",
        element: <Level33 />,
      },
      {
        path: "/level34",
        element: <Level34 />,
      },
      {
        path: "/level35",
        element: <Level35 />,
      },
      {
        path: "/level36",
        element: <Level36 />,
      },
      {
        path: "/level37",
        element: <Level37 />,
      },
      {
        path: "/level38",
        element: <Level38 />,
      },
      {
        path: "/level39",
        element: <Level39 />,
      },
      /*       {
              path: "/login",
              element: <LoginPage />,
            }, */
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
);
