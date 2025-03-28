import { useRouterContext } from "../../hooks/useRouterContext";
import { matchRoutes } from "../../utils/path";
import { NotFound } from "../../pages/NotFound";

export const Routes = ({ children }) => {
  const { location } = useRouterContext();

  const match = matchRoutes(children, location);

  if (!match) return <NotFound />;

  return <>{match}</>;
};
