let sideMenu = document.querySelector(".side-menu");
      let sidebarPop = document.querySelector(".sidebar");
      let closeMenu = document.querySelector(".close-menu");

      let upMenu = document.querySelector(".up-menu");
      let upSidebar = document.querySelector(".upbar");
      let closeMenuUp = document.querySelector(".close-menu-up");

      sideMenu.addEventListener("click", (e) => {
        e.preventDefault();
        sidebarPop.classList.add("hide-side");
      });

      closeMenu.addEventListener("click", (e) => {
        e.preventDefault();
        sidebarPop.classList.remove("hide-side");
      });

      upMenu.addEventListener("click", (e) => {
        e.preventDefault();
        upSidebar.classList.add("hide-menu-up");
      });

      closeMenuUp.addEventListener("click", (e) => {
        e.preventDefault();
        upSidebar.classList.remove("hide-menu-up");
      });