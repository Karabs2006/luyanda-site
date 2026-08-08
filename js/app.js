const galleryContainer = document.querySelector(".subsections");

gsap.registerPlugin(ScrollTrigger);


const pages = [
    {
        name: "Denim",
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
    <h1 class="subsection-name">${page.name}</h1>

    <button type="button" class="subsection-btn"><strong>See More</strong></button>
    `

    const subsectionHeading = card.querySelector(".subsection-name");

    card.style.backgroundImage = `url("./Media/${page.image}")`;


    gsap.fromTo(subsectionHeading, 
    {
        opacity: 0
    },

    {   opacity: 2.5,
        duration: 10,
        
        

        
        scrollTrigger: {

            trigger: card,
            start: "top 20%",
            //end: "bottom bottom",
            scrub: true,

            markers: true
        
        }

        
    }

);

galleryContainer.appendChild(card);

ScrollTrigger.create({
        trigger: card,
        pin: true,
        pinSpacing: true,
        start: "top top",
        end:"bottom center",
      
        });


})


