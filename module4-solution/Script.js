(function () {

var names = ["Mahesh", "Jayesh", "Jenna", "Jack", "BBK", "Luffy", "Zoro", "Sanji", "Nami", "Jennifer"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();

