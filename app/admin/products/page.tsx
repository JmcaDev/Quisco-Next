import ProductTable from "@/components/products/ProductTable"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"

async function getProducts(page: number, pageSize: number){

  const skip = (page - 1) * pageSize

  const products = await prisma.product.findMany({
    take: pageSize,
    skip,
    include:{
      category: true
    }
  })
  return products
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>

async function ProductsPage({searchParams}: {searchParams: Promise<{[key: string]: string | string[] | undefined}>}) {

  const {page = "1" } = await searchParams
  const currentPage = parseInt(page as string, 10) || 1
  const pageSize = 10
  

  const products = await getProducts(currentPage, pageSize)

  return (
    <>
      <Heading>Administrar Productos</Heading>

      <ProductTable
        products={products}
      />
    </>
  )
}

export default ProductsPage