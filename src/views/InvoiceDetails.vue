<template>
  <section class="invoicedetails flex column a-start j-start">
    <div class="invoicedetails__left">
      <h3>
        Invoice <span>#{{ getActiveInvoice.invoiceId.value }}</span>
      </h3>
      <h4>
        Status: {{ getActiveInvoice.invoiceStatus.value }}
        <span
          class="invoicedetails__left_status-dot1"
          :class="{
            orange: getActiveInvoice.invoiceStatus.value === 'Pending',
            green: getActiveInvoice.invoiceStatus.value === 'Paid',
            gray: getActiveInvoice.invoiceStatus.value === 'Draft',
          }"
        ></span>
      </h4>
      <p>Invoice Date: {{ getActiveInvoice.invoiceDate.value }}</p>
      <p>{{ getActiveInvoice.clientName.value }}</p>
      <p>{{ getActiveInvoice.clientEmail.value }}</p>
      <p>{{ getActiveInvoice.clientStreetAddress.value }}</p>
      <p>{{ getActiveInvoice.clientCity.value }}</p>
      <p>{{ getActiveInvoice.clientCountry.value }}</p>
      <p>{{ getActiveInvoice.clientZipCode.value }}</p>
      <p>Payment Due Date: {{ getActiveInvoice.paymentDueDate.value }}</p>
      <p>Notes: {{ getActiveInvoice.clientNote.value }}</p>
    </div>
    <div class="invoicedetails__right">
      <div class="invoicedetails__right_items">
        <ul>
          <li class="invoicedetails__right_items-header">
            <p>Item Name</p>
            <p>Quantity</p>
            <p>Unit Price</p>
            <p>Item Total</p>
          </li>
          <li v-for="item in getActiveInvoice.invoiceItemList" :key="item.itemId.value">
            <p>{{ item.itemName.value }}</p>
            <p>{{ item.itemQuantity.value }}</p>
            <p>${{ item.unitPrice.value }}</p>
            <p>${{ item.itemTotal.value }}</p>
          </li>
          <li class="invoicedetails__right_items-footer">
            <p>Invoice Total</p>
            <p>${{ getActiveInvoice.invoiceTotal.value }}</p>
          </li>
        </ul>
      </div>
      <div class="invoicedetails__right_buttons">
        <button type="button" class="invoicedetails__right_btn invoicedetails__right_btn-modify" @click="modifyInvoice">
          Modify
        </button>
        <button
          type="button"
          class="invoicedetails__right_btn invoicedetails__right_btn-back"
          @click="$router.push({ name: 'Home' })"
        >
          Save & Back
        </button>
      </div>
    </div>
    <button
      v-if="getActiveInvoice.invoiceStatus.value === 'Pending'"
      type="button"
      class="invoicedetails__right_btn invoicedetails__right_btn-pending"
      @click="setInvoiceStatus('Paid')"
    >
      Set as paid
      <span
        class="invoicedetails__left_status-dot2"
        :class="{
          orange: getActiveInvoice.invoiceStatus.value === 'Paid',
          green: getActiveInvoice.invoiceStatus.value === 'Pending',
          gray: getActiveInvoice.invoiceStatus.value === 'Draft',
        }"
      ></span>
    </button>
    <button
      v-else
      type="button"
      class="invoicedetails__right_btn invoicedetails__right_btn-paid"
      @click="setInvoiceStatus('Pending')"
    >
      Set as pending
      <span
        class="invoicedetails__left_status-dot2"
        :class="{
          orange: getActiveInvoice.invoiceStatus.value === 'Paid',
          green: getActiveInvoice.invoiceStatus.value === 'Pending',
          gray: getActiveInvoice.invoiceStatus.value === 'Draft',
        }"
      ></span>
    </button>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'InvoiceDetails',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getActiveInvoice']),
  },
  methods: {
    ...mapActions(['setActiveInvoice', 'setInvoiceStatus', 'modifyInvoice']),
  },
  created() {
    this.setActiveInvoice(this.$route.params.id);
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
  flex-flow: row;

  h3 {
    margin: 40px 0px 40px 30px;
    color: $white;
    font-size: 32px;

    span {
      font-size: 32px;
      color: $gray;
    }
  }

  h4 {
    margin: 0px 0px 20px 30px;
    font-size: 24px;
    color: $white;
    font-weight: normal;
    position: relative;
    width: fit-content;
  }

  p {
    margin: 0px 0px 10px 30px;
    font-size: 18px;
    color: $white;
    font-weight: 300;
    position: relative;
    width: fit-content;
    letter-spacing: 0.5px;
  }

  .invoicedetails__left {
    flex: 1;
  }

  .invoicedetails__right {
    flex: 1;
    display: flex;
    margin-top: 120px;
    flex-flow: column nowrap;

    .invoicedetails__right_items {
      ul {
        list-style-type: none;

        li {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: flex-start;

          p {
            width: 120px;
          }
        }
      }
      .invoicedetails__right_items-header {
        p {
          font-weight: normal;
        }
      }
      .invoicedetails__right_items-footer {
        display: flex;
        justify-content: flex-end;
        border-top: 1px solid $gray;
        padding-top: 5px;
        p {
          font-weight: normal;
        }
      }
    }

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

    .invoicedetails__right_buttons {
      width: 600px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      align-items: center;
      position: absolute;
      bottom: 20px;
      .invoicedetails__right_btn-back {
        background-color: $dark-gray;
        width: 200px;
        &:hover {
          background-color: $dark-gray-hover;
        }
      }
      .invoicedetails__right_btn-modify {
        background-color: $blue;
        width: 200px;
        &:hover {
          background-color: $blue-hover;
        }
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
