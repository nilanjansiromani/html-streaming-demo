import { Suspense } from "react";
import Comments from "./Comments";
import Price from "./Price";
import ProductDescription from "./ProductDescription";
import { Loader } from "./Loader";

export default function Home() {
  return (
    <>
      <header>
        <div id="header-div">
          <input type="text" id="search" />
          <p>how do you want your items</p>
        </div>
      </header>

      <div>
        <img
          id="hero"
          src="https://i5.walmartimages.com/asr/42919fb8-29d6-4234-92cf-315c1eea0010.fdaa0c90e47663d0455beb06bfbb348e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
          alt=""
        />
      </div>
      <Suspense fallback={<Loader />}>
        {/* @ts-expect-error Async Server Component */}
        <ProductDescription />
      </Suspense>

      <h2>Comments</h2>
      <Suspense fallback={<Loader />}>
        {/* @ts-expect-error Async Server Component */}
        <Comments />
      </Suspense>

      <div id="atc">
        <Suspense fallback={<Loader />}>
          {/* @ts-expect-error Async Server Component */}
          <Price />
        </Suspense>
        <span id="buynow">Add to cart</span>
      </div>
    </>
  );
}
