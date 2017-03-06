//backend

  function NewAnimal(name, type, age, description, photo){
  this.name = name;
  this.type = type;
  this.age = age;
  this.description = description;
  this.photo = photo;

};

  NewAnimal.prototype.post= function(){
    $(".spot").text(this.name);
    $(".spot").append("<img id='inputPicture' src ='" + this.photo + "'>");
    $("#moreInfo").append("<li>" + "Type: " + this.type + "</li>");
    $("#moreInfo").append("<li>" + "Age: " + this.age + "</li>");
    $("#descript").text(this.description);

  }


//frontend
$(document).ready(function(){
  $("form#handOff").submit(function(event){
    event.preventDefault();
    var name = $("#handOffName").val();
    var type = $("#handOffType").val();
    var age = $("#handOffAge").val();
    var description = $("#handOffDescription").val();
    var photo = $("#handOffPhoto").val();
    var inputtedAnimal  = new NewAnimal(name, type, age, description, photo);
    inputtedAnimal.post();
    console.log(name);
    console.log(age);
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
