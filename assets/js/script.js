// ============================================
// PROJECT PROGRESSION GALLERY (NEW)
// ============================================

<<<<<<< HEAD
const populateProgressionGallery = function(images) {
  const progressionContainer = document.querySelector('[data-project-progression]');
  progressionContainer.innerHTML = '';

  if (!images || images.length === 0) {
    progressionContainer.innerHTML = '<p style="color: var(--light-gray); font-size: 14px;">No additional project steps available.</p>';
    return;
=======
// ============================================================
//  PORTFOLIO TEMPLATE — JavaScript
// ============================================================



// -----------------------------------------------------------
//  Helper: toggles the "active" class on any element
// -----------------------------------------------------------
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
}



// -----------------------------------------------------------
//  SIDEBAR TOGGLE (mobile only)
// -----------------------------------------------------------
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});



// -----------------------------------------------------------
//  TESTIMONIALS MODAL
// -----------------------------------------------------------
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
}

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// -----------------------------------------------------------
//  PORTFOLIO FILTER
// -----------------------------------------------------------
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
>>>>>>> 5c66e82c993bffdddaa609336409e3d39c11c2c6
  }

<<<<<<< HEAD
  images.forEach(function(image, index) {
    const item = document.createElement('div');
    item.className = 'progression-item';
    item.innerHTML = `
      <div class="progression-counter">Step ${index + 1} of ${images.length}</div>
      <img src="${image.src}" alt="Project step ${index + 1}" loading="lazy" />
      <div class="progression-caption">${image.caption}</div>
    `;
    progressionContainer.appendChild(item);
=======
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
>>>>>>> 5c66e82c993bffdddaa609336409e3d39c11c2c6
  });
};

<<<<<<< HEAD
// UPDATE PROJECT MODAL HANDLER
=======


// -----------------------------------------------------------
//  PROJECT DETAIL MODAL
//  Supports a scrollable progress gallery if the project has
//  a data-project-gallery attribute (JSON array).
// -----------------------------------------------------------
const projectModalContainer = document.querySelector("[data-project-modal-container]");
const projectModalClose = document.querySelector("[data-project-modal-close]");
const projectOverlay = document.querySelector("[data-project-overlay]");
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectModalImg = document.querySelector("[data-project-modal-img]");
const projectModalDescription = document.querySelector("[data-project-modal-description]");
const projectModalTech = document.querySelector("[data-project-modal-tech]");
const projectModalLink = document.querySelector("[data-project-modal-link]");
const projectModalImgWrapper = document.querySelector("[data-project-modal-img-wrapper]");
const projectModalGallery = document.querySelector("[data-project-modal-gallery]");

const projectModalFunc = function () {
  projectModalContainer.classList.toggle("active");
  projectOverlay.classList.toggle("active");
}

>>>>>>> 5c66e82c993bffdddaa609336409e3d39c11c2c6
const projectItems = document.querySelectorAll("[data-filter-item]");

for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener("click", function (e) {
    e.preventDefault();

    const title = this.dataset.projectTitle;
    const description = this.dataset.projectDescription;
    const tech = this.dataset.projectTech;
    const link = this.dataset.projectLink;
    const galleryData = this.dataset.projectGallery;
    const imgElement = this.querySelector(".project-img img");
    
    let images = [];
    if (this.dataset.projectImages) {
      try {
        images = JSON.parse(this.dataset.projectImages);
      } catch (e) {
        console.log('Error parsing project images:', e);
      }
    }

<<<<<<< HEAD
=======
    // Fill in title and description
>>>>>>> 5c66e82c993bffdddaa609336409e3d39c11c2c6
    projectModalTitle.textContent = title;
    projectModalDescription.textContent = description;

<<<<<<< HEAD
    populateProgressionGallery(images);

=======
    // Tech tags
>>>>>>> 5c66e82c993bffdddaa609336409e3d39c11c2c6
    projectModalTech.innerHTML = "";
    if (tech) {
      tech.split(",").map(function(t) { return t.trim(); }).forEach(function(techName) {
        const tag = document.createElement("span");
        tag.className = "tech-tag";
        tag.textContent = techName;
        projectModalTech.appendChild(tag);
      });
    }

<<<<<<< HEAD
=======
    // Project link
>>>>>>> 5c66e82c993bffdddaa609336409e3d39c11c2c6
    if (link && link !== "#") {
      projectModalLink.href = link;
      projectModalLink.style.display = "flex";
    } else {
      projectModalLink.style.display = "none";
    }

<<<<<<< HEAD
    projectModalFunc();
  });
}
=======
    // Gallery or single image
    if (galleryData) {
      let gallery = [];
      try { gallery = JSON.parse(galleryData); } catch(e) {}

      if (gallery.length > 0) {
        // Build the gallery
        projectModalGallery.innerHTML = "";
        gallery.forEach(function(item, index) {
          if (index > 0) {
            const hr = document.createElement("hr");
            hr.className = "gallery-divider";
            projectModalGallery.appendChild(hr);
          }
          const div = document.createElement("div");
          div.className = "gallery-item";
          div.innerHTML =
            '<img src="' + item.src + '" alt="' + (item.label || '') + '">' +
            '<p class="gallery-item-caption">' +
              (item.label ? '<strong>' + item.label + '</strong>' : '') +
              (item.caption || '') +
            '</p>';
          projectModalGallery.appendChild(div);
        });
        projectModalGallery.style.display = "flex";
        projectModalImgWrapper.style.display = "none";
      }
    } else {
      // Single image fallback
      projectModalImg.src = imgElement ? imgElement.src : "";
      projectModalImg.alt = title;
      projectModalImgWrapper.style.display = "block";
      projectModalGallery.style.display = "none";
    }

    // Reset scroll position and open
    projectModalContainer.querySelector(".project-modal-body").scrollTop = 0;
    projectModalFunc();
  });
}

projectModalClose.addEventListener("click", projectModalFunc);
projectOverlay.addEventListener("click", projectModalFunc);



// -----------------------------------------------------------
//  PAGE NAVIGATION
// -----------------------------------------------------------
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
>>>>>>> 5c66e82c993bffdddaa609336409e3d39c11c2c6
