$(document).ready(function() {
  setPage();
});

function setPage() {
  $('.holder').jPages({
      containerID : "content",
      previous : "←",
      next : "→",
      perPage : 10,
      delay : 10
  });
}
