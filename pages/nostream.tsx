import ProductDescription from "../app/ProductDescription";
import Comments from "../app/Comments";
import Price from "../app/Price";

// eslint-disable-next-line react/display-name
export default async () => {
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
      {/* @ts-expect-error Async Server Component */}
      <ProductDescription />

      <h2>Comments</h2>
      {/* @ts-expect-error Async Server Component */}
      <Comments />

      <div id="atc">
        {/* @ts-expect-error Async Server Component */}
        <Price />

        <span id="buynow">Add to cart</span>
      </div>
    </>
  );
};
