let navbar = ()=>{
    return `<div class="logo">
    <h3><a href="index.html">Home</a></h3>
  </div>
  <div class="input_box">
    <input type="text" id="search_input" placeholder="search latest News...">
  </div>`;
}
let sidebar = ()=>{
    return `<h3 id="in"><a href="search.html">India</a></h3>
    <h3 id="us"><a href="search.html">Usa</a></h3>
    <h3 id="ch"><a href="search.html">China</a></h3>
    <h3 id="uk"><a href="search.html">UK</a></h3>
    <h3 id="nz"><a hrefsearch.htmlNew Zealand</a></h3>`;
}
export {navbar,sidebar}