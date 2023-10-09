import React from "react";
import { Hero, Products, Comments, Gallery, Reviews, Subscribe } from "../";

interface Props {
  className?: string;
}

const Main = ({ className }: Props) => {
  return (
    <main className={className}>
      <Hero />
      <Products />
      <Comments />
      <Gallery />
      <Reviews />
      <Subscribe />
    </main>
  );
};

export default Main;
