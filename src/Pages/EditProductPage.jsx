import ProductEditForm from '../Components/ProductEditForm';

function EditProductPage() {
  return (
    <div className="flex flex-col min-h-full h-[75vh] justify-center items-center">
      <h1 className="text-center text-4xl tracking-widest text-green-800 font-bold mt-8">
        Edit Product
      </h1>
      <ProductEditForm />
    </div>
  );
}

export default EditProductPage;
