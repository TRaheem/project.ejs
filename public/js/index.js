
     fetch('http://localhost:3000/api/images')
     .then(function(response) {
       return response.json();
     })
     .then(function(images) {
   
       const imgList = images;
   
       // Variable where we will store our img tags
       let imgTemplate = ''; 
   
       // Flex container for images
       const gallery = document.querySelector('.gallery'); 
   
       // Loop through items using forEach (available on every array)
       imgList.forEach(function(item){
        console.log(item);
        // Our output variable (imgTemplate)
        imgTemplate += `<img src="${item.source}" alt=${item.name}><div><h5>${item.description}</h5><a href=${item.website} target ="_blank">${item.name}</a></div>`
      });
         
       // Add HTML img string to gallery container
       gallery.innerHTML = imgTemplate;
   });
    