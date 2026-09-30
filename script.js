// Heroicons (outline) — path data
const I={
arrow:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18",
code:"M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
shield:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
star:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
chat:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
clock:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
plane:"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5",
users:"M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
brush:"M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42",
desktop:"M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25",
phone:"M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
cart:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
chart:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
cog:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
server:"M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z",
menu:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"};
document.querySelectorAll('[data-i]').forEach(el=>{
  el.innerHTML=`<svg class="ico" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" style="width:inherit;height:inherit"><path d="${I[el.dataset.i]}"/></svg>`;
});

// Project filter
const tabs=document.querySelectorAll('.tab'),projs=document.querySelectorAll('.proj');
tabs.forEach(t=>t.addEventListener('click',()=>{
  tabs.forEach(x=>x.classList.remove('active'));t.classList.add('active');
  projs.forEach(p=>p.classList.toggle('hide',t.dataset.f!=='all'&&p.dataset.cat!==t.dataset.f));
}));

// Mobile menu
document.getElementById('menuBtn').onclick=()=>document.getElementById('mobileMenu').classList.toggle('hidden');

// Reviews
const R=[
{q:`تجربة العمل مع <b class="txt-o">UXCODE</b> كانت مختلفة من أول خطوة. فهموا الفكرة بعمق، واهتموا بأدق التفاصيل الهندسية والفنية، ووصلوا بالتصميم لنتيجة <b class="txt-o">أفضل مما كنت متخيل</b> وبأداء برمجي فائق السرعة.`,name:'عبدالرحمن السديري',role:'المؤسس التنفيذي، منصة بلاتا للعناية والجمال',avatar:'images/client-1.jpg',img:'images/project-1.jpg',badge:'PLATA CASE STUDY',tags:['تجارة إلكترونية','تطبيق جوال'],title:'منصة بلاتا للعناية الفاخرة'},
{q:`فريق محترف بيفهم احتياجات العمل ويحوّل الأفكار لواقع. <b class="txt-o">الالتزام بالمواعيد</b> وجودة التنفيذ فاقت توقعاتي، وأنصح بالتعامل معهم بشدة.`,name:'سارة أحمد',role:'مؤسسة منصة تعليمية',avatar:'images/client-2.jpg',img:'images/project-5.jpg',badge:'EDU CASE STUDY',tags:['منصة تعليمية','UI/UX'],title:'منصة تعليمية متكاملة'},
{q:`تعاملت معهم في أكثر من مشروع والنتيجة دايماً <b class="txt-o">ممتازة</b>. سرعة في التنفيذ وتواصل مستمر ودعم بعد التسليم.`,name:'أحمد محمد',role:'صاحب شركة',avatar:'images/client-3.jpg',img:'images/project-6.jpg',badge:'FOOD CASE STUDY',tags:['تطبيق جوال','طلبات'],title:'تطبيق طلب الطعام'},
{q:`الموقع طلع <b class="txt-o">أحسن مما تخيلت</b>، تصميم عصري وأداء سريع، وزادت مبيعات المتجر من أول شهر.`,name:'محمد السيد',role:'صاحب متجر إكسسوارات',avatar:'images/client-1.jpg',img:'images/project-2.jpg',badge:'SHOP CASE STUDY',tags:['تجارة إلكترونية','موقع ويب'],title:'متجر إكسسوارات'}];
const $=id=>document.getElementById(id),nums=$('rvNums');let cur=0,timer;
R.forEach((_,i)=>{const b=document.createElement('button');b.className='rv-num';b.textContent=String(i+1).padStart(2,'0');b.onclick=()=>go(i);nums.append(b)});
function go(n){
  cur=(n+R.length)%R.length;const r=R[cur];
  $('rvQuote').innerHTML=r.q;$('rvName').textContent=r.name;$('rvRole').textContent=r.role;
  $('rvAvatar').src=r.avatar;$('rvImg').src=r.img;$('rvBadge').textContent=r.badge;$('rvTitle').textContent=r.title;
  $('rvTags').innerHTML=r.tags.map(t=>`<span class="rv-tag">${t}</span>`).join('');
  nums.querySelectorAll('.rv-num').forEach((b,i)=>b.classList.toggle('active',i===cur));
  document.querySelectorAll('.rv-fade').forEach((e,i)=>{e.style.animationDelay=(i*.12)+'s';e.classList.remove('go');void e.offsetWidth;e.classList.add('go')});
  clearInterval(timer);timer=setInterval(()=>go(cur+1),7000);
}
$('rvNext').onclick=()=>go(cur+1);$('rvPrev').onclick=()=>go(cur-1);
go(0);

/* ===== Smooth staggered reveal ===== */
(()=>{
  const q=(s,r=document)=>r.querySelector(s), qa=(s,r=document)=>[...r.querySelectorAll(s)];
  const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const io=new IntersectionObserver(es=>es.forEach(en=>{
    if(!en.isIntersecting)return;
    en.target._items.forEach(e=>e.classList.add('in'));
    io.unobserve(en.target);
  }),{threshold:.12,rootMargin:'0px 0px -6% 0px'});

  // group: container watched, items revealed one after another
  function G(container,items,base=0,step=.1,opt={}){
    items=items.filter(Boolean);
    if(!container||!items.length)return;
    items.forEach((e,i)=>{
      e.classList.add('rvl');
      e.style.setProperty('--d',(base+i*step).toFixed(2)+'s');
      if(opt.y!==undefined)e.style.setProperty('--y',opt.y+'px');
      if(opt.s!==undefined)e.style.setProperty('--s',opt.s);
    });
    container._items=(container._items||[]).concat(items);
    if(reduce){items.forEach(e=>e.classList.add('in'));return}
    io.observe(container);
  }

  // Navbar
  G(q('header'),qa('header nav > *'),.05,.08,{y:-14});

  // Hero
  const hero=q('#home');
  G(hero,[...qa('h1 > span',hero),q('p',hero),q('.flex.gap-3',hero),...qa('.flex.gap-10 > div',hero)],.15,.12);
  G(hero,[q('.relative',hero)],.3,0,{y:20,s:.94});

  // Features strip
  const feat=q('#home + section .card');
  G(feat,[feat,...feat.children],0,.09);

  // Works header + projects
  const works=q('#works');
  G(works,[q('span',works),q('h2',works),q('p',works),...qa('.tab',works)],0,.08);
  qa('.proj').forEach(a=>{
    const body=a.children[1];
    const imgBox=a.children[0];
    G(a,[imgBox],0,0,{y:36,s:.95});
    G(a,[...body.children],.18,.1);
  });

  // About
  const ab=q('#about');
  const abTxt=ab.querySelector('.card > div:last-child');
  G(ab,[ab.querySelector('.card')],0,0);
  G(ab,[ab.querySelector('.card > div:first-child')],.1,0,{y:24,s:.95});
  G(ab,[...abTxt.children.length?[...abTxt.children].filter(e=>!e.classList.contains('grid')):[],...qa('.grid > div',abTxt)],.2,.1);

  // Services
  const svc=q('#services');
  G(svc,[q('.svc-eyebrow',svc),q('.svc-h2',svc),q('.svc-sub',svc)],0,.1);
  qa('.svc-card').forEach((c,i)=>{
    G(c,[c],(i%3)*.14,0);
    G(c,[q('.svc-ico',c),q('.svc-title',c),q('.svc-desc',c),q('.svc-more',c)],(i%3)*.14+.12,.07,{y:16});
    G(c,[q('.svc-img',c)],(i%3)*.14+.25,0,{y:16,s:.9});
  });

  // Testimonials
  const rv=q('#reviews');
  const cols=qa('.grid > div',rv);
  G(rv,[q('span',rv),q('h2',rv),q('p',rv),...cols],0,.12);

  // FAQ
  const faq=q('#faq');
  if(faq){
    G(faq,[q('.faq2-badge',faq),q('.faq2-h2',faq),q('.faq2-sub',faq)],0,.1);
    G(faq,[...qa('.faq2-item',faq)],.15,.08,{y:18});
  }

  // Idea CTA
  const c2=q('#start');
  G(c2,[q('.cta2-top',c2),q('.cta2-h',c2),q('.cta2-sub',c2),q('.cta2-btns',c2)],0,.14);

  // CTA + footer
  const cta=q('#contact');
  const box=cta.firstElementChild;
  G(cta,[box,box.children[0],box.children[1]],0,.14);
  const ft=q('footer');
  G(ft,[...ft.children],0,.1,{y:14});

  // Re-play the stagger when filtering projects
  qa('.tab').forEach(t=>t.addEventListener('click',()=>{
    if(reduce)return;
    qa('.proj').forEach(a=>{
      if(a.classList.contains('hide'))return;
      const els=[...a._items];
      if(!els.some(e=>e.classList.contains('in')))return; // not seen yet, observer will handle it
      els.forEach(e=>e.classList.remove('in'));
      void a.offsetWidth;
      els.forEach(e=>e.classList.add('in'));
    });
  }));

  // Scroll progress bar + header shadow
  const bar=document.createElement('div');bar.className='scroll-bar';document.body.append(bar);
  const hd=q('header');let tick=false;
  const upd=()=>{
    const h=document.documentElement.scrollHeight-innerHeight;
    bar.style.transform=`scaleX(${h>0?scrollY/h:0})`;
    hd.classList.toggle('scrolled',scrollY>8);
    tick=false;
  };
  addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});
  upd();
})();
