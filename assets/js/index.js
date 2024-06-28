function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");
}

function translateText(language) {
    var textElement = document.getElementById("text");
    
    if (language === "neerlands") {
        textElement.textContent = "Hallo, mijn naam is Henry Elsinga. Ik ben 20 jaar en studeer informatie technologie aan het ROC Friesepoort ter Emmeloord.";
    } else if (language === "engels") {
        textElement.textContent = "Hello, my name is Henry Elsinga. I'm 20 years old and I'm studying Information Technology at ROC Friesepoort in Emmeloord.";
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
  