import RegistrationForm from "../pages/RegistrationForm";
import Step2 from "../pages/Step2";
import NotFound from "../pages/NotFound";

export const routes = [
  {
    path: "/",
    element: <RegistrationForm />,
  },

  {
    path: "/step2",
    element: <Step2 />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
];
