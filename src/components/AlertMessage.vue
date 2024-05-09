<template>
  <div
    v-if="visible"
    :class="alertClasses"
    role="alert"
  >
    <template v-if="type === 'success'">
      <IconCheckCircleFill />
    </template>
    <template v-if="type === 'error'">
      <IconExclamationTriangleFill />
    </template>
    <template v-if="type === 'info'">
      <IconInfoFill />
    </template>
    <template v-if="type === 'waiting'">
      <IconExclamationTriangleFill />
    </template>
    <span class="ms-2">{{ message }}</span>
  </div>
</template>

<script>
import IconCheckCircleFill from './icons/IconCheckCircleFill.vue';
import IconExclamationTriangleFill from './icons/IconExclamationTriangleFill.vue';
import IconInfoFill from './icons/IconInfoFill.vue';
export default {
  name: 'AlertMessage',
  components: {
    IconInfoFill,
    IconCheckCircleFill,
    IconExclamationTriangleFill,
  },
  props: {
    message: {
      type: String,
      default: 'information saved successfully',
      required: true
    },
    type: {
      type: String,
      default: 'success',
      required: true
    },
    visible: Boolean,
  },
  computed: {
    alertClasses() {
      return this.setClass();
    }
  },
  methods: {
    setClass() {
      let classes = 'alert d-flex align-items-center';
      switch (this.type) {
      case 'sucsess':
        return classes += ' alert-success';
      case 'error':
        return classes += ' alert-danger';
      case 'info':
        return classes += ' alert-info';
      case 'waiting':
        return classes += ' alert-warning';
      
      default:
        return classes += ' alert-success';
      }
    }
  }
};
</script>
  
  <style>
  
  </style>
  