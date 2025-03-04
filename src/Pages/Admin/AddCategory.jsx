import React, { useState } from 'react'
import { addCategory } from '../../api/categoryApi'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const AddCategory = () => {
    let [category, setCategory] = useState('')

    
    const handleSubmit = (e) => {
        e.preventDefault()
        addCategory(category)
        .then(data=>{
            if(data.error){
                alert(data.error)
            }
            else{
                Swal.fire({
                    title:"Congrats",
                    text:"Category added successsfully.",
                    icon:"success",
                    position:'top-right',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                })
            }
        })
        
    }
  return (
    <>
        <main className="form-signin w-11/12 sm:w-10/12  md:w-8/12 lg:w-1/2 m-auto p-5 shadow-xl my-5">
                <form>
                    <h1 className="h3 mb-3 fw-normal text-xl md:text-5xl"> Add Category</h1>

                    <div className="form-floating">
                        <input type="category_name" className="form-control"
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }} />
                        <label for="floatingInput">Category Name</label>
                    </div>
                    <button className="btn btn-danger w-100 mt-2 p-2" onClick={handleSubmit}>Add Category</button>
                    <Link to={'/category'} className="btn btn-warning w-100 mt-2 p-2">Go Back</Link>

                </form>
            </main>
    </>
  )
}

export default AddCategory