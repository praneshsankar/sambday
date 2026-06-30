const gallerySectionsContainer = document.getElementById("gallerySections");

function renderGallery() {
  gallerySectionsContainer.innerHTML = "";

  // Loop through every section you defined in gallery-data.js
  for (const [sectionName, data] of Object.entries(galleryData)) {
    
    // Create the main section container
    const section = document.createElement("section");
    section.className = "hot-ridhi"; 
    section.setAttribute("aria-label", sectionName);

    // Set the path to look for images based on the section name
    const folderPath = `assets/galleries/${sectionName}/`;

    // Build the header and scroll area
    section.innerHTML = `
      <div class="hot-ridhi__header">
        <div class="hot-ridhi__title-row">
          <h2 class="hot-ridhi__title">${sectionName}</h2>
        </div>
        <p class="hot-ridhi__description" ${data.description ? '' : 'hidden'}>${data.description}</p>
      </div>
      <div class="hot-ridhi__scroll"></div>
    `;

    const scrollContainer = section.querySelector(".hot-ridhi__scroll");

    // Loop through the image filenames and add them to the scroll area
    data.images.forEach((imgName, index) => {
      const wrap = document.createElement("div");
      wrap.className = "hot-ridhi__item hot-ridhi__photo-wrap";

      const img = document.createElement("img");
      img.src = folderPath + imgName; // Combines folder path + filename
      img.alt = `${sectionName} picture ${index + 1}`;
      img.className = "hot-ridhi__photo";

      wrap.appendChild(img);
      scrollContainer.appendChild(wrap);
    });

    // Add the finished section to the page
    gallerySectionsContainer.appendChild(section);
  }
}

// Run the function as soon as the page loads
renderGallery();