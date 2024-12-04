const about_me = document.getElementById('about-me');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
const content = document.getElementById('content');
const buttonSound = new Audio('../assets/header/button sound.wav');
let currentPageId = about_me.id;
let url = 'percyw15.tech'
function getPage(id) {
    console.log(id,currentPageId)
    if (id == currentPageId) {
        return ;

    }
    else {
        buttonSound.currentTime = 0;
        buttonSound.play();
        
        document.getElementById(id).style.border = "2px solid white";
        document.getElementById(currentPageId).style.border = "2px solid transparent";
        fetch(`http://${BASE_URL}/pages/${id}.html`)
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
fetch(`http://${BASE_URL}/pages/about-me.html`)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => alert('Erro ao carregar o HTML:', error));

