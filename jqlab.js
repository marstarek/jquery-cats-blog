$(document).ready(function() {
    $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            type: "get",
            success: function(response) {
                $.each(collection, function(index, Element) {
                    var html = "";
                    html = `
                 <div class="holder">
                 <img src="https://loremflickr.com/640/360
                 "  width="100%" height="150px">
                 <h2> ${Element.title}</h2>
                 <div class="content">${ele.body}</div>
                 <a href="edit.html?id=${Element.id}" ></a>
                 <button class="btn btn-delete" data-id=${ele.id}>Delete</button>
                 </div>
           
                 `
                    $("#dataList").append(html);
                });
                $(".btn-delete").on("click", function() {
                    var postedid = $(this).data("id");
                    $.ajax({
                        type: "delete",
                        url: `https://jsonplaceholder.typicode.com/posts/${postedid}`,
                        success: function(response) {

                        }
                    });
                });

                $()).on(events, function() {

            });


        }
    })

























})