import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import ROUTERS from "@/shared/constants/routers";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import Loader from "@components/Loader";

const VideoArchive = lazy(() => import("./pages/VideoArchive"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path={ROUTERS.BASE}
        element={<MainLayout />}
        errorElement={
          <ErrorBoundary fallback={<div>Something went wrong</div>} />
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <VideoArchive />
            </Suspense>
          }
        />
        <Route path={ROUTERS.NOT_FOUND} element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
