## bytehand.com API for Node.js
To start working just set up your ID and KEY 
```js 
bytehand = require("./bytehand")({id: 'YOUR ID', key: 'YOUR KEY'}); 
``` 
Try to send sms to your friend 

```js bytehand.send({
    to: '+79217771234',
    from: 'YANDEX',
    text: '?¡Hola! ¿Cómo te va todo?'
}, function(error, response){
    if( ! error )
      console.log(response);
});
```
