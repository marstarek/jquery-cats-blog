// Start Edit Page
$(document).ready(function() {
    // Get Url ID Param Value
    // to get variable id value from url 
    var params = new window.URLSearchParams(window.location.search);
    postID = params.get('id');
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts/${postID}`,
        type: "GET",
        success: function(response) {
            $("#name").val(response.title);
            $("#content").val(response.body);
        }
    });
    $('.btn-save').on('click', function() {
        if ($("#name").val() == "" || $("#content").val() == "") {
            alert("Please, Fill All Inputs");
        } else {
            $.ajax({
                url: `https://jsonplaceholder.typicode.com/posts/${postID}`,
                type: "PUT",
                cache: false,
                success: function(response) {
                    console.log('done');
                }
            });
            alert("your data saved ");
        }
    });
});