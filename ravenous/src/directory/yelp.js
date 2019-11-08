const apiKey = "qNLkhseRRsKWcpHQZIsknti9Ys6CUZFs7rCALmsFK4BOVKB0GHYY6FCPJSLLvUZ4XXPBJipf05oJS3NwQbS63Kkms9fcotDoABdB9_3PhQw-gJRpopaGeXPyNf-eXXYx"
const yelp = {
    search (term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
           "Authorization": `Bearer ${apiKey}`  
        }
    }).then( response => {
        return response.json()
    }).then( jsonResponse => {
        if(jsonResponse.businesses) {
            console.log(jsonResponse)
        return jsonResponse.businesses.map((business) => {
           return {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipcode:business.location.zip_code,
                category:business.categories[0].title,
                rating:business.rating,
                reviewCount:business.review_count

            }
        })
        }
    });
   }

}

export default yelp;