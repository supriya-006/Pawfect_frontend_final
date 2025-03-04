import React, { useEffect, useState } from 'react';
import { deleteCategory, getAllCategories } from '../../api/categoryApi';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Category = () => {
   const [categories, setCategories] = useState([]); 
   const [success, setSuccess] = useState(false);

   useEffect(() => {
      getAllCategories()
         .then(data => {
            if (Array.isArray(data)) { 
               setCategories(data);
            } else {
               console.error("Invalid data format:", data);
            }
            setSuccess(false);
         })
         .catch(error => console.log("Error fetching categories:", error));
   }, [success]);

   const handleDelete = (id) => (e) => {
      e.preventDefault();
      Swal.fire({
         text: "Are you sure you want to delete this category?",
         title: "Confirm!",
         icon: "question",
         showCancelButton: true,
         confirmButtonColor: 'orange',
         confirmButtonText: "Yes, Delete",
         cancelButtonText: "No!"
      }).then(result => {
         if (result.isConfirmed) {
            deleteCategory(id)
               .then(data => {
                  if (data.error) {
                     console.log(data.error);
                  } else {
                     Swal.fire("Success", data.message, "success");
                     setSuccess(true);
                  }
               })
               .catch(error => console.log("Error deleting category:", error));
         }
      });
   };

   return (
      <div className='p-5'>
         <h1 className='h3'>Categories</h1>
         {categories.length === 0 ? <p>No categories found.</p> : (
            <ol>
               {categories.map((category, i) => (
                  <li key={category._id} className='text-2xl'>
                     {i + 1}. {category.category_name}
                     <Link className='edit-btn ms-3' to={`/category/${category._id}`}>Edit</Link>
                     <button className='delete-btn ms-3' onClick={handleDelete(category._id)}>Delete</button>
                  </li>
               ))}
            </ol>
         )}
         <Link to={'/category/new'} className='add-btn'>Add new category</Link>
      </div>
   );
};

export default Category;
