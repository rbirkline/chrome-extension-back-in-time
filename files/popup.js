
audio = document.querySelector('#modem');
//chrome.extension.getBackgroundPage().console.log(audio);
audio.addEventListener('ended',function(){
  //alert('done');
  //
  slideNext();
  setTimeout(function(){
    window.close();
  },1500);
});
audio.play();

text = document.querySelectorAll('#animation .slides div');
text_length = text.length;
current = 0;

//start
text[0].className='animated slideInRight';

setTimeout(function(){
  slideNext();
  setTimeout(function(){
    slideNext();
  },3000);
},1000);




function slideNext(){
  if (current+1 < text_length){
    text[current].className='animated slideOutLeft';
    setTimeout(function(){
      text[current].style.display = 'none';
      current++;
      text[current].className='animated slideInRight';
    },500);

  }

}
