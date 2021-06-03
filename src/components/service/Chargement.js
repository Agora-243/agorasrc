
export default function fetchEveryThing() {
    return Promise.all([
        fetchTv(),
        fetchOrdinateur(),
        fetchTelephone()
    ]).then((arr) => {
        return arr;
    });
}

async function fetchTv() {
    let response = await fetch("https://ali-express1.p.rapidapi.com/search?query=SmartTv&page=1", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "x-rapidapi-key": "8c91707edfmsh2a59469d10d13d4p136759jsn1b0ee3f538f7",
            "x-rapidapi-host": "ali-express1.p.rapidapi.com"
        },
        mode: 'cors',
        cache: 'default'
    })
    let data = await response.json()
    let dataparse = data.data.searchResult.mods.itemList.content
    return dataparse;
        
}
async function fetchOrdinateur() {
    let response = await fetch("https://ali-express1.p.rapidapi.com/search?query=MacBook&page=1", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "x-rapidapi-key": "8c91707edfmsh2a59469d10d13d4p136759jsn1b0ee3f538f7",
            "x-rapidapi-host": "ali-express1.p.rapidapi.com"
        },
        mode: 'cors',
        cache: 'default'
    })
    let data = await response.json()
    let dataparse = data.data.searchResult.mods.itemList.content
    return dataparse;
}


async function fetchTelephone() {
    let response = await fetch("https://ali-express1.p.rapidapi.com/search?query=Iphone8plus&page=1", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "x-rapidapi-key": "8c91707edfmsh2a59469d10d13d4p136759jsn1b0ee3f538f7",
            "x-rapidapi-host": "ali-express1.p.rapidapi.com"
        },
        mode: 'cors',
        cache: 'default'
    })
    let data = await response.json()
    let dataparse = data.data.searchResult.mods.itemList.content
    return dataparse;
}
