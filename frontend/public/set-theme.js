(function() {
  try {
    var theme = localStorage.getItem('site-theme');
    if (theme) document.documentElement.setAttribute('data-theme', theme);
  } catch(e) {}
})();
