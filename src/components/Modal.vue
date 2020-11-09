<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal-backdrop" @click="closeModal()"/>

      <div class="modal-dialog">
        <div class="modal-header">
          <slot name="header"/>
          <a class="modal-close" @click="closeModal()">
            &#10005;
          </a>
        </div>

        <div class="modal-body">
          <slot name="body"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      show: false
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }
};
</script>


<style lang="scss" scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &-backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &-dialog {
    background-color: #ffffff;
    position: relative;
    width: 50%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &-close {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 10px;
    top: 10px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 1.45rem;
    text-align: center;
  }
  &-header {
    padding: 38px 20px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
  }
  &-body {
//    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &-footer {
    padding: 10px 20px 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>