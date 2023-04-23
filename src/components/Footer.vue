<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3>Contact</h3>
          <p>Address: VietNam</p>
          <p>Phone: 0987654321</p>
          <p>Email: contact@company.com</p>
        </div>
        <div class="col-md-4">
          <h3>About us</h3>
          <p>Provide the best solution.</p>
        </div>
        <div class="col-md-4">
          <h3>Follow us !</h3>
          <ul class="social-media">
            <li>
              <i class="fa-brands fa-square-facebook"></i>
            </li>
            <li>
              <i class="fa-brands fa-square-twitter"></i>
            </li>
            <li>
              <i class="fa-brands fa-square-instagram"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-comp",
};
</script>

<style scoped>
footer {
  background: url(https://my.joblum.com/uploads/29/28333.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px 0;
}

h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
}

p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
  color: #fff;
}

.social-media {
  list-style: none;
  display: flex;
  /* justify-content: center; */
}

.social-media li {
  margin-right: 20px;
  font-size: 30px;
  cursor: pointer;
}

.social-media li:last-child {
  margin-right: 0;
}

.fa {
  font-size: 24px;
  color: #333;
}
.social-media li:hover {
  opacity: 0.9;
}
</style>
