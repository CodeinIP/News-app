// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar,sidebar} from '../components/navbar.js';
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("sidebar").innerHTML = sidebar();
import {searcH,display} from '../components/fetch.js'

// console.log(sidebar);
window.onload = alert("click again on the country");
let country = document.getElementById("sidebar").children;
console.log(country);
function showNews(){
    event.preventDefault();
    console.log(this.id)
    let country_code = this.id;
    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country_code}`;
    let container = document.getElementById("results");
    container.innerHTML = null;

    searcH(url).then((res)=>{
        console.log(res.articles);
        let data = res.articles;
        display(data,container);
    })
    // console.log(res);

}
for(let code of country){
    code.addEventListener("click",showNews);
}