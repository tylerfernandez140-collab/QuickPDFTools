document.addEventListener("DOMContentLoaded", () => {
  const adContainer = document.createElement("div");
  adContainer.style.textAlign = "center";
  adContainer.style.margin = "30px 0";

  adContainer.innerHTML = `
    <!-- Adsterra Banner Ad -->
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
  `;

  // Insert at bottom of main content or before footer
  const targetElement = document.getElementById("ad-container") || document.querySelector("main") || document.body;
  targetElement.appendChild(adContainer);
});