import { useContext } from "react";
import { RouterContext } from "../context/RouterContext";

export const useRouterContext = () => {
  return useContext(RouterContext);
};
