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

const measurementId='G-FVLMZX34P9';
const consentKey='havan_analytics_consent';

function startAnalytics(){
  if(window.havanAnalyticsStarted)return;
  window.havanAnalyticsStarted=true;
  window.dataLayer=window.dataLayer||[];
  window.gtag=function(){window.dataLayer.push(arguments)};
  window.gtag('js',new Date());
  window.gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
  window.gtag('config',measurementId);
  const script=document.createElement('script');
  script.async=true;
  script.src=`https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}

function saveAnalyticsConsent(choice){
  localStorage.setItem(consentKey,choice);
  document.querySelector('.consent-banner')?.remove();
  if(choice==='granted')startAnalytics();
  else if(typeof window.gtag==='function')window.gtag('consent','update',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
}

function showConsentBanner(){
  if(document.querySelector('.consent-banner'))return;
  const banner=document.createElement('aside');
  banner.className='consent-banner';
  banner.setAttribute('aria-label','Analytics preferences');
  banner.innerHTML='<div><strong>Help HAVAN improve</strong><p>With your permission, we use Google Analytics to understand which guides are useful. Advertising tracking stays off.</p></div><div class="consent-actions"><button type="button" data-consent="granted">Allow analytics</button><button type="button" class="secondary" data-consent="denied">No thanks</button><a href="/privacy.html">Privacy</a></div>';
  banner.addEventListener('click',(event)=>{const choice=event.target.closest('[data-consent]')?.dataset.consent;if(choice)saveAnalyticsConsent(choice)});
  document.body.appendChild(banner);
}

const savedConsent=localStorage.getItem(consentKey);
if(savedConsent==='granted')startAnalytics();
else if(savedConsent!=='denied')showConsentBanner();

document.querySelector('[data-manage-consent]')?.addEventListener('click',()=>{localStorage.removeItem(consentKey);showConsentBanner()});

document.addEventListener('click',(event)=>{
  const link=event.target.closest('a');if(!link)return;
  const url=new URL(link.href,location.href);let name=link.dataset.track;
  if(!name&&url.origin===location.origin&&url.pathname.startsWith('/journal/'))name='journal_click';
  else if(!name&&url.origin===location.origin&&url.pathname.startsWith('/products/'))name='program_click';
  else if(!name&&url.hostname.endsWith('.hop.clickbank.net'))name='provider_click';
  if(name&&typeof window.gtag==='function')window.gtag('event',name,{link_url:link.href,page_path:location.pathname});
});
