<template>
  <div
    class="modal fade"
    id="exampleModal"
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
            Informações da entrega
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <form action="">
            <div class="form-floating mt-4">
              <input
                type="text"
                class="form-control"
                id="inputName"
                placeholder="Nome do cliente"
                v-model="fieldClientName"
              >
              <label for="inputName">Nome do cliente</label>
              <p class="my-2 text-danger">
                {{ errors['fieldClientName'] }}
              </p>
            </div>
            <div class="form-floating mt-2">
              <input
                type="date"
                class="form-control"
                id="deliveryDate"
                placeholder="00/00/00"
                v-model="fieldDeliveryDate"
              >
              <label for="deliveryDate">Data da entrega</label>
              <p class="my-2 text-danger">
                {{ errors['fieldDeliveryDate'] }}
              </p>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="clearInputs"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="submitForm"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ModalForm',
  data() {
    return {
      fieldClientName: '',
      fieldDeliveryDate: '',
      errors: {
        fieldClientName: '',
        fieldDeliveryDate: '',
      },
    };
  },
  methods: {
    submitForm() {
      // data-bs-dismiss="modal"
      this.errors.fieldClientName ='';
      this.errors.fieldDeliveryDate ='';

      if (!this.fieldClientName) {
        this.errors.fieldClientName = 'Este campo é obrigatório';
        return;
      }
      if (!this.fieldDeliveryDate) {
        this.errors.fieldDeliveryDate = 'Este campo é obrigatório';
        return;
      }

      this.$emit('formSubmitted', {
        clientName: this.fieldClientName,
        deliveryDate: this.fieldDeliveryDate,
      });
      this.clearInputs();
      this.closeModal();
    },

    clearInputs() {
      this.fieldClientName = '';
      this.fieldDeliveryDate = '';
      this.errors.fieldClientName = '';
      this.errors.fieldDeliveryDate = '';     
    },

    closeModal() {
      const modal = document.getElementById('exampleModal');
      if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          document.body.removeChild(backdrop);
        }
      }
    },
  },
};
</script>

<style>
/* Estilos personalizados podem ser adicionados aqui */
</style>
