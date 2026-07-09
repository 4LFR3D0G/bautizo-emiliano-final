const cover=document.getElementById('cover');
const openBtn=document.getElementById('openBtn');
const music=document.getElementById('music');

openBtn.addEventListener('click',()=>{
  cover.classList.add('hide');
  music.volume=.72;
  music.play().catch(()=>{});
  setTimeout(()=>document.getElementById('inicio').scrollIntoView({behavior:'smooth'}),300);
});
