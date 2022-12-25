const firebaseConfig = {
      apiKey: "AIzaSyBco6sfMkumBnrnr273UW-Et1gPL40-luY",
      authDomain: "kwitter-promo.firebaseapp.com",
      databaseURL: "https://kwitter-promo-default-rtdb.firebaseio.com",
      projectId: "kwitter-promo",
      storageBucket: "kwitter-promo.appspot.com",
      messagingSenderId: "102776678679",
      appId: "1:102776678679:web:18f127535bbdca06d42f52"
    };
  
  
  
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addRoom()
    {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"

});
    
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;  
      
      //End code
      });});}
getData();

function redirectToRoomName(name)
{

console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";



}

function logout() 
{
localStorage.removeItem("user_name"); 
localStorage.removeItem("room_name"); 
window.location = "index.html"; 
}