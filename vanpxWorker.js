self.onmessage = function(e){
    const height = e.data.height;

    try{
        for (let h = 0; h < height; h++) {
            console.log("worker is working");
            postMessage(h);
        }
        

    } catch (e){
        function Exception (message){
            this.name = "Exception for loop";
            this.message = message;

        } throw new Exception('Dom error');
        postMessage(null);
    }
}
    
   
