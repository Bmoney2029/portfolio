// ============================================
// PROJECT PROGRESSION GALLERY (NEW)
// ============================================

const populateProgressionGallery = function(images) {
  const progressionContainer = document.querySelector('[data-project-progression]');
  progressionContainer.innerHTML = '';

  if (!images || images.length === 0) {
    progressionContainer.innerHTML = '<p style="color: var(--light-gray); font-size: 14px;">No additional project steps available.</p>';
    return;
  }

  images.forEach(function(image, index) {
    const item = document.createElement('div');
    item.className = 'progression-item';
    item.innerHTML = `
      <div class="progression-counter">Step ${index + 1} of ${images.length}</div>
      <img src="${image.src}" alt="Project step ${index + 1}" loading="lazy" />
      <div class="progression-caption">${image.caption}</div>
    `;
    progressionContainer.appendChild(item);
  });
};

// UPDATE PROJECT MODAL HANDLER
const projectItems = document.querySelectorAll("[data-filter-item]");

for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener("click", function (e) {
    e.preventDefault();

    const title = this.dataset.projectTitle;
    const description = this.dataset.projectDescription;
    const tech = this.dataset.projectTech;
    const link = this.dataset.projectLink;
    const imgElement = this.querySelector(".project-img img");
    
    let images = [];
    if (this.dataset.projectImages) {
      try {
        images = JSON.parse(this.dataset.projectImages);
      } catch (e) {
        console.log('Error parsing project images:', e);
      }
    }

    projectModalTitle.textContent = title;
    projectModalDescription.textContent = description;
    projectModalImg.src = imgElement.src;
    projectModalImg.alt = title;

    populateProgressionGallery(images);

    projectModalTech.innerHTML = "";
    if (tech) {
      const techArray = tech.split(",").map(function(t) { return t.trim(); });
      techArray.forEach(function(techName) {
        const tag = document.createElement("span");
        tag.className = "tech-tag";
        tag.textContent = techName;
        projectModalTech.appendChild(tag);
      });
    }

    if (link && link !== "#") {
      projectModalLink.href = link;
      projectModalLink.style.display = "flex";
    } else {
      projectModalLink.style.display = "none";
    }

    projectModalFunc();
  });
}