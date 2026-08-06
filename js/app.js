const galleryContainer = document.querySelector(".subsections");

const pages = [
    {
        name: "Jeans",
        image: "jeans.jpg"
    },

    {
        name: "Caps",
        image: "cap.png"
    },

    {
        name: "Jackets",
        image:"jacket.jpg"
    }
]


pages.forEach((page) => {

    const card = document.createElement("div");
    card.classList.add("gallery-card")

    card.innerHTML = 
    `
    <h1>${page.name}</h1>

    <button type="button" class="subsection-btn"><strong>See More</strong></button>
    `

    card.style.backgroundImage = `url("./Media/${page.image}")`;


galleryContainer.appendChild(card);




})