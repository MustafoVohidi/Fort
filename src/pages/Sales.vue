<template>
  <div class="container-fluid col-md">
    <div class="sales-top row wow fadeIn">
      <div class="col-md-7 mb-4">
        <h4 class="col-5">Аналитика продаж</h4>

        <div class="col-5">
          <img src="../image/graph.jpg" />
        </div>
      </div>
      <div class="col-md-5 mb-4">
        <div>
          <div class="sales-top-right">
            <div class="txt">
              <h5>Заказы</h5>
              <h3>1,7К</h3>
              <h6>Подробнее</h6>
            </div>
          </div>
          <div class="sales-top-right">
            <div class="txt">
              <h5>Онлайн</h5>
              <h3>17,7К</h3>
              <h6>Подробнее</h6>
            </div>
          </div>
        </div>
        <div>
          <div class="sales-top-right">
            <div class="txt">
              <h5>Распродажа</h5>
              <h3>24,2К</h3>

              <h6>Подробнее</h6>
            </div>
          </div>
          <div class="sales-top-right">
            <div class="txt">
              <h5>Общие</h5>
              <h3>43,6К</h3>
              <h6>Подробнее</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sales-bottom">
      <div class="col-7">
        <div class="sales-bottom-left">
          <img src="../image/map.jpg" />
        </div>
      </div>
      <div class="col-5">
        <div class="sales-bottom-right">
          <img src="../image/help.jpg" />
          <div class="txt-bottom">
            <h5 class="txt-bottom">Нужна помощь?</h5>
            <h6>Есть ли у вас продлемы при использовании программы?</h6>
            <div class="bottom-btn">
              <b-button variant="primary">Пишите нам</b-button>
            </div>
          </div>
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

<style scoped>
.col-12 {
  padding: 0;
}
.header-right {
  display: flex;
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
  margin-top: 20px;
  text-align: right;
  background-color: #fff;
}
.d-flex,
.m-2 {
  height: 30px;
  justify-content: center;
  text-align: center;
  border: none;
  margin-top: 10px;
  background-color: white;
}

h5 {
  margin: 0;
  padding-top: 10px;
  font-size: 22px;
  font-weight: normal;
}
h3 {
  font-size: 42px;
  font-weight: normal;
}
h6 {
  font-size: 10px;
  font-weight: normal;
  padding-top: 10px;
}
h4 {
  font-size: 14px;
}

.txt {
  margin: 10px;
  margin-top: 20px;
}
.sales-top {
  margin-top: 20px;
  display: flex;
}
.col-6 {
  display: flex;
}
.sales-top-left {
  margin: 10px;
}
.sales-top-right {
  margin: 10px;
  width: 160px;
  height: 140px;
  border-radius: 10px;
  background: rgb(127, 170, 248);
  color: #fff;
  text-align: left;
  justify-content: center;
}

.sales-bottom, .col-md-5  {
  display: flex;

}
.sales-bottom-left {
  margin: 10px;
  width: 600px;
  height: 350px;
  background: #fff;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
}
.sales-bottom-right {
  margin: 10px;
  padding: 20px;
  width: 350px;
  height: 350px;
  background: #fff;
  color: #000;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
}
.txt-bottom {
  padding: 10px;
  text-align: left;
  color: black;
}
.bottom-btn {
  margin-top: 20px;
  width: 150px;
  font-size: 20px;
}
</style>
