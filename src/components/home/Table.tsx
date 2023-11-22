import { useState } from "react";
import test from "../../data/test";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

export default function Table() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const totalPages = Math.ceil(test.length / productsPerPage);

  // Calculate the index range of the products to be displayed on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = test.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle the "Next" button click
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle the "Previous" button click
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="overflow-x-auto mt-20">
      <table className="table bg-white">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Category</th>
            <th>Disponibility</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {currentProducts.map((product) => (
            <tr key={product.id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={product.Image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product.name}</div>
                    <div className="text-sm opacity-50">{product.price} DH</div>
                  </div>
                </div>
              </td>
              <td>
                {product.categoryName}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {product.subCategoryname}
                </span>
              </td>
              <td>
                <span
                  className={`px-6 py-1 rounded-full font-semibold ${
                    product.active
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {product.active ? "active" : "out stock"}
                </span>
              </td>
              <th>
                <div className="flex gap-x-4">
                  <button className="btn ">
                    <FaRegPenToSquare className="text-lg" />
                  </button>
                  <button className="btn">
                    <MdDeleteOutline className="text-xl" />
                  </button>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>

        {/* Pagination buttons */}
        <div className="flex justify-center mt-4">
        <button
          className="btn btn-primary mr-2"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
