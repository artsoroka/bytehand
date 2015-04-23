## bytehand.com API for Node.js
To start working just set up your ID and KEY 
```js 
var bytehand = require("./bytehand")({id: 'YOUR ID', key: 'YOUR KEY'}); 
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

Check message status  

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

You can use ```https``` by adding ```secure``` property to your config 

```js 

var bytehand = require("./bytehand")({
    id: 'YOUR ID', 
    key: 'YOUR KEY'
    sucure: true
});

```

But you might see something like ```UNABLE_TO_VERIFY_LEAF_SIGNATURE``` 

