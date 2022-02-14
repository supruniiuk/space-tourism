const header = document.createElement('header');
header.innerHTML = `<div class="logo circle">
  <div class="logo__element left top brdr-rd-br"></div>
  <div class="logo__element right top brdr-rd-bl"></div>
  <div class="logo__element left bottom brdr-rd-tr"></div>
  <div class="logo__element right bottom brdr-rd-tl"></div>
</div>

<div class="burger-menu icon"></div>

<nav class="nav ff-sans-cond">
  <div class="icon close-menu"></div>

  <ul class="nav__list uppercase">
    <li class="nav-link active-link">
      <a><span>00</span>home</a>
    </li>
    <li class="nav-link">
      <a><span>01</span>destination</a>
    </li>
    <li class="nav-link">
      <a><span>02</span>crew</a>
    </li>
    <li class="nav-link">
      <a><span>03</span>technology</a>
    </li>
  </ul>
</nav>`