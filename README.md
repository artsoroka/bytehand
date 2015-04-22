## bytehand.com API for Node.js
To start working just set up your ID and KEY 
```js 
bytehand = require("./bytehand")({id: 'YOUR ID', key: 'YOUR KEY'}); 
``` 
Try to send sms to your friend 

```js 

bytehand.send({
    to: '+79217771234',
    from: 'YANDEX',
    text: '?¡Hola! ¿Cómo te va todo?'
}, function(error, response){
    if( ! error )
      console.log(response.messageId);
});

```

Check status of message 

```js 

bytehand.status('123456789', function(error, status){
    if( err ) return console.log(error); 
    console.log('status: ', status); 
});

```

Before sending any message you might want check your credit  

```js 

bytehand.balance(function(error, balance){
    if( err ) return console.log(error);
    console.log('balance: ', balance); 
}); 

``` 

