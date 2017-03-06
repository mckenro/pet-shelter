//backend

  function NewAnimal(name, type, age, description, photo){
  this.name = name;
  this.type = type;
  this.age = age;
  this.description = description;
  this.photo = photo;

};

  NewAnimal.prototype.post= function(){
    $("#allPets").prepend('<div class="col-md-3 pet-post">' +
      '<div class="newPetInfo"' +
      '<h2 class="' + this.name + this.age + '"></h2>' +
      '<div class="' + this.type + this.age + '"></div>' +
      '<ul id="' + this.name + this.type + '"></ul>' +
      '<p class="description" id="' + this.age + this.type + '"></p>' +
      '</div>' +
    '</div>');

    $("." + this.name + this.age).text(this.name);
    $("." + this.type + this.age).append("<img id='inputPicture' src ='" + this.photo + "'>");
    $("#" + this.name + this.type).append("<li>" + "Type: " + this.type + "</li>");
    $("#" + this.name + this.type).append("<li>" + "Age: " + this.age + "</li>");
    $("#" + this.age + this.type).text(this.description);

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
    $("form#handOff").hide();
  });
  //show submit form on button click
  $("button#petSubmit").click(function (event) {
    event.preventDefault();
    $("form#handOff").show();
  })

});
