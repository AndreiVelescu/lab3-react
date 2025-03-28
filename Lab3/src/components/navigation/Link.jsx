import { useRouterContext } from "../../hooks/useRouterContext";

export const Link = ({ to, children, ...rest }) => {
  const { push } = useRouterContext();
  const handleClick = (event) => {
    event.preventDefault();
    push(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};
