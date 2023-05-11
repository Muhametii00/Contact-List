import { useRoutes } from "react-router-dom";
import { ContactList } from "../components/screens/ContactList";
import { About } from "../components/screens/About";

export const dashboardRoutes = [
  {
    children: [
      { path: "/", element: <ContactList /> },
      { path: "/about", element: <About /> },
    ],
  },
];

export const Routes = () => {
  const routes = useRoutes(dashboardRoutes);

  return routes;
};
