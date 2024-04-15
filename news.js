let btn = document.querySelector(".search");
let newsBody = document.querySelector(".newsBody");
let nbtn = document.querySelectorAll("nav .bnav button");
let inputValue = document.querySelector("nav input");

nbtn.forEach(btn => {
    btn.onclick = () => {
        inputValue.value = btn.value;
        getData();
    };
});

btn.onclick = getData;

async function getData() {
    let key = "1db2c199f2b94fac969d9d01d9aeb9cf";
    let keyword = inputValue.value;
    let response = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${key}`);
    let data = await response.json();
    putData(data);
}

function putData(data) {
    newsBody.innerHTML = "";

    data.articles.forEach(d => {
        if (d.urlToImage !== null) {
            newsBody.innerHTML += `    
                <div class="ndetail">
                    <img src="${d.urlToImage}" alt="">
                    <div class="ntitle">${d.title}</div>
                    <a href="${d.url}" class="nsee" target="_blank">SEE MORE</a>
                </div>
            `;
        }
    });
}

// Call getData() only once when the page loads
getData();
