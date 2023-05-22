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

      <div >
        <img id="hero"
          src="https://i5.walmartimages.com/asr/42919fb8-29d6-4234-92cf-315c1eea0010.fdaa0c90e47663d0455beb06bfbb348e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
          alt=""
        />
      </div>
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
