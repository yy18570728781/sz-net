<template>
  <div class="dashboard-container">
    <div class="dashboard-text"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  data(){
    return{
      userName:'',
    }
  },
  computed: {
    ...mapGetters(["name"]),
  },
  created() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.userName = userInfo.userName
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
