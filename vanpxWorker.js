self.addEventListener('message', function(e){
    const height = e.data.height;

    
        for (var h = 0; h < height; h++) {
            console.log("worker is working");
            var tr = '<tr></tr>';
            postMessage({'row': tr});
        }
        

    
});
    
