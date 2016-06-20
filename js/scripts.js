function Pet (name, type, age, description, availability) {
  this.petName = name;
  this.petType = type;
  this.petAge = age;
  this.petDescription = description;
  this.petAvailability = availability;
}

$(document).ready(function(){
  $("form#new-pet").submit(function(event){
    event.preventDefault();

    var petName = $("#new-pet-name").val();
    var petType = $("#new-pet-type").val();
    var petAge = $("#new-pet-age").val();
    var petDescription = $("#new-pet-description").val();

    var newPet = new Pet(petName, petType, petAge, petDescription);

    $("ul#name-type").append("<li><span class='pet'>" + newPet.petName + ", " + newPet.petType + "</span></li>");

    $(".pet").last().click(function() {
      $("#show-pet").show();
      $(".pet-name").text(newPet.petName);
      $(".pet-type").text(newPet.petType);
      $(".pet-age").text(newPet.petAge);
      $(".pet-description").text(newPet.petDescription);

  });
});
});
