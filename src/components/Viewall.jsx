import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [todoData, changeTodoData] = useState(
        {
            "todos": [],
            "total": 254,
            "skip": 0,
            "limit": 30
        }
    )
    const fetchData = () => {
        axios.get("https://dummyjson.com/todos").then(
            (response) => {
                changeTodoData(response.data)
            }
        ).catch()
    }
    useEffect(
        () => { fetchData() }, []
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sl.no</th>
                                            <th scope="col">Todo LIST</th>
                                            <th scope="col">Completed</th>
                                            <th scope="col">User ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {todoData.todos.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value.id}</th>
                                                    <td>{value.todo}</td>
                                                    <td>{value.completed}</td>
                                                    <td>{value.userId}</td>
                                                </tr>
                                            }
                                        )}

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall
