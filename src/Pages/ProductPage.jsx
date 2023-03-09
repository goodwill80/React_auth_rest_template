import ProductOneDisplayContainer from '../Components/ProductOneDisplayContainer';
function ProductPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen h-[125vh] justify-center items-center mb-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold tracking-wider text-gray-700 pb-20">
            Our Products
          </h1>
        </div>
        <ProductOneDisplayContainer />
      </div>
    </>
  );
}

export default ProductPage;
