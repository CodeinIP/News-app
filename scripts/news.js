// Ude Import export (MANDATORY)

import {navbar,sidebar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("sidebar").innerHTML = sidebar();
// console.log(navbar,sidebar)
let news = JSON.parse(localStorage.getItem("news"))
console.log(news)

// import {display} from "../components/fetch.js"
// display(news,container);

let display = (news)=>{
    let container = document.getElementById("results");

    let box = document.createElement("div");
    box.setAttribute("class","newsbox");
    let imgbox = document.createElement("div");
    let image = document.createElement("img");
    image.src = news.urlToImage;
    // console.log(news.urlToImage)
    imgbox.append(image);

    let descBox = document.createElement("div");
    descBox.setAttribute("class","descbox")
    let source = document.createElement("h5");
    source.innerText = `Source:- ${news.source.name}`

    let watch = document.createElement("a");
    watch.innerText = `Watch:-${watch.href = news.url}`

    let auth = document.createElement("h5")
    auth.innerText = `Author:- ${news.author}`
    let tit = document.createElement("h3")
    tit.innerText = news.title;

    let desc = document.createElement("p")
    desc.innerText = news.description;
    descBox.append(tit,watch,source,auth)


    box.append(imgbox,descBox)
    container.append(box);

}
display(news);