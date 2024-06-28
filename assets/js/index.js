function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");
}

function translateText(language) {
    var textElement = document.getElementById("text");
    
    if (language === "neerlands") {
        textElement.textContent = "*.*";
    } else if (language === "engels") {
        textElement.textContent = "*.*";
    }
    
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.remove("show");
}


function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  