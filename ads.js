document.addEventListener("DOMContentLoaded", () => {
  const adKey = "ac1602dab0959a0c5e3cf43f316771a7"; // your Adsterra key

  // Create reusable ad element
  function createAd(width, height) {
    const wrapper = document.createElement("div");
    wrapper.style.textAlign = "center";
    wrapper.style.margin = "20px 0";

    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key' : '${adKey}',
        'format' : 'iframe',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    `;
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = `//www.highperformanceformat.com/${adKey}/invoke.js`;

    wrapper.appendChild(script1);
    wrapper.appendChild(script2);
    return wrapper;
  }

  // Determine if mobile or desktop
  const isMobile = window.innerWidth <= 600;
  const width = isMobile ? 320 : 728;
  const height = isMobile ? 50 : 90;

  // Insert TOP banner (below header)
  const header = document.querySelector("header");
  if (header) header.insertAdjacentElement("afterend", createAd(width, height));

  // Insert MIDDLE banner (below main)
  const main = document.querySelector("main");
  if (main) main.insertAdjacentElement("afterend", createAd(width, height));

  // Insert BOTTOM sticky banner (mobile only)
  if (isMobile) {
    const stickyAd = createAd(320, 50);
    stickyAd.style.position = "fixed";
    stickyAd.style.bottom = "0";
    stickyAd.style.left = "0";
    stickyAd.style.right = "0";
    stickyAd.style.background = "#fff";
    stickyAd.style.zIndex = "9999";
    stickyAd.style.boxShadow = "0 -2px 5px rgba(0,0,0,0.1)";
    document.body.appendChild(stickyAd);

    // Add spacing so it doesn’t cover footer
    document.body.style.paddingBottom = "60px";
  }
});