import { useState } from 'react';


export default function ReactA() {

    const [data, setdata] = useState({})



    fetch("https://ali-express1.p.rapidapi.com/search?query=Xiomi&page=1", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "x-rapidapi-key": "8c91707edfmsh2a59469d10d13d4p136759jsn1b0ee3f538f7",
            "x-rapidapi-host": "ali-express1.p.rapidapi.com"
        }
    })
        .then((response) => {
            response.json()
                .then((res) => {
                    setdata(res.data.searchResult.mods.itemList.content)
                })
        })
    return (
        0
    )
}
