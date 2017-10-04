$(document).ready(function () {
    $("#show-list-of-faculties").click(function () {
        if ($("#faculty-info-content").css("display") == "block") {
            $("#faculty-info-content").fadeOut();
        }
        else {
            $("#faculty-info-content").fadeIn();
            closeUserContent();
        }
        if ($("#facultyadd-form").css("display") == "block") {
            $("#facultyadd-form").hide();
        }
        if ($("#delete-prompt").css("display") == 'block') {
            $("#delete-prompt").hide();
        }
        if ($("#update-form").css("display") == 'block') {
            $("#update-form").hide();
        }

    });

    $("#open-facultyadd-form").click(function () {
        if ($("#delete-prompt").css("display") == 'block') {
            $("#delete-prompt").hide();
        }
        if ($("#update-form").css("display") == 'block') {
            $("#update-form").hide();
        }
        $("#facultyadd-form").fadeIn();
    });
    $("#close-facultyadd-form").click(function(){
        $("#facultyadd-form").fadeOut();
    });

    $(document).on("click", '#faculty-list-table .delete-button-prompt', function () {
        if ($("#update-form").css("display") == 'block') {
            $("#update-form").fadeOut();
        }
        if($("#facultyadd-form").css("display") == 'block'){
            $("#facultyadd-form").fadeOut();
        }
        $("#delete-prompt").fadeIn();
    });
    $("#hide-delete-prompt").click(function () {
        $("#delete-prompt").fadeOut();
    });

   $("#close-delete-prompt").click(function () {
        $("#delete-prompt").fadeOut();
    });

    $(document).on("click", "#faculty-list-table #open-update-form", function () {
        if ($("#delete-prompt").css("display") == 'block') {
            $("#delete-prompt").fadeOut();
        }
        if($("#facultyadd-form").css("display") == 'block'){
            $("#facultyadd-form").fadeOut();
        }
        $("#update-form").fadeIn();

    });
    $("#close-update-form").click(function () {
        $("#update-form").fadeOut();
    });
    $("#close-updateform-onSubmit").click(function () {
        $("#update-form").fadeOut();
    });
    /* ****  USER CONTETNT **** */
    $("#show-list-of-users").click(function(){
            if($("#users-content").css("display") == "none"){
                closeFaculyContent();
                $("#users-content").fadeIn();
            }
            else{
                $("#users-content").fadeOut();
                $("#user-add-form").hide();
            }
        });
    $("#open-useradd-form").click(function(){
      if ($("#user-add-form").css("display") == 'none') {
        $("#user-add-form").fadeIn();
      } else {
        $("#user-add-form").fadeOut();
      }

    });
    $("#close-useradd-form").click(function(){
      $("#user-add-form").fadeOut();
    });

    function closeFaculyContent(){
        if ($("#faculty-info-content").css("display") == "block") {
            $("#faculty-info-content").fadeOut();
        }
        if ($("#facultyadd-form").css("display") == "block") {
            $("#facultyadd-form").hide();
        }
        if ($("#delete-prompt").css("display") == 'block') {
            $("#delete-prompt").hide();
        }
        if ($("#update-form").css("display") == 'block') {
            $("#update-form").hide();
        }
    }
    function closeUserContent(){
        if($("#users-content").css("display") == "block"){
            $("#users-content").hide();
          }
        if($("#user-add-form").css("display") == "block"){
          $("#user-add-form").hide();
        }
  }

});