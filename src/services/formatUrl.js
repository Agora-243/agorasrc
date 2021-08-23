
function FormatUrl(providerFilter,keyword,indexOfProductsPage){
    let url ;
    switch(providerFilter){
        case 'Tout':
            url = `https://ali-express1.p.rapidapi.com/search?query=${keyword}&page=${indexOfProductsPage}`
            break
        default:
            url = `https://ali-express1.p.rapidapi.com/search?query=Iphone&page=1`
            
    }
   
    return url;
}

export default FormatUrl;