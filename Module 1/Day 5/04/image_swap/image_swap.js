<script>
$(document).ready(function() {

    $("li:first-child a").focus();

    $("#image_list a").click(function(evt) {
        var image = $(this).attr("href");
        var caption = $(this).attr("title");
        $("#image").attr("src", image);
        $("#caption").text(caption);
        //prevent default
        evt.preventDefault();
    });

});
</script>