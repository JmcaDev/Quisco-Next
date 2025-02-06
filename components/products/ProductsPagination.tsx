import Link from "next/link"

type ProductsPaginationProps = {
    page: number
    totalPages: number
}

function ProductsPagination({page, totalPages} : ProductsPaginationProps) {

    const pages = Array.from({length: totalPages}, (_, i) => i + 1)
    console.log(pages)

  return (
    <nav className='flex justify-center py-10'>

        {page > 1 && (
            <Link
                href={`/admin/products?page=${page-1}`}
                className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-8"
            >&laquo;</Link>
        )}

        {pages.map((currentPage) => (
            <Link
                href={`/admin/products?page=${currentPage}`}
                className={`${page === currentPage ? " bg-amber-400" : "bg-white"}  px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-8`}
                key={currentPage}
            >{currentPage}</Link>
        ))}

        {page < totalPages && (
            <Link
            href={`/admin/products?page=${page+1}`}
            className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offse-8"
            >&raquo;</Link>
        )}
    </nav>
  )
}

export default ProductsPagination