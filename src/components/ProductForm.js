import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default () => {
    // VAR
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    // FUNC
    const handleSubmit = (e) => {
        e.preventDefault() 
        axios.post("http://localhost:8000/api/product/create", {
            title, 
            price, 
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err)) 
    }
    // HTML
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Title: </label><br/>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price: </label><br/>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description: </label><br/>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}