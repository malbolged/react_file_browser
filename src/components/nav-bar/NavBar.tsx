import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";

import "./NavBar.css";

const NavBar: React.FC = () => {
  const location = useLocation();

  const previousRoutePath = useMemo(() => {
    const parts = location.pathname?.split("/") || [];
    parts.pop();

    const route = parts.join("/");

    return route.length > 0 ? route : "/";
  }, [location.pathname]);

  return (
    <div className="nav-bar">
      {location.pathname !== "/" && (
        <a href={previousRoutePath}>⬅️ {previousRoutePath}</a>
      )}
    </div>
  );
};

export { NavBar };
