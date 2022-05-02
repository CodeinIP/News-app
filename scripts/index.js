// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar,sidebar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("sidebar").innerHTML = sidebar();

import { search,display } from "../components/fetch.js";

let searchfunc = (e)=>{
    if(e.key=="Enter"){
        // console.log("yes")
        search().then((resp)=>{
            let container = document.getElementById("results");
            container.innerHTML = null;
            console.log(resp.articles)
            let result = resp.articles;
            display(result,container)
        })
    }
}

document.getElementById('search_input').addEventListener("keydown",searchfunc);