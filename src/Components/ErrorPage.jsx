import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="text-xl font-semibold text-center absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 ">
      <h1>{error.status}</h1>
      <h1>{error.statusText}</h1>
    </div>
  );
}
