document.addEventListener("DOMContentLoaded", () => {
  const brands = [
    {
      name: "Milestones",
      logo: "images/Milestones Logo White.png",
      url: "https://milestones.integratedproductions.com/",
      color: "linear-gradient(135deg,rgb(0, 132, 255),rgb(0, 38, 255))",
    },
    {
      name: "Freshii",
      logo: "images/Freshii Green Logo.png",
      url: "https://freshii.integratedproductions.com/",
      color: "linear-gradient(135deg, #00cc66, #009933)",
    },
    {
      name: "Quesada",
      logo: "images/Quesada Logo Enhanced.png",
      url: "https://quesada.integratedproductions.com/",
      color: "linear-gradient(135deg,rgb(201, 0, 0),rgb(160, 1, 1))",
    },
    {
      name: "O'Tacos",
      logo: "images/O Tacos Logo.png",
      url: "https://otacos.integratedproductions.com/",
      color: "linear-gradient(135deg, #ff6600, #cc3300)",
    },
    {
      name: "Jimmy John's",
      logo: "images/jj-02.png",
      url: "#",
      color: "linear-gradient(135deg,rgb(26, 26, 26),rgb(0, 0, 0))",
    },
    {
      name: "Pita Pit",
      logo: "images/PitaPit-logo-home-page-1.svg",
      url: "#",
      color: "linear-gradient(135deg,rgb(26, 26, 26),rgb(0, 0, 0))",
    },
    {
      name: "Noodlebox",
      logo: "images/NBX_LOGO_2020.png",
      url: "",
      color: "linear-gradient(135deg,rgb(0, 132, 255),rgb(0, 38, 255))",
    },
    {
      name: "Second Cup",
      logo: "images/second-cup-1.svg",
      url: "",
      color: "linear-gradient(135deg, #00cc66, #009933)",
    },
    {
      name: "Shoeless Joe's",
      logo: "images/Shoeless-Joes-Slider.svg",
      url: "",
      color: "linear-gradient(135deg,rgb(201, 0, 0),rgb(160, 1, 1))",
    },
    {
      name: "Rostisseries Benny",
      logo: "images/la-belle.svg",
      url: "",
      color: "linear-gradient(135deg, #ff6600, #cc3300)",
    },
    {
      name: "Rostisseries Benny",
      logo: "images/BENNY-logo-2022.svg",
      url: "",
      color: "linear-gradient(135deg, #ff6600, #cc3300)",
    },
    {
      name: "Fionns",
      logo: "images/FIONNs-logo-HomePage.svg",
      url: "",
      color: "linear-gradient(135deg,rgb(26, 26, 26),rgb(0, 0, 0))",
    },
    {
      name: "Monza",
      logo: "images/monza.svg",
      url: "",
      color: "linear-gradient(135deg,rgb(26, 26, 26),rgb(0, 0, 0))",
    },
    {
      name: "Souvlaki Bar",
      logo: "images/souvlaki-bar.svg",
      url: "",
      color: "linear-gradient(135deg,rgb(0, 132, 255),rgb(0, 38, 255))",
    },
    {
      name: "Fusee",
      logo: "images/Fusee-logo-2022.svg",
      url: "",
      color: "linear-gradient(135deg, #00cc66, #009933)",
    },
    {
      name: "Rostissieries Au Coq",
      logo: "images/AuCoq-logo-2022.svg",
      url: "",
      color: "linear-gradient(135deg,rgb(201, 0, 0),rgb(160, 1, 1))",
    },
    {
      name: "Copper Branch",
      logo: "images/69496-003-CopperBranch-Slider-1.svg",
      url: "",
      color: "linear-gradient(135deg, #ff6600, #cc3300)",
    },
    {
      name: "Chocolato",
      logo: "images/chocolato.svg",
      url: "",
      color: "linear-gradient(135deg,rgb(26, 26, 26),rgb(0, 0, 0))",
    },
    {
      name: "Nickels",
      logo: "images/nickels.svg",
      url: "",
      color: "linear-gradient(135deg,rgb(26, 26, 26),rgb(0, 0, 0))",
    },
    {
      name: "Bacaro",
      logo: "images/baccaro.svg",
      url: "",
      color: "linear-gradient(135deg, #ff6600, #cc3300)",
    },
    {
      name: "Carlos & Pepe’s",
      logo: "images/carlos-and-pepes-logo.png",
      url: "",
      color: "linear-gradient(135deg,rgb(26, 26, 26),rgb(0, 0, 0))",
    },
    {
      name: "Big Rig",
      logo: "images/big-rig.svg",
      url: "",
      color: "linear-gradient(135deg,rgb(26, 26, 26),rgb(0, 0, 0))",
    },
    {
      name: "La Chambre",
      logo: "images/chambre.svg",
      url: "",
      color: "linear-gradient(135deg,rgb(0, 132, 255),rgb(0, 38, 255))",
    },
    {
      name: "Tommy",
      logo: "images/tommy.svg",
      url: "",
      color: "linear-gradient(135deg, #00cc66, #009933)",
    },
    {
      name: "GattoMatto",
      logo: "images/gattomatto.svg",
      url: "",
      color: "linear-gradient(135deg,rgb(201, 0, 0),rgb(160, 1, 1))",
    },
    {
      name: "Le Blossom",
      logo: "images/logo-le-blossom-foodtastic.svg",
      url: "",
      color: "linear-gradient(135deg, #ff6600, #cc3300)",
    },
  ];

  const container = document.getElementById("brandsContainer");

  brands.forEach((brand) => {
    const brandBox = document.createElement("div");
    brandBox.classList.add("brand-box");
    // brandBox.style.background = brand.color;
    brandBox.addEventListener("click", () => {
      window.open(brand.url, "_blank");
    });

    const img = document.createElement("img");
    img.src = brand.logo;
    img.alt = brand.name;

    const enterPortal = document.createElement("div");
    enterPortal.classList.add("enter-portal");
    // enterPortal.style.background = brand.color;
    enterPortal.textContent = "";

    brandBox.appendChild(img);
    brandBox.appendChild(enterPortal);
    container.appendChild(brandBox);
  });

  // --- Animation sequence only after all brand boxes are rendered ---
  const logo = document.getElementById("foodtastic-logo");
  const heroH3 = document.querySelector(".hero-container h3");
  const mainH1 = document.querySelector(".main-container h1");
  const brandsContainer = document.querySelector(".brands-container");
  const boxes = brandsContainer.querySelectorAll(".brand-box");

  // Hide elements only via JS (for no-JS fallback)
  // logo.style.opacity = 0;
  // logo.style.transform = "scale(0.8)";
  // heroH3.style.opacity = 0;
  mainH1.style.opacity = 0;
  brandsContainer.style.opacity = 0;
  boxes.forEach((box) => {
    // box.style.opacity = 0;
    // box.style.transform = "translateY(30px)";
  });

  // Animation sequence
  setTimeout(() => {
    // 1. Show logo with vanish effect
    logo.style.transition = "opacity 0.7s, transform 0.7s";
    logo.style.opacity = 1;
    logo.style.transform = "scale(1)";
    setTimeout(() => {
      // 2. Show h3
      heroH3.style.transition = "opacity 0.7s";
      heroH3.style.opacity = 1;
      setTimeout(() => {
        // 3. Show h1
        mainH1.style.transition = "opacity 0.7s";
        mainH1.style.opacity = 1;
        setTimeout(() => {
          // 4. Show brands container
          brandsContainer.style.transition = "opacity 0.7s";
          brandsContainer.style.opacity = 1;
          // 5. Animate each brand box one by one
          boxes.forEach((box, i) => {
            setTimeout(() => {
              // box.style.transition = "opacity 0.5s, transform 0.5s";
              // box.style.opacity = 1;
              box.classList.add("visible");
            }, i * 100);
          });
        }, 400);
      }, 400);
    }, 0);
  }, 0);

  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });
});
