(function() {
  function getFormatedDateOfToday() {
    var today = new Date();
    var year = today.getUTCFullYear();
    var month = today.getUTCMonth() + 1;
    var date = today.getUTCDate();
    return '' + year + (month > 9 ? month : '0' + month) + (date > 9 ? date : '0' + date) + '';
  };
  window.addEventListener('load', function() {
    var toggle = document.querySelector('.navbar-toggle');
    var collapse = document.querySelector('.navbar-collapse');
    toggle.addEventListener('click', function() {
      collapse.classList.toggle('hidden-xs');
    });
    if (window.location.hash) {
      var anchor = document.querySelector(window.location.hash);
      anchor.nextElementSibling.classList.add('featured');
    }
    var newVideos = document.querySelectorAll('[data-added]');
    for (var i = 0, max = newVideos.length; i < max; i++) {
      var todayDate = +getFormatedDateOfToday();
      var videoDate = +newVideos[i].getAttribute('data-added');
      if (todayDate - videoDate <= 10) {
        newVideos[i].classList.remove('hide');
      }
    }
  });
})();
