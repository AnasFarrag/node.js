const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('yes you did it'))
    .catch(err => console.error('you failes' , err)) ; 
    
