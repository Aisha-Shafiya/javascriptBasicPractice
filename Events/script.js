// document.getElementById('owl').onclick = function(){
//     alert('Hi Shafiya');
// }
// Event Listener


 document.getElementById('owl').addEventListener('click',function(){
    // alert('Hi Aisha Shafiya')
})


// atachEvent() used in internet explorer
// on Jquery it onEventListener()
// What to study target, toElement, srcElement, currentTarget
// type, timestamp, defaultPrevented
// CLentX, ClientY, ScreenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

//event propogation
// It has 2concepts 1.Event bubling ie, default false 2.Event Capturing ie, true

// Example of bubbling up it's from below to above
document.getElementById('images').addEventListener('click',function(e){
    console.log('clicked inside the ul');
}, false)


document.getElementById('owl').addEventListener('click',function(e){
   console.log('owl is clicked');
// To control bubling need to add this
e.stopPropagation()
}, false)


// Event Capturing example by giving true
// document.getElementById('images').addEventListener('click',function(e){
//     console.log('clicked inside the ul');
// }, true)


// document.getElementById('owl').addEventListener('click',function(e){
//    console.log('owl is clicked');
// }, true)


// Prevent default
document.getElementById('google').addEventListener('click',function(e){
   e.preventDefault();
   console.log("Google is clicked");
}, false)


// To remove the element
document.querySelector('#images').addEventListener('click',function(e){
//    console.log(e.target);
console.log(e.target.tagName);
if( e.target.tagName === 'IMG'){
    let removeIt = e.target.parentNode;
    // 1method
    removeIt.remove();
}
// console.log(e.target.parentNode);

// 2nd method is
// removeIt.parentNode.removeChild(removeIt);
},false)