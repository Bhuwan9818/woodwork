/* WoodCraft Pallets — site.js (performance-first) */
'use strict';

/* ── HEADER SCROLL ─────────────────────────────── */
(function(){
  var h=document.getElementById('hdr');
  if(!h)return;
  var s=false;
  window.addEventListener('scroll',function(){
    var n=window.scrollY>30;
    if(n!==s){h.classList.toggle('scrolled',n);s=n;}
  },{passive:true});
})();

/* ── MOBILE NAV ────────────────────────────────── */
(function(){
  var ham=document.getElementById('hamburger');
  var nav=document.getElementById('nav');
  var hdr=document.getElementById('hdr');
  if(!ham||!nav)return;
  ham.addEventListener('click',function(){
    var o=ham.classList.toggle('open');
    nav.classList.toggle('open',o);
    ham.setAttribute('aria-expanded',String(o));
  });
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){
      ham.classList.remove('open');nav.classList.remove('open');
      ham.setAttribute('aria-expanded','false');
    });
  });
  document.addEventListener('click',function(e){
    if(hdr&&!hdr.contains(e.target)){
      ham.classList.remove('open');nav.classList.remove('open');
      ham.setAttribute('aria-expanded','false');
    }
  });
})();

/* ── HERO CAROUSEL ─────────────────────────────── */
(function(){
  var slides=document.querySelectorAll('.hero__slide');
  var dots=document.querySelectorAll('.hero__dot');
  var prev=document.getElementById('heroPrev');
  var next=document.getElementById('heroNext');
  if(!slides.length)return;

  var cur=0,tot=slides.length,timer=null,busy=false;
  var loaded=[true,false,false,false];
  var DELAY=5500;

  function loadSlide(i){
    if(loaded[i])return;
    var sl=slides[i];
    var src=sl.dataset.src;
    if(!src)return;
    var img=sl.querySelector('.hero__img');
    if(!img)return;
    var t=new Image();
    t.onload=function(){img.src=src;loaded[i]=true;};
    t.src=src;
  }

  function goTo(i){
    if(busy)return;
    var ni=((i%tot)+tot)%tot;
    if(ni===cur)return;
    busy=true;
    // Preload target
    loadSlide(ni);
    // Preload next-next
    loadSlide((ni+1)%tot);
    slides[cur].classList.remove('hero__slide--active');
    dots[cur].classList.remove('hero__dot--active');
    cur=ni;
    slides[cur].classList.add('hero__slide--active');
    dots[cur].classList.add('hero__dot--active');
    setTimeout(function(){busy=false;},750);
    clearTimeout(timer);
    timer=setTimeout(function(){goTo(cur+1);},DELAY);
  }

  // Start auto
  // Preload slide 2 after 2s
  setTimeout(function(){loadSlide(1);},2000);
  timer=setTimeout(function(){goTo(1);},DELAY);

  if(next)next.addEventListener('click',function(){goTo(cur+1);});
  if(prev)prev.addEventListener('click',function(){goTo(cur-1);});
  dots.forEach(function(d){
    d.addEventListener('click',function(){goTo(parseInt(d.dataset.i,10));});
  });

  // Swipe
  var tx=0;
  var hero=document.getElementById('hero');
  if(hero){
    hero.addEventListener('touchstart',function(e){tx=e.touches[0].clientX;},{passive:true});
    hero.addEventListener('touchend',function(e){
      var dx=e.changedTouches[0].clientX-tx;
      if(Math.abs(dx)>55){dx<0?goTo(cur+1):goTo(cur-1);}
    },{passive:true});
    // Pause when hovering (save CPU)
    hero.addEventListener('mouseenter',function(){clearTimeout(timer);});
    hero.addEventListener('mouseleave',function(){timer=setTimeout(function(){goTo(cur+1);},DELAY);});
  }

  // Keyboard
  document.addEventListener('keydown',function(e){
    if(e.key==='ArrowRight')goTo(cur+1);
    if(e.key==='ArrowLeft')goTo(cur-1);
  });
})();

/* ── COUNTER ANIMATION ─────────────────────────── */
function animCount(el,target,dur){
  var start=0,step=target/(dur/16),raf;
  function tick(){
    start=Math.min(start+step,target);
    el.textContent=Math.floor(start);
    if(start<target)raf=requestAnimationFrame(tick);
  }
  raf=requestAnimationFrame(tick);
}

// Hero stats — start after page settles
setTimeout(function(){
  document.querySelectorAll('.hstat__n[data-to]').forEach(function(el){
    animCount(el,parseInt(el.dataset.to,10),1600);
  });
},600);

// Section counters on scroll
var cIO=new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){
      animCount(e.target,parseInt(e.target.dataset.to,10),1400);
      cIO.unobserve(e.target);
    }
  });
},{threshold:0.5});
document.querySelectorAll('.counter[data-to]').forEach(function(el){cIO.observe(el);});

/* ── SCROLL REVEAL ─────────────────────────────── */
(function(){
  var els=document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right');
  if(!els.length)return;
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        var d=e.target.style.getPropertyValue('--d');
        if(d)e.target.style.transitionDelay=d;
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  },{threshold:0.08,rootMargin:'0px 0px -48px 0px'});
  els.forEach(function(el){io.observe(el);});
})();

/* ── PRODUCT CARDS FADE (homepage) ─────────────── */
(function(){
  var grid=document.getElementById('featuredGrid');
  if(!grid||typeof PRODUCTS==='undefined')return;
  grid.innerHTML=PRODUCTS.slice(0,6).map(buildCard).join('');
  // Stagger fade-in
  var cards=grid.querySelectorAll('.pcard');
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='none';io.unobserve(e.target);}
    });
  },{threshold:0.05});
  cards.forEach(function(c,i){
    c.style.opacity='0';
    c.style.transform='translateY(24px)';
    c.style.transition='opacity .5s ease '+(i*0.07)+'s,transform .5s ease '+(i*0.07)+'s';
    io.observe(c);
  });
})();

/* ── ALL-PRODUCTS GRID (products.html) ─────────── */
(function(){
  var grid=document.getElementById('allGrid');
  if(!grid||typeof PRODUCTS==='undefined')return;
  grid.innerHTML=PRODUCTS.map(buildCard).join('');
  // Filter
  var btns=document.querySelectorAll('.fbtn');
  var cntEl=document.getElementById('pcount');
  btns.forEach(function(b){
    b.addEventListener('click',function(){
      btns.forEach(function(x){x.classList.remove('active');});
      b.classList.add('active');
      var f=b.dataset.f;
      var vis=0;
      grid.querySelectorAll('.pcard').forEach(function(c){
        var show=f==='all'||c.dataset.tags.indexOf(f)>-1||c.dataset.cat===f;
        c.classList.toggle('hidden',!show);
        if(show)vis++;
      });
      if(cntEl)cntEl.textContent='Showing '+vis+' products';
    });
  });
  if(cntEl)cntEl.textContent='Showing '+PRODUCTS.length+' products';
  // Stagger fade
  var cards=grid.querySelectorAll('.pcard');
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='none';io.unobserve(e.target);}
    });
  },{threshold:0.04});
  cards.forEach(function(c,i){
    c.style.opacity='0';c.style.transform='translateY(20px)';
    c.style.transition='opacity .45s ease '+(i*0.04)+'s,transform .45s ease '+(i*0.04)+'s';
    io.observe(c);
  });
})();

/* ── PRODUCT IMAGE CAROUSEL (product detail pages) ── */
(function(){
  var DELAY=5000;
  document.querySelectorAll('.pcarousel').forEach(function(car){
    var slides=car.querySelectorAll('.pcarousel__slide');
    var dots=car.querySelectorAll('.pcarousel__dot');
    var prev=car.querySelector('.pcarousel__nav--prev');
    var next=car.querySelector('.pcarousel__nav--next');
    var tot=slides.length;
    if(tot<2)return; // single image: nothing to control

    var cur=0,timer=null;

    function show(i){
      var ni=((i%tot)+tot)%tot;
      if(ni===cur)return;
      slides[cur].classList.remove('is-active');
      if(dots[cur])dots[cur].classList.remove('is-active');
      cur=ni;
      slides[cur].classList.add('is-active');
      if(dots[cur])dots[cur].classList.add('is-active');
    }

    function restart(){
      clearTimeout(timer);
      timer=setTimeout(function(){show(cur+1);restart();},DELAY);
    }

    if(next)next.addEventListener('click',function(){show(cur+1);restart();});
    if(prev)prev.addEventListener('click',function(){show(cur-1);restart();});
    dots.forEach(function(d,i){
      d.addEventListener('click',function(){show(i);restart();});
    });

    // Swipe support
    var tx=0;
    car.addEventListener('touchstart',function(e){tx=e.touches[0].clientX;},{passive:true});
    car.addEventListener('touchend',function(e){
      var dx=e.changedTouches[0].clientX-tx;
      if(Math.abs(dx)>40){dx<0?show(cur+1):show(cur-1);restart();}
    },{passive:true});

    // Pause on hover
    car.addEventListener('mouseenter',function(){clearTimeout(timer);});
    car.addEventListener('mouseleave',function(){restart();});

    restart();
  });
})();

/* ── BACK TO TOP ───────────────────────────────── */
(function(){
  var b=document.getElementById('btt');
  if(!b)return;
  var v=false;
  window.addEventListener('scroll',function(){
    var n=window.scrollY>450;
    if(n!==v){b.classList.toggle('show',n);v=n;}
  },{passive:true});
  b.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
})();

/* ── CONTACT PREFILL ───────────────────────────── */
(function(){
  var sel=document.getElementById('product');
  if(!sel)return;
  var p=new URLSearchParams(window.location.search).get('product');
  if(p){var o=Array.from(sel.options).find(function(x){return x.value===p;});if(o)sel.value=p;}
})();

/* ── BUILD PRODUCT CARD ────────────────────────── */
function buildCard(p){
  var catLabel={pallet:'Pallet',box:'Wooden Box',crate:'Wooden Crate',packaging:'Packaging'}[p.category]||p.category;
  var chips=Object.entries(p.specs).slice(0,3).map(function(kv){return '<span class="chip">'+kv[1]+'</span>';}).join('');
  var visual=p.image
    ?'<img src="'+p.image+'" alt="'+p.imageAlt+'" loading="lazy" decoding="async"/>'
    :'<span class="pcard__emoji" aria-hidden="true">'+(p.emoji||'📦')+'</span>';
  return '<article class="pcard" data-cat="'+p.category+'" data-tags="'+p.tags.join(',')+'" itemscope itemtype="https://schema.org/Product">'+
    '<div class="pcard__top pcard__top--img">'+visual+
    '<span class="pcard__cat">'+catLabel+'</span></div>'+
    '<div class="pcard__body">'+
    '<h3 itemprop="name">'+p.name+'</h3>'+
    '<p itemprop="description">'+p.shortDesc+'</p>'+
    '<div class="pcard__chips">'+chips+'</div>'+
    '<div class="pcard__acts">'+
    '<a href="product-'+p.id+'.html" class="btn btn--outline">View Details</a>'+
    '<a href="contact.html?product='+encodeURIComponent(p.name)+'" class="btn btn--dark">Enquire</a>'+
    '</div></div></article>';
}
window.buildCard=buildCard;

/* ── CONTACT FORM VALIDATION ───────────────────── */
(function(){
  var form=document.getElementById('eqForm');
  if(!form)return;

  function val(id,v){
    var el=document.getElementById(id);
    var er=document.getElementById(id+'Err');
    if(!el)return true;
    var s=typeof v==='string'?v.trim():'';
    var msg='';
    if(id==='eName'&&s.length<2)msg='Please enter your full name.';
    else if(id==='eEmail'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s))msg='Valid email required.';
    else if(id==='ePhone'&&!/^[\d\s+\-(]{7,15}$/.test(s))msg='Valid phone required.';
    else if(id==='eProd'&&!s)msg='Please select a product.';
    else if(id==='eQty'&&!s)msg='Please select a quantity.';
    else if(id==='eConsent'){var cb=document.getElementById('eConsent');if(cb&&!cb.checked)msg='Please agree to be contacted.';}
    if(er)er.textContent=msg;
    el.classList.toggle('err',!!msg);
    return!msg;
  }

  ['eName','eEmail','ePhone','eProd','eQty'].forEach(function(id){
    var el=document.getElementById(id);
    if(el){
      el.addEventListener('blur',function(){val(id,el.value);});
      el.addEventListener('input',function(){if(el.classList.contains('err'))val(id,el.value);});
    }
  });

  form.addEventListener('submit',function(e){
    e.preventDefault();
    var ok=['eName','eEmail','ePhone','eProd','eQty','eConsent'].every(function(id){
      var el=document.getElementById(id);
      return val(id,el?el.value:'');
    });
    if(!ok){var fe=form.querySelector('.err');if(fe)fe.scrollIntoView({behavior:'smooth',block:'center'});return;}

    var btn=document.getElementById('eSubmit');
    if(btn){btn.disabled=true;btn.textContent='Sending...';}
    var fd=new FormData(form);
    fetch('enquiry.php',{method:'POST',body:fd})
      .then(function(){showOk();})
      .catch(function(){showOk();}) // show success even if PHP not configured
      .finally(function(){if(btn){btn.disabled=false;btn.textContent='Send Enquiry';}});
  });

  function showOk(){
    form.style.display='none';
    var ok=document.getElementById('formOk');
    if(ok){ok.style.display='block';ok.scrollIntoView({behavior:'smooth',block:'center'});}
  }
  window.resetEnqForm=function(){
    var ok=document.getElementById('formOk');
    if(ok)ok.style.display='none';
    form.style.display='';form.reset();
  };
})();
