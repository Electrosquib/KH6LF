blog_content = document.getElementById("blog-content");
// blog_content.innerHTML = marked.parse('# Marked in the browser\n\nRendered by **marked**.');
const blog_url = "../blogs/sample.md";
let blog = "";
get_blog(blog_url);

function get_blog(blog_url) {
    $.get(blog_url, (data) => {
        blog_content.innerHTML = marked.parse(data);
        console.log(data);
    })
}

