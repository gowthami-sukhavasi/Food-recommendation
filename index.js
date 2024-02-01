function hideDiv() {
  //   console.log("inside hidediv");
  var hide = document.getElementById("hide-div");
  var show = document.getElementById("show-div");
  var show1 = document.getElementById("show-div1");
  var show2 = document.getElementById("show-div2");
  var show3 = document.getElementById("show-div3");
  var show4 = document.getElementById("show-div4");

  if (hide.style.display === "block" && show.style.display === "none") {
    hide.style.display = "none";
    show.style.display = "block";
    show1.style.display = "block";
    show2.style.display = "block";
    show3.style.display = "block";
    show4.style.display = "block";
  }
}

async function openSearch() {
  let output = "";
  let v = document.getElementById("text-search").value;
  console.log(v);
  const data = await fetch(
    `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING`
  );

  const json = await data.json();
  const restaurants =
    json.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;

  if (restaurants) {
    restaurants.map((restaurant) => {
      return (output += `
    <div class="col-md-3">
    <div class="feature-box">
    <div class="feature-img">
    <a target = "_blank" href=" ${restaurant.action.link}">
    <img src="${
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
      restaurant.imageId
    }"
        style="width=450px; height=450px;">
    </a>
    </div>
    </div></div>
    `);
    });

    document.getElementById("title").innerHTML += output;
  } else {
    console.log("error");
  }
}
