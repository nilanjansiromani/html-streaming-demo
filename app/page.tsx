import { Suspense } from "react";
import Comments from "./Comments";

const fetchDescription = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Product information ready for SEO"), 1500)
  );

export default async function Home() {
  const description = (await fetchDescription()) as string;

  return (
    <>
      <header>
        <div id="header-div">
          <input type="text" id="search" />
          <hr />
          <p>how do you want your items</p>
        </div>
      </header>

      <h1>Product Description</h1>
      <h2>{description}</h2>

      <h2>Comments</h2>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <Comments />
      </Suspense>

      <div id="atc">
          <span id="price">$75</span>
          <span id="buynow">Add to cart</span>
      </div>
    </>
  );
}
