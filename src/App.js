import style from "./App.module.css";
// import Header from "./components/Header";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutusPage from "./pages/AboutusPage";
import PDFDownloadsPage from "./pages/PDFDownloadPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "aboutus",
        element: <AboutusPage />,
      },
      {
        path: "/downloads",
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/downloads/:downloadId",
            id: "downloads-details",
            element: <PDFDownloadsPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className={style.App}>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
