// Get the elements that you want to animate
const floatingElements = document.querySelectorAll('.floating-element');

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function handleScroll() {
    floatingElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('float-up');
        } else {
            element.classList.remove('float-up');
        }
    });
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

/*-------------------------------画像切り替え---------------------------------*/
const images=document.querySelectorAll('.sub');
const main=document.querySelector('.main');
for(let image of images){
  image.addEventListener('mouseover',function(){
    main.src=image.src;
  });
}

const images1=document.querySelectorAll('.sub1');
const main1=document.querySelector('.main1');
for(let image of images1){
  image.addEventListener('mouseover',function(){
    main1.src=image.src;
  });
}

const images2=document.querySelectorAll('.sub2');
const main2=document.querySelector('.main2');
for(let image of images2){
  image.addEventListener('mouseover',function(){
    main2.src=image.src;
  });
}
/*--------------------------------------------------------------------------*/

