$("#btn").click(function(){
  $.ajax({
    method: "GET",
    url: "https://baconipsum.com/api/?type=meat-and-filler",
    dataType: "json"
  })
  .done(addP)
  .fail(error)
});

function addP (data){
    $("p").text(data[0]);
  }
function error (data){
    alert("Oh no! failed!")
  }