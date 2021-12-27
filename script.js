$(document).ready(function() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: "GET",
        success: function(response) {
            //console.log(response)
            $.each(response, function(index, ele) {
                var templateHTML = ""
                templateHTML = `
        <div class="wrapper">
        <img src="https://loremflickr.com/640/360



        "  width="100%" height="150px">
                <h2 class="title">${ele.title}</h2>
                <div class="content">${ele.body}</div>
                <a class="btn btn-edit" href="edit.html?id=${ele.id}">Edit</a>
                <button class="btn btn-delete" data-id=${ele.id}>Delete</button>
        </div>
            `
                $("#dataList").append(templateHTML);
            });
            $(".btn-delete").on('click', function() {
                // console.log($(this).data("id"));
                //to get the data attr value
                var postID = $(this).data("id");
                var conf = confirm("Are You Sure ?");
                if (conf == true) {
                    $.ajax({
                        url: `https://jsonplaceholder.typicode.com/posts/${postID}`,
                        type: "DELETE",
                        cache: false,
                        success: function(data, textStatus, xhr) {
                            // Check If Status Is 200 
                            if (xhr.status == 200) {
                                alert("Deleted Successfully !");
                            } else {
                                alert("Something Happened !");
                            }
                        },
                        error: function(error) {
                            console.log(error);
                        }
                    });
                }
            });
        },
        error: function(error) {
            console.log(error);
        },
    });

});