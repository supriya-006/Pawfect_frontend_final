import React, { useEffect, useState } from 'react'
import { editCategory, getCategoryDetails } from '../../api/categoryApi'
import { Link, useParams } from 'react-router-dom'

const EditCategory = () => {

    const { id } = useParams()

    let [category, setCategory] = useState('')
    useEffect(() => {
        getCategoryDetails(id)
            .then(data => {
                if (data.error) {
                    console.log(error)
                }
                else {
                    setCategory(data.category_name)
                }
            })

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        editCategory(id, category)
            .then(data => {
                if (data.error) {
                    alert(data.error)
                }
                else {
                    alert("Category updated successfully")
                }
            })

    }
    return (
        <>
            <main className="form-signin w-11/12 sm:w-10/12  md:w-8/12 lg:w-1/2 m-auto p-5 shadow-xl my-5">
                <form>
                    <h1 className="h3 mb-3 fw-normal text-xl md:text-5xl"> Edit Category</h1>

                    <div className="form-floating">
                        <input type="category_name" className="form-control"
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            value={category}
                        />
                        <label for="floatingInput">Category Name</label>
                    </div>
                    <button className="btn btn-danger w-100 mt-2 p-2" onClick={handleSubmit}>Edit Category</button>
                    <Link to={'/category'} className="btn btn-warning w-100 mt-2 p-2">Go Back</Link>

                </form>
            </main>
        </>
    )
}

export default EditCategory