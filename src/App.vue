<template>
  <div id="app">
    <div class="row">
      <div class="col-2">
        <div class="left-panel">
          <div class="left">
            <div
              class="nav col-2 flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <div class="logo">
                <router-link to="/">
                  <img src="./image/logo.png" />
                </router-link>
              </div>
              <hr />
              <div class="nav-top">
                <h5>Меню</h5>
                <ul>
                  <router-link to="/Panel">
                    <button type="button" class="btn">
                      <b-icon icon="columns-gap" class="btn_icon" />Панель
                    </button>
                  </router-link>

                  <router-link to="/Espantions">
                    <button type="button" class="btn">
                      <b-icon icon="person-circle" class="btn_icon" />Расширения
                    </button>
                  </router-link>

                  <router-link to="/Design">
                    <button type="button" class="btn">
                      <b-icon icon="card-text" class="btn_icon" />Дизайн
                    </button>
                  </router-link>

                  <router-link to="/Sales">
                    <button type="button" class="btn">
                      <b-icon icon="exclude" class="btn_icon" />Продажи
                      <b-badge class="b-badge-nav">6</b-badge>
                    </button>
                  </router-link>

                  <router-link to="/Shoppers">
                    <button type="button" class="btn">
                      <b-icon icon="clipboard-data" class="btn_icon" />Покупатели
                    </button>
                  </router-link>

                  <router-link to="/Marketing">
                    <button type="button" class="btn">
                      <b-icon icon="calendar2" class="btn_icon" />Марктинг
                    </button>
                  </router-link>

                  <router-link to="/System">
                    <button type="button" class="btn">
                      <b-icon icon="card-heading" class="btn_icon" />Система
                    </button>
                  </router-link>
                </ul>
              </div>
              <div>
                <h5>Поддержка</h5>
                <ul>
                  <router-link to="/Help">
                    <button type="button" class="btn">
                      <b-icon icon="question-circle" class="btn_icon" />Нужна помощь?
                    </button>
                  </router-link>

                  <router-link to="/Contacts">
                    <button type="button" class="btn">
                      <b-icon icon="envelope" class="btn_icon" />Контакты
                    </button>
                  </router-link>

                  <router-link to="/Settings">
                    <button type="button" class="btn">
                      <b-icon icon="gear" class="btn_icon" />Настройки
                    </button>
                  </router-link>
                </ul>
                <h5>Settings</h5>
                <ul>
                  <router-link to="/Themes">
                    <button type="button" class="btn">
                      <b-icon icon="moon" class="btn_icon" />Темы
                    </button>
                  </router-link>

                  <router-link to="/Logout">
                    <button type="button" class="btn">
                      <b-icon icon="arrow-bar-right" class="btn_icon" />Выйти
                    </button>
                  </router-link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-10">
       <div class="right-panel">
              <router-view />
      </div>
         </div>
    </div>
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
}
button {
  width: 180px;
  text-align: left;
}
.btn {
  justify-content: center;
  text-align: left;
  color: white;
  font-size: 12px;
}
.btn_icon {
  margin-right: 12px;
}
hr {
  margin: 1rem 0 0 -1rem;
  padding-right: 50px;
  background-color: wheat;
}
h5 {
  color: white;
  font-size: 12px;
  margin: 1rem;
  margin-bottom: 1.5rem;
}
.b-badge-nav {
  font-size: 11px;
  color: #2c3e50;
  margin-left: 3rem;
  background: white;
  border-radius: 50%;
}
ul {
  color: white;
  padding: 0;
  margin: 0;
}
.logo {
  margin-top: 15px;
}
.col-2 {
  margin: 0;
  padding: 0;

  text-align: left;
}
.col-10 {
  margin: 0;
  padding: 0;
  background-color: rgb(249, 249, 251);
}
.left-panel {
  height: 100vh;
  background: rgb(30, 41, 51);
  text-align: left;
  position: fixed;
}
.left {
  position: relative;
}

.row {
  padding: 0;
  margin: 0;
  background-color: rgb(30, 41, 51);
}

.nav {
  height: 100vh;
  position: absolute;
  padding: 0;
  margin-left: 1rem;
  background: rgb(30, 41, 51);
}
.nav-top {
  margin-bottom: 80px;
}
.right-panel{
  min-height: 100vh;
}
</style>
