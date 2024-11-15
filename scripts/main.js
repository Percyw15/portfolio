const about_me = document.getElementById('about-me')
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')
let currentPageId = about_me.id;
let url = 'percyw15.tech'
function getPage(id) {
    console.log(id,currentPageId)
    if (id == currentPageId) {
        return ;

    }
    else {
        document.getElementById(id).style.border = "2px solid white";
        document.getElementById(currentPageId).style.border = "2px solid transparent";
        fetch(`https://${url}/pages/${id}.html`)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar o HTML:', error));
        currentPageId = id;
    }

}

about_me.addEventListener('click',function(a,b,c){
    getPage(about_me.id)
});

projects.addEventListener('click',function(){
    getPage(projects.id);
    
});
contact.addEventListener('click',function(){
   getPage(contact.id);
    
});
fetch(`https://${url}/pages/about-me.html`)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => alert('Erro ao carregar o HTML:', error));