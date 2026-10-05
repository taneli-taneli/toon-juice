const cursor = document.querySelector(".cursor");
const interactiveSelectors = "a, button, .filter, .logo, .cartoon-card, .slide-image-link";

if (cursor && window.matchMedia("(pointer: fine)").matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    const updateCursor = () => {
        cursorX += (mouseX - cursorX) * 0.18;
        cursorY += (mouseY - cursorY) * 0.18;
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        requestAnimationFrame(updateCursor);
    };

    document.addEventListener("pointermove", event => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        cursor.classList.add("visible");
    });

    document.addEventListener("pointerdown", () => cursor.classList.add("is-active"));
    document.addEventListener("pointerup", () => cursor.classList.remove("is-active"));
    document.addEventListener("pointerleave", () => cursor.classList.remove("visible"));

    document.querySelectorAll(interactiveSelectors).forEach(element => {
        element.addEventListener("mouseenter", () => cursor.classList.add("is-active"));
        element.addEventListener("mouseleave", () => cursor.classList.remove("is-active"));
    });

    requestAnimationFrame(updateCursor);
}

const cartoonsSection = document.querySelector("#cartoons");
let shows = [];

fetch("shows.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Could not load shows.json (${response.status})`);
        }
        return response.json();
    })
    .then(data => {
        shows = data;
        renderShows(shows);
        document.querySelectorAll(".filter").forEach(filter => {
            filter.addEventListener("click", () => applyFilter(filter));
        });
    })
    .catch(error => {
        console.error(error);
        cartoonsSection.textContent = "Sorry, the shows could not be loaded.";
    });

function renderShows(list) {
    cartoonsSection.replaceChildren();

    list.forEach(show => {
        const card = document.createElement("article");
        card.classList.add("card");

        const title = document.createElement("h2");
        title.classList.add("cartoonTitle");
        title.textContent = show.show;

        const image = document.createElement("img");
        image.classList.add("cartoonCover", "slide-image");
        image.src = show.path;
        image.alt = `${show.show} cover`;

        const imageLink = document.createElement("a");
        imageLink.classList.add("slide-image-link");
        imageLink.href = show.path;
        imageLink.target = "_blank";
        imageLink.rel = "noopener noreferrer";
        imageLink.setAttribute("aria-label", `Open ${show.show} image`);
        imageLink.appendChild(image);

        const imageFrame = document.createElement("div");
        imageFrame.classList.add("slide-container");

        const imageInfo = document.createElement("p");
        imageInfo.classList.add("hidden-text");
        imageInfo.textContent = `${show.year} · ${show.Network} · ${show.animation_style}`;
        imageFrame.append(imageLink, imageInfo);

        const genres = document.createElement("p");
        genres.classList.add("genres");
        genres.textContent = show.genre;

        card.append(title, imageFrame, genres);
        cartoonsSection.appendChild(card);
    });
}

function applyFilter(filter) {
    const genre = filter.dataset.genre;
    const style = filter.dataset.rated;

    if (genre) {
        const selectedGenre = genre.toLowerCase();
        renderShows(selectedGenre === "all"
            ? shows
            : shows.filter(show => show.genre.toLowerCase().includes(selectedGenre)));
    } else if (style) {
        const selectedStyle = style.toLowerCase().replaceAll("-", "");
        renderShows(shows.filter(show =>
            show.animation_style.toLowerCase().replaceAll(/[^a-z0-9]/g, "").includes(selectedStyle)
        ));
    }

    document.querySelectorAll(".filter").forEach(item => item.classList.remove("selected"));
    filter.classList.add("selected");
}