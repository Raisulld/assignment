function tinyFriend(words) {
     var tiny =words[0];
     for(var i=0;i<words.length;i++){
         var flist =words[i];
         if(flist.length<tiny.length){
             tiny =flist;
         }
     }
     return tiny;
    }
 
var friendlist = ['Piyaaa','Saimaaa','Saminnnnnn','Saraaaaaaaa'];
console.log("The shortest name is :" +tinyFriend(friendlist));