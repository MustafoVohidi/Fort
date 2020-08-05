<template>
  <div id="app">
    <header>
      <!-- LEFT PANEL -->
      <div class="sidebar-fixed scrolling position-fixed">
        <router-link to="/" class="logo-wrapper waves-effect">
          <img src="./image/logo.png" alt class="img-fluid" />
        </router-link>
        <hr />

        <div class="list-group list-group-flush">
          <div class="nav-top">
            <h5>Меню</h5>

            <ul>
              <router-link to="/Panel">
                <a href="#" class="list-group-item waves-effect">
                  <b-icon icon="columns-gap" class="btn_icon" />Панель
                </a>
              </router-link>

              <router-link to="/Espantions">
                <a href="#" class="list-group-item waves-effect">
                  <b-icon icon="person-circle" class="btn_icon" />Расширения
                </a>
              </router-link>

              <router-link to="/Design">
                <a href="#" class="list-group-item waves-effect">
                  <b-icon icon="card-text" class="btn_icon" />Дизайн
                </a>
              </router-link>

              <router-link to="/Sales">
                <a href="#" class="list-group-item waves-effect active">
                  <b-icon icon="exclude" class="btn_icon" />Продажи
                </a>
              </router-link>

              <router-link to="/Shoppers">
                <a href="#" class="list-group-item waves-effect">
                  <b-icon icon="clipboard-data" class="btn_icon" />Покупатели
                </a>
              </router-link>

              <router-link to="/Marketing">
                <a href="#" class="list-group-item waves-effect">
                  <b-icon icon="calendar2" class="btn_icon" />Марктинг
                </a>
              </router-link>

              <router-link to="/System">
                <a href="#" class="list-group-item waves-effect">
                  <b-icon icon="card-heading" class="btn_icon" />Система
                </a>
              </router-link>
            </ul>
          </div>
          <div>
            <h5>Поддержка</h5>
            <ul>
              <router-link to="/Help">
                <a href="#" class="list-group-item waves-effect">
                  <b-icon icon="question-circle" class="btn_icon" />Нужна помощь?
                </a>
              </router-link>

              <router-link to="/Contacts">
                <a href="#" class="list-group-item waves-effect">
                  <b-icon icon="envelope" class="btn_icon" />Контакты
                </a>
              </router-link>

              <router-link to="/Settings">
                <a href="#" class="list-group-item waves-effect">
                  <b-icon icon="gear" class="btn_icon" />Настройки
                </a>
              </router-link>
            </ul>
            <h5>Settings</h5>
            <ul>
              <router-link to="/Themes">
                <a href="#" class="list-group-item waves-effect">
                  <b-icon icon="moon" class="btn_icon" />Темы
                </a>
              </router-link>

              <router-link to="/Logout">
                <a href="#" class="list-group-item waves-effect">
                  <b-icon icon="arrow-bar-right" class="btn_icon" />Выйти
                </a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
      <!-- NAV -->
      <nav class="navbar fixed-top navbar-expend-lg navbar-light white scrolling-navbar">
        <div class="container-fluid">
          <div class="admin">
            <b-list-group style="max-width: 300px;">
              <b-list-group-item class="d-flex align-items-right admin-1">
                <b-dropdown
                  aria-describedby="dropdown-header-label"
                  variant="white"
                  text="John Doe"
                  class="btn-admin m-2"
                >
                  <b-dropdown-item-button aria-describedby="dropdown-header-label">Admin 1</b-dropdown-item-button>
                  <b-dropdown-item-button aria-describedby="dropdown-header-label">Admin 2</b-dropdown-item-button>
                </b-dropdown>
                <b-avatar class="mr-3 mt-2"></b-avatar>
              </b-list-group-item>
            </b-list-group>
          </div>
        </div>
      </nav>
    </header>
    <!-- RIGHT PANEL -->
    <main class="pt-5 max-lg-6">
      <div class="right-panel">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  color: #2c3e50;
  background-color: rgb(249, 249, 251);
  height: 100vh;
}

.right-panel {
  margin-top: 50px;
  background-color: rgb(249, 249, 251);
}
.sidebar-fixed {
  height: 100vh;
  width: 240px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 10;
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 0;
}

.sidebar-fixed .list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  background-color: rgb(30, 41, 51);
}
.sidebar-fixed {
  background-color: rgb(30, 41, 51);
  text-align: left;
  font-size: 11px;
}
.sidebar-fixed .logo-wrapper {
  padding: 2.5rem;
}

.sidebar-fixed .logo-wrapper {
  min-height: 50px;
  background-color: rgba(30, 41, 51, 0.8);
  border: none;
}

@media (min-width: 1200px) {
  .navbar,
  .page-footer,
  main {
    padding-left: 240px;
  }
}
@media (max-width: 1199.98px) {
  .sidebar-fixed main {
    display: none;
  }
}

.btn_icon {
  margin-right: 12px;
}
hr {
  margin: 1rem 0 0 -1rem;
  background-color: wheat;
}
h5 {
  color: white;
  font-size: 12px;
  margin: 1rem;
  margin-bottom: 1.5rem;
}
.list-group .list-group-item {
  background-color: rgba(30, 41, 51, 0.8);
  color: white;
    border: none;
}

.active {
  background-color: yellow;
  color: white;
}
ul {
  color: white;
  padding: 0;
  margin: 0;
}

.nav-top {
  margin-bottom: 30px;
}
.navbar {
  padding-top: 0;
  padding-right: 0;
}
nav .container-fluid {
  background-color: white;
}
.admin .mt-2 {
  background-color: rgb(127, 170, 248);
  color: rgb(0, 88, 252);
}
.admin .admin-1 {
  background-color: white;
  color: #2c3e50;
  border: none;
}
.admin {
  margin-left: 80%;
}

</style>
