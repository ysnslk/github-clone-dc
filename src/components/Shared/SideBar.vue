<template>
  <div class="side-bar">
    <div class="name">
      <router-link tag="a" to="/" class="profile">
        <img src="https://picsum.photos/15/15?random=1" alt="" class="img" />
        mehmetsagir <icon name="chevron-down" color="white" size="10px" />
      </router-link>
    </div>
    <hr class="hr" />
    <div class="repositories">
      Repositories
      <router-link tag="a" to="" class="btn">
        <icon name="book" color="white" size="13px" class="icon" />New
      </router-link>
      <input type="text" placeholder="Find a repository..." class="search" />
    </div>
    <div class="projects" v-for="i in 10" :key="i">
      <router-link tag="a" to="/" class="projects-link">
        <icon name="book" color="white" size="10px" />
        mehmetsagir/v-svg-icon
      </router-link>
    </div>
    <div class="side-bar-footer">
      <hr class="hr" />
      <p>
        <b>Your teams</b><br /><br />
        You don’t belong to any teams yet!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
.side-bar {
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  background: lighten(#0d1117, 2%);
  color: #c9d1d9;
  width: 400px;
  height: 935px;
  align-items: center;
  .hr {
    border-color: grey;
    margin-top: 20px;
  }
  .name {
    margin-bottom: 20px;
    .img {
      border-radius: 50%;
      float: left;
      margin-right: 5px;
    }
    .profile {
      color: white;
    }
  }
  .repositories {
    margin-top: 10px;
    .search {
      margin-top: 20px;
      display: flex;
      background: #0d1117;
      height: 30px;
      width: 100%;
      border-radius: 5px;
    }
    input[type="text"]:focus {
      border-color: blue;
      color: whitesmoke;
    }

    .btn {
      background-color: #2ea043;
      float: right;
      padding: 5px;
      width: 70px;
      color: white;
      border-radius: 6px;
      cursor: pointer;
      &:hover {
        background-color: lighten(#2ea043, 5%);
        transition: 7ms;
      }

      .icon {
        margin-right: 5px;
      }
    }
  }
  .projects {
    margin-top: 20px;
    .projects-link {
      color: #388bfd;
      text-decoration: none;
    }
  }
  .side-bar-footer {
    p {
      padding-top: 20px;
    }
  }
}
</style>