const priceFetch = () =>
  new Promise((resolve) => setTimeout(() => resolve("75 USD"), 1500));

async function Price() {
  const price = (await priceFetch()) as string[];

  return (
    <>
      <h2>{price}</h2>
    </>
  );
}

export default Price;
