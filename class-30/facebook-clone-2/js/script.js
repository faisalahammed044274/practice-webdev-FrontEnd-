jQuery(document).ready(function () {
  //   jQuery(".box").draggable({ cursor: "pointer", containment: ".big-box" });

  jQuery(".small-box").draggable();

  jQuery(".big-box").droppable({
    drop: function () {
      jQuery(".overlay").remove();
    },
  });
  jQuery(".");
});
