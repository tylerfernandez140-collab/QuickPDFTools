// ads.js — responsive Adsterra banner for all tools 
document.addEventListener("DOMContentLoaded", () => { 
  const adContainer = document.createElement("div"); 
  adContainer.style.textAlign = "center"; 
  adContainer.style.margin = "30px 0"; 

  // Desktop Ad (728x90) 
  const desktopAd = ` 
    <div class="adsterra-banner desktop-ad"> 
      <script type="text/javascript"> 
        atOptions = { 
          'key' : 'ac1602dab0959a0c5e3cf43f316771a7', 
          'format' : 'iframe', 
          'height' : 90, 
          'width' : 728, 
          'params' : {} 
        }; 
      </script> 
      <script type="text/javascript" src="//www.highperformanceformat.com/ac1602dab0959a0c5e3cf43f316771a7/invoke.js"></script> 
    </div> 
  `; 

  // Mobile Ad (320x50) 
  const mobileAd = ` 
    <div class="adsterra-banner mobile-ad"> 
      <script type="text/javascript"> 
        atOptions = { 
          'key' : 'ac1602dab0959a0c5e3cf43f316771a7', 
          'format' : 'iframe', 
          'height' : 50, 
          'width' : 320, 
          'params' : {} 
        }; 
      </script> 
      <script type="text/javascript" src="//www.highperformanceformat.com/ac1602dab0959a0c5e3cf43f316771a7/invoke.js"></script> 
    </div> 
  `; 

  adContainer.innerHTML = desktopAd + mobileAd; 

  // Insert at bottom of main content or before footer 
  const main = document.querySelector("main") || document.body; 
  main.appendChild(adContainer); 

  // Add responsive styling 
  const style = document.createElement("style"); 
  style.textContent = ` 
    .mobile-ad { display: none; } 
    @media (max-width: 600px) { 
      .desktop-ad { display: none; } 
      .mobile-ad { display: block; } 
    } 
  `; 
  document.head.appendChild(style); 
});