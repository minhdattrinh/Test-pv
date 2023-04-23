<template>
  <nav>
    <div class="container">
      <div class="row header-top">
        <div class="col-sm-4 header_logo">
          <router-link to="/" class="header-text">
            <img src="@/assets/Image/logo.svg" alt="logo" />
            A-Packets
          </router-link>
        </div>
        <div class="col-sm-7 header_menu">
          <ul class="header_menu-nav">
            <li v-for="(menu, index) in menus" :key="index">
              <router-link
                :to="menu.link"
                class="menu-item-link"
                :class="{ active: isActive(menu.link) }"
              >
                {{ menu.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header-comp",
  data() {
    return {
      menus: [
        { name: "Features", link: "/" },
        { name: "FAQ", link: "/faq" },
        { name: "Upload", link: "/upload" },
        { name: "API", link: "/api" },
        { name: "Price", link: "/price" },
        { name: "View Pcaps", link: "/view-pcaps" },
        { name: "🔒 My Pcaps", link: "/my-pcaps" },
        { name: "Sign in", link: "/sign-in" },
      ],
    };
  },
  methods: {
    isActive(link) {
      return link === this.$route.path;
    },
  },
};
</script>

<style>
nav {
  background: linear-gradient(180deg, #333 5%, #444);
}
.header-text {
  color: #aaa;
}
.header-top {
  height: 52px;
  display: flex;
  align-items: center;
}
.header_logo a {
  font-size: 1.1rem;
  text-decoration: none;
  color: #aaa;
}
.header_menu {
  display: flex;
  align-items: center;
  justify-content: right;
}
.header_menu-nav {
  display: flex;
  margin: 0;
}
.header_menu li {
  margin: 0 0 0 20px;
  list-style: none;
}
.header_logo a,
.header_menu li:hover .menu-item-link {
  color: #fff;
}

.header_text:hover {
  color: #fff;
}

.menu-item-link {
  text-decoration: none;
  color: #aaa;
  font-size: 1.1rem;
  cursor: pointer;
}
.active {
  color: #fff;
  border-bottom: 2px solid #fff;
  /* font-weight: bold; */
}
</style>
