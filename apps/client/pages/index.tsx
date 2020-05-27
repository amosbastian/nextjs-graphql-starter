import React from "react";
import withApollo from "../apollo/client";

export const Index = () => {
  return (
    <div>
      <header className="flex">
        <h1>Welcome to client!</h1>
      </header>
      <main>Hello, World</main>
    </div>
  );
};

export default withApollo(Index);
