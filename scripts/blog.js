var blog_content = document.getElementById("blog-content");
// blog_content.innerHTML = marked.parse('# Marked in the browser\n\nRendered by **marked**.');
const blog_url = "./posts/sample.md";
let blog = "";

get_blog(blog_url);

function get_blog(blog_url) {
    $.get(blog_url, (data) => {
        blog_content.innerHTML = marked.parse(data);
    })
}

var categories;
function get_categories() {
    const cat_path = "./posts/categories.json";
    $.get(cat_path, (data) => {
        categories = Object.keys(data);
        console.log(categories);

        const mobile_categories = document.getElementById("mobile-categories");
        const cat_arrow = document.getElementById("cat_arrow");

        while (mobile_categories.firstChild) {
            mobile_categories.removeChild(mobile_categories.firstChild);
        }
        var disp = mobile_categories.style.display;
        console.log(disp);
        if (disp == "block") {
            mobile_categories.style.display = "none";
            cat_arrow.innerHTML = "▶"

        }
        else {
            mobile_categories.style.display = "block";
            cat_arrow.innerHTML = "▼"

        }
        categories.forEach((element, i) => {
            var li = document.createElement("li");      
            const words = element.split("_");
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substring(1);
            }
            li.innerText = words.join(" ");
            li.style.transformOrigin = "top center";
            li.style.animation = `rotateX 300ms ${60*i}ms ease-in-out forwards`;
            mobile_categories.appendChild(li);
        });
    })
}
var show_mobile_cats = document.getElementById("mobile-cat-show").addEventListener("click", get_categories);