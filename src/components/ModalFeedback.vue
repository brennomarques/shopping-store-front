<template>
  <div
    class="modal fade"
    id="modalFeedback"
    ref="modalFeedback"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            class="modal-title"
            id="exampleModalLabel"
          >
            FeedBack
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <h1>Não foi possivel compra o produto</h1>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Ok
          </button>
          <button @click="closeModal">
            Fechar Modal
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ModalFeedback',
  data() {
    return {
      
    };
  },
  methods: {
    // closeModal() {
    //   const modal = document.getElementById('exampleModal');
    //   if (modal) {
    //     modal.classList.remove('show');
    //     modal.style.display = 'none';
    //     document.body.classList.remove('modal-open');
    //     const backdrop = document.querySelector('.modal-backdrop');
    //     if (backdrop) {
    //       document.body.removeChild(backdrop);
    //     }
    //   }
    // },
    closeModal() {
      this.$emit('closeModal');
    },
  },
};
</script>

<style>
/* Estilos personalizados podem ser adicionados aqui */
</style>
