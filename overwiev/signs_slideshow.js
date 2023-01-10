let idx = 0;
// Autoupdate controller
function slideController()
{
  idx++;
  showSlides();
  setTimeout(slideController, 2000);
}
// Slideshow draw
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow_slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (idx > slides.length) {idx = 1}
  slides[idx-1].style.display = "block";
}
// All data for craft slideshows
let craft_data = [{id: "c1", idx: 0},
                  {id: "c2", idx: 0},
                  {id: "c3", idx: 0},
                  {id: "c4", idx: 0},
                  {id: "c5", idx: 0},
                  {id: "c6", idx: 0},
                  {id: "c7", idx: 0},
                  {id: "c_out", idx: 0}];
// Show craft menu
function showCraft()
{
  for (let i = 0; i < craft_data.length; i++)
  {
    let elem = document.getElementsByClassName(craft_data[i].id);
    for (let j = 0; j < elem.length; j++)
    {
      elem[j].style.display = "none";
    }
    craft_data[i].idx++;
    if (craft_data[i].idx > elem.length) { craft_data[i].idx = 1 };
    elem[craft_data[i].idx - 1].style.display = "block";
  }
  // for (let i = 0; i < craft_data.length; i++)
  // {
  //   let elem = craft_data[i];
  //   if (elem.enable === 1)
  //   {
  //     let img = document.getElementsByClassName(elem.id);
  //     img[0].src = "data/textures/" + elem.img[0];
  //   }
  //   else if (elem.enable === 2)
  //   {
  //     elem.idx++;
  //     if (elem.idx > elem.img.length) { elem.idx = 1; }
  //     let img = document.getElementsByClassName(elem.id);
  //     let path = "data/textures/" + elem.img[elem.idx - 1];
  //     console.log("img.src:" + img.src);
  //     console.log(path);
  //     img.src = path;
  //   }
  // }
  setTimeout(showCraft, 2000);
}