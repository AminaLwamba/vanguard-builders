//counter
const counters = document.querySelectorAll('.count');
const speed = 2000;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

// gallery filter starts **gallery section (homepage)**
$(document).ready(function(){
    $(".list").click(function(){
        const value=$(this).attr("data-filter");
        if(value == "all"){
            $(".gal-photo").show("1000")
        }
        else{
            $(".gal-photo").not("." + value).hide("1000")
            $(".gal-photo").filter("." + value).show("1000")
        }
    })
    //Active class on buttons
    $(".list").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
    })
   }) 
// gallery filter ends **gallery section (homepage)**

//Review section
    // Review
    const reviewWrapper = document.querySelector('.reviewWrapper');
    const slides = document.querySelectorAll('.rev-slide');
    const prevButton = document.querySelector('.Button-prev');
    const nextButton = document.querySelector('.Button-next');
    
    let currentSlide = 0;
    
    // Show the initial slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('Active3');
            if (i === index) {
                slide.classList.add('Active3');
            }
        });
    }
    
    // Event listeners for previous and next buttons
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });
    
    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
    
    
    showSlide(currentSlide);

//responsive homepage side bar
const webco=document.getElementById("webContent")
    const sidebar=document.querySelector(".sideBar")
    const navClose=document.querySelector(".navClose")
    const menu=document.querySelector(".menuBar")
    function showSideBar(){
      sidebar.style.display="block"  
      webco.style.visibility="hidden"
    }
    function hideSideBar(){
        sidebar.style.display="none" 
        webco.style.visibility="visible" 
    }




