const thumbImg = document.querySelectorAll("#gallery .thumbs-img");
const bigImg = document.querySelector("#gallery .main-img");
const textPhoto = document.querySelector("#gallery .description");
const ttl = document.querySelector("#gallery .gallery-title");

thumbImg.forEach(function (image) {
    image.addEventListener("mouseover", function () {
        bigImg.src = this.src;
        ttl.textContent = this.alt;
        textPhoto.textContent = this.getAttribute("data-description");
    });
});
