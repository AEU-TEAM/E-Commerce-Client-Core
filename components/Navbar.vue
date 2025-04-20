<template>
  <v-app-bar flat app class="custom-app-bar bg-black">
    <v-container fluid>
      <v-row align="center">
        <v-col cols="auto">
          <div class="video-wrapper">
            <video
              src="/videos/Logo.mp4"
              autoplay
              muted
              loop
              playsinline
            ></video>
          </div>
        </v-col>

        <v-col cols="5" class="d-none d-md-flex">
          <v-text-field
            v-model="searchQuery"
            placeholder="Search"
            single-line
            hide-details
            prepend-inner-icon="mdi-magnify"
            class="search-field"
          ></v-text-field>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="auto" class="d-none d-lg-flex">
          <v-btn text to="/" class="nav-link">Home</v-btn>
          <v-btn text to="/about" class="nav-link">About</v-btn>
          <v-btn text to="/contact" class="nav-link">Contact Us</v-btn>
          <v-btn text to="/blog" class="nav-link">Blog</v-btn>
        </v-col>

        <v-col cols="auto" class="d-flex align-center">
          <v-btn icon to="/wishlist" class="icon-button">
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
          <v-btn icon to="/cart" class="icon-button ml-2">
            <v-icon>mdi-cart-outline</v-icon>
          </v-btn>
          <v-btn icon to="/profile" class="icon-button ml-2">
            <v-icon>mdi-account-circle-outline</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="auto" class="d-flex d-md-none">
          <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item link to="/">
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
              <v-list-item link to="/about">
                <v-list-item-title>About</v-list-item-title>
              </v-list-item>
              <v-list-item link to="/contact">
                <v-list-item-title>Contact Us</v-list-item-title>
              </v-list-item>
              <v-list-item link to="/blog">
                <v-list-item-title>Blog</v-list-item-title>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item link to="/wishlist">
                <v-list-item-title>Wishlist</v-list-item-title>
              </v-list-item>
              <v-list-item link to="/cart">
                <v-list-item-title>Cart</v-list-item-title>
              </v-list-item>
              <v-list-item link to="/profile">
                <v-list-item-title>Profile</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
};
</script>

<style scoped>
.custom-app-bar {
  height: 65px; /* Set custom height */
  min-height: 65px; /* Important for Vuetify internal styles */
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.search-field {
  max-width: 200px; /* Adjust as needed */
}

.nav-link {
  margin-left: 1rem;
}

.icon-button {
  min-width: auto; /* Prevent icon buttons from being too wide */
}
.video-wrapper {
  width: 300px; /* container size */
  height: 100px; /* container size */
  overflow: hidden; /* hide anything outside */
  position: relative;
  padding: 10px;
}

.video-wrapper video {
  width:200px;
  height: 200px;
  position: relative;
  top:55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>