document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );
  
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const links = document.querySelectorAll(".link");
    const socialLinks = document.querySelectorAll(".socials p");
  
    let isAnimating = false;
  
    const splitTextIntoSpans = (selector) => {
      let elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        let text = element.innerText;
        let splitText = text
          .split("")
          .map(function (char) {
              return `<span>${char === " " ? "&nbsp;" : char}</span>`;
          })
          .join("");
        element.innerHTML = splitText;
      });
    };
   
    splitTextIntoSpans(".header h1");
  
    menuToggle.addEventListener("click", () => {
      if (isAnimating) return;
      if (menuToggle.classList.contains("closed")) {
        menuToggle.classList.remove("closed");
        menuToggle.classList.add("opened");
  
        isAnimating = true;
  
        gsap.to(menu, {
          clip: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: 'hop',
          duration: 1.5,
          onStart: ()=>{
              menu.style.pointerEvents = 'all'; // Correct way to set pointer events
          },
          onComplete: ()=>{
              isAnimating = false;
          }   
        })
        gsap.to(links,{
          y:0,
          opacity:1,
          stagger:0.1,
          delay:0.85,
          duration:1,
          ease:"power3.out"
        })
        gsap.to(socialLinks,{
          y:0,
          opacity:1,
          stagger:0.05,
          delay:0.85,
          duration:1,
          ease:"power3.out"
        })
        gsap.to(".video-wrapper",{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          delay:0.5,
          duration:1.5,
          ease:"hop"
        })
        gsap.to(".header h1 span")
      } else {
        menuToggle.classList.remove("opened");
        menuToggle.classList.add("closed");
        isAnimating = true;
      }
    });
  
  });
  
  
  
  
  
  /* 
    const menuToggleRef = useRef<HTMLDivElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
  
    useEffect(() => {
      CustomEase.create(
        "hop",
        "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
      );
    
      const toggleElement = menuToggleRef.current;  // Guardamos el valor de la ref en una variable
  
      const handleMenuToggle = () => {
        if (isAnimating) return;
        if (toggleElement?.classList.contains("closed")) {
          toggleElement.classList.remove("closed");
          toggleElement.classList.add("opened");
          setIsAnimating(true);
    
          gsap.to(menuRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: 'hop',
            duration: 1.5,
            onStart: () => {
              if (menuRef.current) {
                menuRef.current.style.pointerEvents = 'all';
              }
            },
            onComplete: () => {
              setIsAnimating(false);
            },
          });
        } else {
          toggleElement?.classList.remove("opened");
          toggleElement?.classList.add("closed");
          setIsAnimating(true);
          // Animación de cierre puede ser agregada aquí
          setIsAnimating(false); // Esto debe ser ajustado después de animar el cierre
        }
      };
    
      // Agregar el event listener
      if (toggleElement) {
        toggleElement.addEventListener('click', handleMenuToggle);
      }
    
      // Cleanup function usando la misma referencia
      return () => {
        if (toggleElement) {
          toggleElement.removeEventListener('click', handleMenuToggle);
        }
      };
    }, [isAnimating]);
    
  
  */