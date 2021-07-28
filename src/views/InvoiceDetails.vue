<template>
  <section class="invoicedetails flex column a-start j-start">
    <div class="invoicedetails__left">
      <h3>
        Invoice <span>#{{ ACTIVE_INVOICE.invoiceId }}</span>
      </h3>
      <h4>
        Status: {{ ACTIVE_INVOICE.status }}
        <span
          class="invoicedetails__left_status-dot1"
          :class="{
            orange: ACTIVE_INVOICE.status === 'Pending',
            green: ACTIVE_INVOICE.status === 'Paid',
            gray: ACTIVE_INVOICE.status === 'Draft',
          }"
        ></span>
      </h4>
      <h4>{{ ACTIVE_INVOICE.date }}</h4>
      <h4>{{ ACTIVE_INVOICE.country }}</h4>
      <h4>{{ ACTIVE_INVOICE.zipCode }}</h4>
    </div>
    <div class="invoicedetails__right">
      <button type="button" class="invoicedetails__right_btn invoicedetails__right_btn-modify">Modify</button>
      <button
        type="button"
        class="invoicedetails__right_btn invoicedetails__right_btn-back"
        @click="$router.push({ name: 'Home' })"
      >
        Back
      </button>
    </div>
    <button
      v-if="ACTIVE_INVOICE.status === 'Pending'"
      type="button"
      class="invoicedetails__right_btn invoicedetails__right_btn-pending"
    >
      Set as paid
      <span
        class="invoicedetails__left_status-dot2"
        :class="{
          orange: ACTIVE_INVOICE.status === 'Paid',
          green: ACTIVE_INVOICE.status === 'Pending',
          gray: ACTIVE_INVOICE.status === 'Draft',
        }"
      ></span>
    </button>
    <button v-else type="button" class="invoicedetails__right_btn invoicedetails__right_btn-paid">
      Set as pending
      <span
        class="invoicedetails__left_status-dot2"
        :class="{
          orange: ACTIVE_INVOICE.status === 'Paid',
          green: ACTIVE_INVOICE.status === 'Pending',
          gray: ACTIVE_INVOICE.status === 'Draft',
        }"
      ></span>
    </button>
  </section>
</template>

<script>
export default {
  name: 'InvoiceDetails',
  data() {
    return {};
  },
  computed: {
    ACTIVE_INVOICE() {
      return this.$store.getters.ACTIVE_INVOICE;
    },
  },
  created() {
    this.$store.dispatch('GET_INVOICE', this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.invoicedetails {
  min-width: 700px;
  width: 70%;
  height: 700px;
  margin: auto;
  background: -webkit-linear-gradient(180deg, rgb(32, 88, 145), rgb(8, 39, 67));
  background: linear-gradient(180deg, rgb(32, 88, 145), rgb(8, 39, 67));
  border: 2px solid $white;
  border-radius: 5px;
  position: relative;
  h3 {
    margin: 40px 0px 70px 50px;
    color: $white;
    font-size: 32px;

    span {
      font-size: 32px;
      color: $gray;
    }
  }

  h4:first-of-type {
    margin: 0px 0px 50px 50px;
  }

  h4 {
    margin: 0px 0px 15px 50px;
    font-size: 24px;
    color: $white;
    font-weight: normal;
    position: relative;
    width: fit-content;
  }
  .invoicedetails__right {
    align-self: flex-end;
    margin-top: 230px;
    width: 400px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;

    .invoicedetails__right_btn {
      border: none;
      border-radius: 10px;
      padding: 10px 50px;
      font-size: 16px;
      color: $white;
      transition: background-color 0.2s ease-out;
      &:hover {
        cursor: pointer;
      }
      white-space: nowrap;
    }

    .invoicedetails__right_btn-back {
      background-color: $dark-gray;
      margin-right: 10px;
      &:hover {
        background-color: $dark-gray-hover;
      }
    }
    .invoicedetails__right_btn-modify {
      background-color: $blue;
      &:hover {
        background-color: $blue-hover;
      }
    }
  }

  .invoicedetails__right_btn-pending,
  .invoicedetails__right_btn-paid {
    position: absolute;
    right: 50px;
    top: 40px;
    border: none;
    border-radius: 10px;
    padding: 3px 60px;
    font-size: 16px;
    color: $white;
    transition: background-color 0.2s ease-out;
    background-color: $dark-blue;
    margin-right: 10px;
    &:hover {
      cursor: pointer;
      background-color: $dark-blue3;
    }
    white-space: nowrap;
  }
  button {
    position: relative;
  }
  .invoicedetails__left_status-dot {
    position: absolute;
    right: -20px;
    top: 14px;
    border-radius: 50%;
    width: 8px;
    height: 8px;
  }
  .invoicedetails__left_status-dot2 {
    position: absolute;
    right: 10px;
    top: 12px;
    border-radius: 50%;
    width: 8px;
    height: 8px;
  }
  .orange {
    background-color: $orange;
  }
  .gray {
    background-color: $gray;
  }
  .green {
    background-color: $green;
  }
}
</style>
