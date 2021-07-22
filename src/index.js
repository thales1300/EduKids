//Graficos
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(pizzaG);
function pizzaG() {
  var data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['Eletronics',    6],
    ['Furniture', 10],
    ['Toys', 4]
    
  ]);

  var options = {
    pieHole: 0.4,
    pieSliceTextStyle: {
      color: 'black',
    },
    legend: 'top'

  };

  var chart = new google.visualization.PieChart(document.getElementById('pizzaG'));
  chart.draw(data, options);
}


google.charts.setOnLoadCallback(areaG);
function areaG() {
    var data = google.visualization.arrayToDataTable([
      ['Ano', 'Laptops', 'Headsets','Monitors','Phones'],
      ['2017',  900,      400,      200,         300],
      ['2018',  600,      460,      600,         200],
      ['2019',  800,       514,       178,       151],
      ['2020',  400,      600,       250,        400]
    ]);
  
    var options = {
      hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
      vAxis: {minValue: 0},
      legend: 'top',
    };
  
    var chart = new google.visualization.AreaChart(document.getElementById('areaG'));
    chart.draw(data, options);
}

//Side Bar

$(".saida").mouseleave(function () {
  if ($("#pageEvent").hasClass("show")) {
    $("#pageEvent").removeClass("show");
  }
});

 //galinha


let currentDroppable = null;

gali.onmousedown = function(event) {

  let shiftX = event.clientX - gali.getBoundingClientRect().left;
  let shiftY = event.clientY - gali.getBoundingClientRect().top;

  gali.style.position = 'absolute';
  gali.style.zIndex = 1000;
  document.body.append(gali);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    gali.style.left = pageX - shiftX + 'px';
    gali.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    gali.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    gali.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable');
    if (currentDroppable != droppableBelow) {
      if (currentDroppable) { // null when we were not over a droppable before this event
        leaveDroppableGali(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) { // null if we're not coming over a droppable now
        // (maybe just left the droppable)
        enterDroppableGali(currentDroppable);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  gali.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    gali.onmouseup = null;
  };

};

gali.ondragstart = function() {
return false;
};

function enterDroppableGali(elem) {
  if($(elem).attr("id") === "chiqueiro"){
    $(elem).attr("src", "./images/chiqueiroOk.jpg");
    $('#gali').addClass("remove");
    setTimeout(function () {
      $('#gali').removeAttr('id');
    }, 1500);
    finalizada();
  }
}
function leaveDroppableGali(elem) {
  
}

// leão 

lion.onmousedown = function(event) {

let shiftX = event.clientX - lion.getBoundingClientRect().left;
let shiftY = event.clientY - lion.getBoundingClientRect().top;

lion.style.position = 'absolute';
lion.style.zIndex = 1000;
document.body.append(lion);

moveAt(event.pageX, event.pageY);

function moveAt(pageX, pageY) {
  lion.style.left = pageX - shiftX + 'px';
  lion.style.top = pageY - shiftY + 'px';
}

function onMouseMove(event) {
  moveAt(event.pageX, event.pageY);

  lion.hidden = true;
  let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
  lion.hidden = false;

  if (!elemBelow) return;

  let droppableBelow = elemBelow.closest('.droppable');
  if (currentDroppable != droppableBelow) {
    if (currentDroppable) { // null when we were not over a droppable before this event
      leaveDroppableLion(currentDroppable);
    }
    currentDroppable = droppableBelow;
    if (currentDroppable) { // null if we're not coming over a droppable now
      // (maybe just left the droppable)
      enterDroppableLion(currentDroppable);
    }
  }
}

document.addEventListener('mousemove', onMouseMove);

lion.onmouseup = function() {
  document.removeEventListener('mousemove', onMouseMove);
  lion.onmouseup = null;
};

};

lion.ondragstart = function() {
return false;
};

function enterDroppableLion(elem) {
  if($(elem).attr("id") === "savana"){
    $(elem).attr("src", "./images/savanaOk.jpg");
    $('#lion').addClass("remove");
    setTimeout(function () {
      $('#lion').removeAttr('id');
    }, 1500);
    finalizada();
  }
}
function leaveDroppableLion(elem) {
  
}


//dog

dog.onmousedown = function(event) {

let shiftX = event.clientX - dog.getBoundingClientRect().left;
let shiftY = event.clientY - dog.getBoundingClientRect().top;

dog.style.position = 'absolute';
dog.style.zIndex = 1000;
document.body.append(dog);

moveAt(event.pageX, event.pageY);

function moveAt(pageX, pageY) {
  dog.style.left = pageX - shiftX + 'px';
  dog.style.top = pageY - shiftY + 'px';
}

function onMouseMove(event) {
  moveAt(event.pageX, event.pageY);

  dog.hidden = true;
  let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
  dog.hidden = false;

  if (!elemBelow) return;

  let droppableBelow = elemBelow.closest('.droppable');
  if (currentDroppable != droppableBelow) {
    if (currentDroppable) { // null when we were not over a droppable before this event
      leaveDroppableDog(currentDroppable);
    }
    currentDroppable = droppableBelow;
    if (currentDroppable) { // null if we're not coming over a droppable now
      // (maybe just left the droppable)
      enterDroppableDog(currentDroppable);
    }
  }
}

document.addEventListener('mousemove', onMouseMove);

dog.onmouseup = function() {
  document.removeEventListener('mousemove', onMouseMove);
  dog.onmouseup = null;
};

};

dog.ondragstart = function() {
return false;
};


function enterDroppableDog(elem) {
  if($(elem).attr("id") === "casadog"){
    $(elem).attr("src", "./images/casadogOk.jpg");
    $('#dog').addClass("remove");
    setTimeout(function () {
      $('#dog').removeAttr('id');
    }, 1500);
    finalizada();
  }
}


function leaveDroppableDog(elem) {
  
}

//golf

golf.onmousedown = function(event) {

let shiftX = event.clientX - golf.getBoundingClientRect().left;
let shiftY = event.clientY - golf.getBoundingClientRect().top;

golf.style.position = 'absolute';
golf.style.zIndex = 1000;
document.body.append(golf);

moveAt(event.pageX, event.pageY);

function moveAt(pageX, pageY) {
  golf.style.left = pageX - shiftX + 'px';
  golf.style.top = pageY - shiftY + 'px';
}

function onMouseMove(event) {
  moveAt(event.pageX, event.pageY);

  golf.hidden = true;
  let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
  golf.hidden = false;

  if (!elemBelow) return;

  let droppableBelow = elemBelow.closest('.droppable');
  if (currentDroppable != droppableBelow) {
    if (currentDroppable) { // null when we were not over a droppable before this event
      leaveDroppableGolf(currentDroppable);
    }
    currentDroppable = droppableBelow;
    if (currentDroppable) { // null if we're not coming over a droppable now
      // (maybe just left the droppable)
      enterDroppableGolf(currentDroppable);
    }
  }
}

document.addEventListener('mousemove', onMouseMove);

golf.onmouseup = function() {
  document.removeEventListener('mousemove', onMouseMove);
  golf.onmouseup = null;
};

};

golf.ondragstart = function() {
  return false;
};


function enterDroppableGolf(elem) {
  if($(elem).attr("id") === "oceano"){
    $(elem).attr("src", "./images/OceanoOK.jpg");
    $('#golf').addClass("remove");
    setTimeout(function () {
      $('#golf').removeAttr('id');
    }, 1500);
    finalizada();
  }
}


function leaveDroppableGolf(elem) {
}

function finalizada(){
  if($('#chiqueiro').attr("src") =="./images/chiqueiroOk.jpg" && $('#oceano').attr("src") =="./images/OceanoOK.jpg"
    && $('#savana').attr("src")  =="./images/savanaOk.jpg"&& $('#casadog').attr("src") =="./images/casadogOk.jpg" ){

      $('#centro').append("<img" +" src="+"./images/ok.png "+ "id="+"fim "+'"style="+"width: 400px; height: 400px;"'+" class="+'"mt-5 mb-3 ml-5" "'+"></img>");
      $('#centro').append("<p" +" class="+'"text-center h3 font-weight-bold" "'+ "id="+"fim1"+">"+"Atividade Finalizada."+"</img>");
      setTimeout(function(){
        $( "#modal" ).empty();
        $('.remove').remove();
        $('#atv1').removeClass().addClass("fa fa-check fa-2x py-3 pl-1");
        $('#atv2').removeClass().addClass("fa fa-play fa-2x py-3 pl-1");
        $('#modal').append("<div class="+'"embed-responsive embed-responsive-16by9"'+"></div>");
        $('.embed-responsive').append("<iframe class="+"embed-responsive-item"+" src="+"https://www.youtube.com/embed/Qdr-zrMzY-w?rel=0"+" allowfullscreen></iframe>");
        clearInterval(i);
      }, 4000);
      

  }
}

function login(){
  window.location.assign("http://127.0.0.1:5500/login.html");
}