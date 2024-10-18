//get elemet by id
const main = document.getElementById("inner-projects");

const projects = [
  {
    id: 6,
    github: "https://github.com/Muba-rak/jobme-client",
    web: "https://jobme-client.vercel.app/",
    image: `data:image/png;base64,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`,
    desc: "An online platform for displaying jobs built with react",
    title: `JobMe`,
  },
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
