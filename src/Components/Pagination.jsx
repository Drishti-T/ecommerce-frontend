import { useState } from "react";

// client-side pagination
export const Pagination = () => {

    const items = [
        'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
        'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
        'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15',
        'Item 16', 'Item 17', 'Item 18', 'Item 19', 'Item 20'
    ];


    const itemsPerPage = 5;
    const [visibleCount, setVisibleCount] = useState(itemsPerPage);

    function handleLoadMore() {
        setVisibleCount(prev => prev + itemsPerPage);
    }
    function handleViewLess() {
        setVisibleCount(prev => prev - itemsPerPage);
    }
    return <div>
        {items.slice(0, visibleCount).map((item, idx) => (
            <li key={idx}>{item}
            </li>))}

            <button onClick={handleLoadMore}>View More</button>
            <button onClick={handleViewLess}>View Less</button>
    </div>
}


//sever - side-pagination

// import React, { useState, useEffect } from 'react';

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [offset, setOffset] = useState(0);
//   const limit = 4; // Number of items to fetch at a time

//   useEffect(() => {
//     // Initial fetch
//     fetch(`/api/products?limit=${limit}&offset=${offset}`)
//       .then(res => res.json())
//       .then(data => setProducts(data));
//   }, []);

//   const handleLoadMore = () => {
//     const newOffset = offset + limit;
//     fetch(`/api/products?limit=${limit}&offset=${newOffset}`)
//       .then(res => res.json())
//       .then(newData => {
//         setProducts(prev => [...prev, ...newData]); // Append new data
//         setOffset(newOffset);
//       });
//   };

//   return (
//     <div>
//       <h2>Product List</h2>
//       <ul>
//         {products.map(p => (
//           <li key={p.id}>{p.name}</li>
//         ))}
//       </ul>
//       <button onClick={handleLoadMore}>View More</button>
//     </div>
//   );
// }

// export default ProductList;


// // dummy backend whichonly gives us the sliced data not the whole data

// // Simulating a backend API in Next.js or Express.js
// // This could be a server endpoint like /api/products

// const allProducts = [
//   { id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' },
//   { id: 3, name: 'Product 3' }, { id: 4, name: 'Product 4' },
//   { id: 5, name: 'Product 5' }, { id: 6, name: 'Product 6' },
//   { id: 7, name: 'Product 7' }, { id: 8, name: 'Product 8' },
//   { id: 9, name: 'Product 9' }, { id: 10, name: 'Product 10' },
// ];

// app.get('/api/products', (req, res) => {
//   const limit = parseInt(req.query.limit) || 4;
//   const offset = parseInt(req.query.offset) || 0;
//   const data = allProducts.slice(offset, offset + limit);
//   res.json(data);
// });
