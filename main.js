           
var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://thumbs.dreamstime.com/b/grandmother-waving-hand-cute-cartoon-character-happy-grandparent-s-day-grandmother-waving-hand-cute-cartoon-character-happy-151479821.jpg" , "https://www.clipartmax.com/png/full/140-1409653_honour-your-father-and-your-mother-mom-png.png", "https://thumbs.dreamstime.com/b/happy-cute-kid-boy-hugging-dad-love-164772554.jpg", "https://www.pngitem.com/pimgs/m/406-4061238_png-pinterest-clip-kids-clipart-boy-transparent-png.png", "https://i.pinimg.com/originals/69/63/da/6963da727ae14c051f9d4644061a56bc.jpg"];
           
var names = ["Fmaily Book","Moosa", "Jessy", "Minu", "Hasher", "Rayaan", "Raazeen"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 6
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}
