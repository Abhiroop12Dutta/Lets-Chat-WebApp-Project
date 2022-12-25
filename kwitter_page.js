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

    function send()
{
msg = documnt.getElementById("msg").value;
firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
     like:0
    
});

document.getElementById("msg").value="";
      

};







function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
