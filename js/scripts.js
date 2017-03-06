//backend
  function NewAnimal(name, type, age, description, photo) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.description = description;
  this.photo = photo;
}

  NewAnimal.prototype.post= function(){
    $("#h2 spot").text(this.name);
    $("#picSpot").text("<img src ='" + this.photo + "'>");
    $("#ul spot").append("<li>" + "Type: " + this.type + "</li>");
    $("#ul spot").append("<li>" + "Age: " + this.age + "</li>");
    $("#p spot").text(this.description);

  }


//frontend
$(document).ready(function() {
  $("#").submit(function(event){
    var name = $("#name").val();
    var type = $("#type").val();
    var age = $("#age").val();
    var description = $("#description").val();
    var photo = $("#photo").val();
    var inputtedAnimal  = new NewAnimal(name, type, age, description, photo);
    inputtedAnimal.post();
  });
  //show submit form on button click
  $("button#petSubmit").click(function (event) {
    event.preventDefault();
    $("form#handoff").show();
  })
  //hide submit form on button click
  $("button#submitNewPet").click(function (event) {
    event.preventDefault();
    $("form#handoff").hide();
  })

});
