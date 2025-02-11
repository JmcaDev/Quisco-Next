import ProductSearchForm from '@/components/products/ProductSearchForm'
import ProductTable from '@/components/products/ProductTable'
import Heading from '@/components/ui/Heading'
import { prisma } from '@/src/lib/prisma'

async function searchProducts(searchTerm: string){
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: "insensitive"
            }
        },
        include: {
            category: true
        }
    })
    return products
}

async function SearchPage({searchParams}: {searchParams: Promise<{[search: string]: string | string[] | undefined}>}) {
    const {search} = await searchParams
    const products = await searchProducts(search as string)

  return (
    <>
        <Heading>Resultados de Busqueda: {search}</Heading>

        <div className="flex flex-col lg:flex-row lg:justify-end gap-5 ">
            <ProductSearchForm/>
        </div>

        {products.length ? (
            <ProductTable
                products={products}
            />
        ) : <p className='text-center text-lg'>No hay resultados</p>}
    </>
  )
}

export default SearchPage