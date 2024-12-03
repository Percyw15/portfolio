const currentFeatures = new Proxy({featurePage:1},{
    get(target,prop) {
        console.log(target,prop)
        return target[prop]
    },
    set(target,prop,newValue){
        target[prop] = newValue
        fetch(`${BASE_URL}/pages/features[${currentFeatures.featurePage}].html`)
        .then(response => response.text())
        .then(data => {
            let article = document.createElement('article');
            article.classList.add('features')
            article.innerHTML = data
            content.appendChild(article)
            
        })
        
    }
})

currentFeatures.featurePage = 1
