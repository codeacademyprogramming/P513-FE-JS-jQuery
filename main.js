// const listItems = Array.from(document.querySelectorAll("ul li"));

// listItems.forEach((item) => {
//   item.style.backgroundColor = "red";
// });

// $("ul li")
//   .css({
//     backgroundColor: "red",
//     color: "white",
//     listStyle: "none",
//     padding: "10px",
//   })
//   .click(function (event) {
//     $(event.currentTarget).hide(3000, function () {
//       alert(`${$(this).text()} successfully hidden`);
//     });
//   });

// $(".btn").click(function () {
//   $("div").index(0).toggle();
//   //   $("div").toggle();
// });

// console.log($(".my-div").text());
// console.log($(".my-div").val());
// console.log($(".my-div").html());

// console.log($(".seyfi").val());

// $.get("https://jsonplaceholder.typicode.com/posts/", function (data, status) {
//   if (status === "success") {
//     data.forEach((post) => {
//       const postHTML = `<div>ID:${post.id} <br> Created by: ${post.userId} <br> Title: ${post.title} <br> Body: ${post.body}</div>`;
//       $(".posts-wrapper").append(postHTML);
//     });
//   } else {
//     console.log("something went wrong");
//   }
// });
