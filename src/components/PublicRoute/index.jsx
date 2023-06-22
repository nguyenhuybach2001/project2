import React from "react";
import useDocumentTitle from "../../hooks";
import BaseLayout from "../BaseLayout";

export default function PublicRoute(props) {
  useDocumentTitle(props.title);

  return <BaseLayout>{props.children}</BaseLayout>;
}
