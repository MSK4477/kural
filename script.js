async function bar() {
    var p1 = await fetch("https://api-thirukkural.vercel.app/api?num=1");
    var p2 = await p1.json();


    // Converted object into Array of Objects (Ref: Line 7 in Internet)
var arrayData = Object.entries(p2).map(([key, value]) => ({ [key]: value }));
  
    var titles = ['குறள் எண்', 'திருக்குறள் பால்', 'பகுதி',"வாழ்த்து","முதல் வரி","இரண்டாம் வரி","விளக்கம்","Section","Chapter","Type","In Englis","Explanation In English"];
    var div1=document.createElement("div")
    div1.innerHTML="திருக்குறள் மற்றும் அதன் விளக்கம் "
    div1.style.textAlign="center"
    div1.style.padding="10px"
    div1.setAttribute("class","hello")
    document.body.append(div1);
    for (let i = 0; i < arrayData.length; i++) {
      var obj = arrayData[i];
  console.log(obj);
      var values = Object.values(obj);
      var title = titles[i]; 
  
      var div = document.createElement("div");
      div.style.textAlign="center"
      div.innerHTML = `<h2 style="color:red">${title}</h2>`; 
 
      values.forEach((value) => {
        var ol = document.createElement("ol");
        ol.innerText = value;
        div.appendChild(ol);
      });
  
      document.body.append(div);
    }
  }
  
  bar();
  