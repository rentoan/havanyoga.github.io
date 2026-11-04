const btn=document.querySelector('.menu'),nav=document.querySelector('#nav');if(btn&&nav){btn.addEventListener('click',()=>{const open=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});nav.addEventListener('click',()=>{btn.setAttribute('aria-expanded','false');nav.classList.remove('open')})}const y=document.querySelector('#year');if(y)y.textContent=new Date().getFullYear();

document.querySelectorAll('[data-youtube-id]').forEach((button)=>{
  button.addEventListener('click',()=>{
    const videoId=button.dataset.youtubeId;
    const title=button.dataset.youtubeTitle||'YouTube video';
    const frame=document.createElement('iframe');
    frame.src=`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    frame.title=title;
    frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen=true;
    frame.referrerPolicy='strict-origin-when-cross-origin';
    button.replaceWith(frame);
  });
});
