const pdFetch = () =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve(
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha"
        ),
      2500
    )
  );

async function ProductDescription() {
  const productDescription = (await pdFetch()) as string[];

  return (
    <>
      <p>{productDescription}</p>
    </>
  );
}

export default ProductDescription;
