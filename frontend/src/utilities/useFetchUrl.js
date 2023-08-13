import axios from "axios"
import { useEffect, useState } from "react"


const { token } = JSON.parse(localStorage.getItem('user'));

export const useFetchUrl = (url) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {

            try {
                const res = await axios.get(`http://localhost:8000/api/${url}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })

                if(res.status === 200){
                    setData(res.data)
                }

            } catch (error) {
                console.log(error)
            }
        }

        getData();

    },[url])

  return { data }
}

