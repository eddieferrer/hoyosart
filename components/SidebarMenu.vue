<template>
  <!-- Sidebar Menu -->
  <div class="sm-wrapper sm-left dark">
    <div class="top logo">
      <h5 class="uppercase letter-spacing-2">
        <a href="#" class="d-none d-lg-inline d-xl-inline">Ana Maria Hoyos</a>
      </h5>
    </div>
    <div class="middle">
      <ul class="sm">
        <li class="sm-item"><a class="sm-link" href="#">Home</a></li>
        <li class="sm-item"><a class="sm-link" href="#">About</a></li>
        <li class="sm-item">
          <a class="sm-link active" href="#">Galleries</a>
          <ul class="sm-dropdown show">
            <li class="sm-dropdown-item">
              <a class="sm-dropdown-link" href="#">Figurative Abstracts</a>
            </li>
            <li class="sm-dropdown-item">
              <a class="sm-dropdown-link" href="#">Abstracts</a>
            </li>
            <li class="sm-dropdown-item">
              <a class="sm-dropdown-link" href="#">Contemporary</a>
            </li>
            <li class="sm-dropdown-item">
              <a class="sm-dropdown-link" href="#">Surreal</a>
            </li>
          </ul>
        </li>
        <li class="sm-item">
          <a class="sm-link" href="#">Artist Biography</a>
        </li>
        <li class="sm-item">
          <a class="sm-link" href="#">Press</a>
        </li>
        <li class="sm-item">
          <a class="sm-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <ul class="list-inline margin-bottom-10">
        <li>
          <a href="https://www.facebook.com/ana.m.hoyos.5"
            ><font-awesome-icon :icon="['fab', 'facebook-f']"
          /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/amhoyos1955/"
            ><font-awesome-icon :icon="['fab', 'instagram']"
          /></a>
        </li>
      </ul>
    </div>
    <!-- Close Button -->
    <button class="sm-close">
      <span></span>
    </button>
  </div>
</template>
<style lang="scss" scoped>
h5 a {
  color: #cb0e0e !important;
}
.sm-item {
  border-bottom: 1px solid #242627;
  padding-bottom: 6px;
  margin-bottom: 8px;
}
</style>
