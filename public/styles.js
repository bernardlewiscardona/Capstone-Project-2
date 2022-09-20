let assetIndex = 1;
displayAuto(assetIndex);
  
function displayAuto(n) {
    let i;
    let slide = document.getElementsByClassName("slide");
    if (n > slide.length) {assetIndex = 1}
    if (n < 1) {assetIndex = slide.length}
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slide[assetIndex-1].style.display = "block"; 

    assetIndex++;
    if (assetIndex > slide.length) {assetIndex = 1} 
    setTimeout(displayAuto, 3000); 
}