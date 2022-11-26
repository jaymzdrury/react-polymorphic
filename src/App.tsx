import { Fragment } from "react";
import Component from "./Component";

function App() {
  return (
    <Fragment>
      <Component as='button'>Hello</Component>
      <Component as='div'>Hello</Component>
      <Component as='h1'>Hello</Component>
      <Component as='h6'>Hello</Component>
      <Component as='a' href='https://jamesdrury.vercel.app/'>Hello</Component>
    </Fragment>
  );
}

export default App;
