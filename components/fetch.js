


let search = async ()=>{
    let query = document.getElementById("search_input").value;

    const url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;

    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    return data;
}
let searcH = async (url)=>{
    let res = await fetch(url);
    let data = await res.json();
    return data;
}


let display =  (data,container)=>{
    data.forEach((ele)=>{
        let box = document.createElement("div")
        box.setAttribute("class","news")
        let imgBox = document.createElement("div")
        imgBox.setAttribute("class","imgBox")
        let img = document.createElement("img");
        img.src = ele.urlToImage;
        imgBox.append(img);

        let descBox = document.createElement("div");
        descBox.setAttribute("class","descBox")
        let source = document.createElement("h5");
        source.innerText = `Source:- ${ele.source.name}`

        let watch = document.createElement("a");
        watch.innerText = `Watch:-${watch.href = ele.url}`

        let auth = document.createElement("h5")
        auth.innerText = `Author:- ${ele.author}`
        let tit = document.createElement("h3")
        tit.innerText = ele.title;
        descBox.append(tit,watch,source,auth)
        box.append(imgBox,descBox);
        container.append(box);

        box.addEventListener("click",()=>{
            // console.log(ele);
            localStorage.setItem("news",JSON.stringify(ele));
            window.location.href = 'news.html';
        })
    })
}
export {search,display,searcH};