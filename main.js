 have = [" 1. Chez Pizza", " 2. Chicken Pizza", " 3. Oreo Pizza", " 4. Veggie Pizza", " 5. Chocolate Pizza"];

 function showmenu() {
     console.log(have);
     document.getElementById("top1").innerHTML = have[0];
     document.getElementById("top2").innerHTML = have[1];
     document.getElementById("top3").innerHTML = have[2];
     document.getElementById("top4").innerHTML = have[3];
     document.getElementById("top5").innerHTML = have[4];
 };
 oiu = 5;

 function addsuggest() {
     newbi = document.getElementById("inpizza").value;
     console.log(newbi);
     oiu = oiu + 1;
     have.push(" " + oiu + ". " + newbi);
     console.log(have);
 };

 function showsuggest() {
     document.getElementById("tope").innerHTML = have;
 };