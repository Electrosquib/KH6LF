let preview = document.getElementById("sdr-preview");
let preview_button = document.getElementById("sdr-preview-button");


preview_button.addEventListener("click", () => {
    if ($(preview).css("display") === "block") {
        preview.classList.remove("visible")
    }
    else {
        preview.classList.add("visible")
    }
})