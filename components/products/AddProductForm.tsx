
import ProductForm from "./ProductForm"

function AddProductForm() {

    const handleSubmit = async (formData: FormData) => {
        console.log("desde handleSubmit")
    }

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
        <form
            className="space-y-5"
            action={handleSubmit}
        >
            <ProductForm/>

            <input 
                type="submit" 
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer" value="Registrar producto" 
            />
        </form>
    </div>
  )
}

export default AddProductForm