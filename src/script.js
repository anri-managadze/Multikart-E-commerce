document.querySelector('#reload').addEventListener('click', function (){location.reload()});

/*  fetch scripts start */
let limits=document.querySelector('#par-select').value;
let descs=document.querySelector('#sort-select').value;
let row=document.querySelector("#output");
let result=[];

function prodFetch(limit,desc) {
    const url = `https://fakestoreapi.com/products?limit=${limit}&sort=${desc}`;
    fetch(url)
        .then(resp => resp.json())
        .then((data) => {
            result = data.map(el => {
                return {
                    image: el.image,
                    title:el.title,
                    description:el.description,
                    price: el.price
                }
            });
            console.log(result);
            genCard1(row.className='row row-cols-1 row-cols-md-4');
        }

)}
function genCard1(){
            let tmp = ``;
            for(let i=0; i< result.length; i++) {
                tmp+=` 
            <div class='col'>
            <div class="card" style="width: 18rem; height: 10rem">
                <img src="${result[i].image}" class="card-img-top mt-4 "  style="width: 8rem; height: 10rem" alt="...">
                <div class="card-body ">
                    <div class="raiting"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                    <h5 class="product display-9 text-secondary">${result[i].title}</h5>
                    <p class="product_price fw-bold display-8">$${result[i].price}</p>
                    <div class="d-flex">
                        <div class="color_circles color_circles1 "></div>
                        <div class="color_circles color_circles2 "></div>
                        <div class="color_circles color_circles3 "></div>
                    </div>
                </div>
            </div>`
            }
            document.getElementById('output').innerHTML+=tmp;
}
function genCard2(roww,coll){
    row.className=`${roww}`;
    let tmp = ``;
    for(let i=0; i< result.length; i++) {
        tmp+=` 
            <div class=${coll}>
                <img src="${result[i].image}" class="card-img-top img-fluid mt-3" style="max-width: 150px; max-height: 200px" alt="...">
                <div class="card-body ">
                    <div class="raiting"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                    <h5 class="product display-9 text-secondary">${result[i].title}</h5>
                    <p class="product_price fw-bold display-9 text-secondary">${result[i].description}</p>
                    <p class="product_price fw-bold display-8">$${result[i].price}</p>
                    <div class="d-flex">
                        <div class="color_circles color_circles1 "></div>
                        <div class="color_circles color_circles2 "></div>
                        <div class="color_circles color_circles3 "></div>
                    </div>
                </div>
            </div>`
    }
    document.getElementById('output').innerHTML+=tmp;
}


function clearBody() {
    document.getElementById('output').innerHTML='';
}

prodFetch();

document.getElementById('result_btn_1').addEventListener('click',(e)=>{
    e.preventDefault();
    clearBody();
    genCard1(row.className='row row-cols-1 row-cols-md-4');
});

document.getElementById('result_btn_2').addEventListener('click',(e)=>{
    e.preventDefault();
    clearBody();
    genCard2(row.className='row row-cols-1','d-flex flex-row ');
});

document.getElementById('result_btn_3').addEventListener('click',(e)=>{
    e.preventDefault();
    clearBody();
    genCard1(row.className='row row-cols-1 row-cols-md-2');
});

document.getElementById('result_btn_4').addEventListener('click',(e)=>{
    e.preventDefault();
    clearBody();
    genCard1(row.className='row row-cols-2 row-cols-md-3');
});

document.getElementById('result_btn_5').addEventListener('click',(e)=>{
    e.preventDefault();
    clearBody();
    genCard1(row.className='row row-cols-2 row-cols-md-4');
});

document.querySelector('#par-select').addEventListener('change',(e)=>{
    e.preventDefault();
    clearBody();
    let limits=document.querySelector('#par-select').value;
    prodFetch(limits);

});

document.querySelector('#sort-select').addEventListener('change',(e)=>{
    e.preventDefault();
    clearBody();
    let descs=document.querySelector('#sort-select').value;
    prodFetch(descs);

});
/*  fetch scripts end */

/*  dropdown menus scripts start */

document.querySelector('.nav-button').addEventListener('click', function() {
    this.parentNode.parentNode.classList.toggle('closed') }, false);

document.querySelector('.size-button').addEventListener('click', function () {
    this.parentNode.parentNode.classList.toggle('size') }, false);

document.querySelector('.price-button').addEventListener('click', function() {
    this.parentNode.parentNode.classList.toggle('price') }, false);

document.querySelector('.color-button').addEventListener('click', function() {
    this.parentNode.parentNode.classList.toggle('color') }, false);

/*  dropdown menus scripts end */


