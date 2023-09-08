console.log("working");
//get elemet by id
const main = document.getElementById("inner-projects");
console.log(main);
const projects = [
  {
    id: 1,
    github: "https://github.com/Muba-rak/goal-on-client",
    web: "https://goalforola.netlify.app/",
    image: "https://goalforola.netlify.app/assets/bro-e964dd44.png",
    desc: "A web Application that helps a user creates and manage, update and delete goals ",
    title: "Goal App",
  },
  {
    id: 2,
    github: "https://github.com/Muba-rak/profileit-client",
    web: "https://ike-ndu.netlify.app/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5buPddfkNRblPF-d7i2wKEdM4mux4yafdUkl_IsQJ&s",
    title: "Profile It",
    desc: "This Web App has an authentication for users, helps students to submit assignments and professors to view submitted assignments",
  },
  {
    id: 3,
    github: "https://github.com/Muba-rak/The-meal-db",
    web: "https://mealtest.netlify.app/",
    image: "https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg",
    title: "Meal DB",
    desc: "A simple food library built using react, api integration and styled with bootstrap for searching for different meal options",
  },
  {
    id: 4,
    github: "https://github.com/Muba-rak/Kudiclone",
    web: "https://kudi-by-mubarak.netlify.app/#",
    title: "Kudi",
    image:
      "https://kudi-by-mubarak.netlify.app/static/media/Lady2.32bb44ec.png",
    desc: "A simple informational landing page for a business built using react and vanilla CSS",
  },
  {
    id: 5,
    github: "https://github.com/Muba-rak/Adventor-redo",
    web: "https://adventorbyola.netlify.app/",
    image:
      "https://media.istockphoto.com/photos/3d-cruise-ship-vacation-holiday-summer-illustration-concept-picture-id599881398?b=1&k=20&m=599881398&s=170667a&w=0&h=8gbyigz_NcFgi_h1JqK0Ug1nw3Jos7vo0ZEeYU2sDZ8=",
    desc: "An adventure blog landing page displaying different adventure options to try out",
    title: "Adventor",
  },
  {
    id: 6,
    github: "https://github.com/Muba-rak/Rugwart-clone",
    web: "https://rugwart-by-mubarak.netlify.app/",
    image:
      "https://rugwart-by-mubarak.netlify.app/static/media/Laptop.e84557d7.png",
    desc: "An online university landing page for information built with react and CSS",
    title: `Rugwart`,
  },
];

function showProjects() {
  main.innerHTML = "";
  projects.forEach((project) => {
    const { id, web, github, desc, image, title } = project;

    const projectEl = document.createElement("div");
    projectEl.classList.add("col");

    projectEl.innerHTML = `
            <div class="card mb-3 shadow-md shadow">
              <img
                src=${image}
                class="card-img-top img"
                alt=${github}
              />
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">
                 ${desc}
                </p>
                <div class= 'd-flex gap-3 align-items-center'>
                <a href = ${github} class='text-decoration-none'>
                    <i style="cursor: pointer" class="bi bi-github fs-4 text-dark"></i>
                </a>
                <a href = ${web} class='text-decoration-none'>
                   <i style="cursor: pointer" class="bi bi-browser-edge fs-4 text-secondary"></i>
                </a>
                </div>
              </div>
            </div>
      `;

    main.appendChild(projectEl);
  });
}
showProjects();
