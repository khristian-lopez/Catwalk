
    let results = data.results
    let ratings = [];
    let recommend = [];
    let total = 0;


    for (let i = 0; i < results.length; i++) {
        let rating = results[i]['rating']
        let recc = results[i]['recommend']
        ratings.push(rating)
        recommend.push(recc);
        total += rating
    }
    const recommendCount = recommend.filter(Boolean).length
    const avgRecommend = Math.round(recommendCount / recommend.length * 100) 
    
    const avgRating = total / ratings.length

    let starCount = {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0
    }

    const stars = results.map(review => {
        starCount[review.rating] += 1;
        
        return starCount;
    }, stars)