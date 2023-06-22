import React from "react";
import BaseLayout from "../BaseLayout";
import useDocumentTitle from "../../hooks";

export default function PrivateRoute(props) {
  useDocumentTitle(props.title);
  return <BaseLayout>{props.children}</BaseLayout>;
}
