const moreBtn=document.querySelector('.info .more-btn');
const title=document.querySelector('.info.metadata .title')

more-btn.addEventLisner('click' , ()=>{
    moreBtn.classList.toggle('clicked')
    title.classList.toggle('add')
})