let f = function() {
    console.log('outside');
}

function a() {
    f();
    {
        let f = function() {
            console.log('inside');
        }
    }
}
a();