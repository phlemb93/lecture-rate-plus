import axios from "axios"
import { useEffect, useState } from "react"
import { useUserContext } from "./UserContext";


// const { token } = JSON.parse(localStorage.getItem('user'));

export const useFetchUrl = (url) => {

    const { user } = useUserContext();
    const token = user && user.token;

    

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const getData = async () => {

            try {
                const res = await axios.get(`https://lecture-rate-plus-api.vercel.app/api/${url}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })

                if(res.status === 200){
                    setData(res.data)
                    setLoading(false)
                }

            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }

        getData();

    },[url])

  return { data }
}

