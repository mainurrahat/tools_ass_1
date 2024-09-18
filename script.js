//1. where to add
function fun() {
  const placeslist = document.getElementById("places-list");
  //2. what to be added
  const p = document.createElement("p");
  const date = new Date();
  p.innerText = `You have clicked the sign in button on ${date}`;
  //3.add the child
  placeslist.appendChild(p);
}
