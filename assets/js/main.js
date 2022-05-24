document.addEventListener('DOMContentLoaded', function(){
  let subscribeForm = document.getElementById('subscribeForm');
  let subscribeButton = document.getElementById('subscribeButton');

  if (subscribeForm != null && subscribeButton != null){
    subscribeButton.addEventListener('click', function(event){
      if(subscribeForm.querySelectorAll(':invalid') != null){
        event.preventDefault()
      }
    })
  }
})