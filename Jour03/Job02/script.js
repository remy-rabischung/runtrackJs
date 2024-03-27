$(document).ready(function() {
    function melangerImages() {
      let images = $("#rainbow img");
      let arr = images.toArray();
      arr.sort(() => Math.random() - 0.5);
      $("#rainbow").empty().append(arr);

      $("#rainbow img").draggable({
        containment: "#rainbow",
        cursor: "move",
        revert: "invalid"
      });
    }

    function verifierOrdre() {
      let images = $("#rainbow img");
      let ordreCorrect = true;
      images.each(function(index) {
        if (parseInt($(this).attr("alt").substr(-1)) !== index + 1) {
          ordreCorrect = false;
          return false;
        }
      });
      $("#message").text(ordreCorrect ? "Vous avez gagné" : "Vous avez perdu").css("color", ordreCorrect ? "green" : "red");
    }

    $("#rainbow img").draggable({
      containment: "#rainbow",
      cursor: "move",
      revert: "invalid"
    });
  
    $("#rainbow").droppable({
      drop: function(event, ui) {
        let draggable = ui.draggable;
        let droppable = $(this);
        draggable.detach().css({top: 0, left: 0}).appendTo(droppable);
      }
    });

    $("#melanger").click(function() {
      melangerImages();
    });

    $("#verifier").click(function() {
      verifierOrdre();
    });
  });
  