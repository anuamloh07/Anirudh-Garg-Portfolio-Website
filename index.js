home.addEventListener('mouseover', function() {
    var containers = document.querySelectorAll('.container');
    for (var i = 0; i < containers.length; i++) {
      containers[i].style.color = "blue";
    }
  });
  