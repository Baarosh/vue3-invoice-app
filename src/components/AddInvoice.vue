<template>
  <div class="addinvoice__wrapper" :class="{ getDialog }" @click="toggleDialogByOutClick" ref="wrapper">
    <section class="addinvoice flex column a-center j-center">
      <form class="flex column a-start j-start">
        <h2 v-if="!getEditInvoice">New Invoice</h2>
        <h2 v-else>Edit Invoice</h2>
        <div class="flex row a-center j-start">
          <label for="addinvoice__invoiceId">Invoice Id</label>
          <input type="text" id="addinvoice__invoiceId" disabled v-model="invoice.invoiceId.value" />
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__invoiceDate">Invoice Date</label>
          <input
            type="date"
            id="addinvoice__invoiceDate"
            v-model="invoice.invoiceDate.value"
            @input="validateAttribute('invoiceDate')"
          />
          <p class="addinvoice__invalid-value" v-if="invoice.invoiceDate.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.invoiceDate.valid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__clientName">Client Name</label>
          <input
            type="text"
            id="addinvoice__clientName"
            v-model="invoice.clientName.value"
            @input="validateAttribute('clientName')"
          />
          <p class="addinvoice__invalid-value" v-if="invoice.clientName.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.clientName.valid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__clientEmail">Client Email</label>
          <input
            type="email"
            id="addinvoice__clientEmail"
            v-model="invoice.clientEmail.value"
            @input="validateAttribute('clientEmail')"
          />
          <p class="addinvoice__invalid-value" v-if="invoice.clientEmail.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.clientEmail.valid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__clientStreetAddress">Client Street Address</label>
          <input
            type="text"
            id="addinvoice__clientStreetAddress"
            v-model="invoice.clientStreetAddress.value"
            @input="validateAttribute('clientStreetAddress')"
          />
          <p class="addinvoice__invalid-value" v-if="invoice.clientStreetAddress.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.clientStreetAddress.valid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__clientCity">Client City</label>
          <input
            type="text"
            id="addinvoice__clientCity"
            v-model="invoice.clientCity.value"
            @input="validateAttribute('clientCity')"
          />
          <p class="addinvoice__invalid-value" v-if="invoice.clientCity.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.clientCity.valid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__clientZipCode">Client Zip Code</label>
          <input
            type="text"
            id="addinvoice__clientZipCode"
            v-model="invoice.clientZipCode.value"
            @input="validateAttribute('clientZipCode')"
          />
          <p class="addinvoice__invalid-value" v-if="invoice.clientZipCode.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.clientZipCode.valid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__clientCountry">Client country</label>
          <select
            id="addinvoice__clientCountry"
            v-model="invoice.clientCountry.value"
            @change="validateAttribute('clientCountry')"
          >
            <option value="Country" selected disabled>*Select country*</option>
            <option value="France">France</option>
            <option value="Poland">Poland</option>
            <option value="Spain">Spain</option>
          </select>
          <p class="addinvoice__invalid-value" v-if="invoice.clientCountry.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.clientCountry.valid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__clientNote">Client Note</label>
          <textarea
            id="addinvoice__clientNote"
            v-model="invoice.clientNote.value"
            cols="60"
            rows="5"
            maxlength="250"
          ></textarea>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__paymentTerms">Payment Terms</label>
          <select
            id="addinvoice__paymentTerms"
            v-model="invoice.paymentTerms.value"
            @change="validateAttribute('paymentTerms')"
          >
            <option value="Terms" selected disabled>*Select terms*</option>
            <option value="Payment30">Payment in 30 days</option>
            <option value="Payment60">Payment in 60 days</option>
          </select>
          <p class="addinvoice__invalid-value" v-if="invoice.paymentTerms.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.paymentTerms.valid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__paymentDueDate">Payment Due Date</label>
          <input type="date" id="addinvoice__paymentDueDate" v-model="invoice.paymentDueDate.value" disabled />
        </div>

        <div v-if="invoice.invoiceItemList.length > 0" class="addinvoice__items_container">
          <h3>Products</h3>
          <transition-group name="addinvoice__items">
            <div
              v-for="item in invoice.invoiceItemList"
              :key="item.itemId"
              class="addinvoice__items flex a-center j-start"
            >
              <label for="addinvoice__itemName">Item Name</label>
              <select
                :id="`addinvoice__itemName${item.itemId.value}`"
                v-model="item.itemName.value"
                :class="{
                  'addinvoice__item-name_valid-value': item.itemName.valid === 1,
                  'addinvoice__item-name_invalid-value': item.itemName.valid === 0,
                }"
                @change="validateAttribute('invoiceItemList')"
              >
                <option value="Item" selected disabled>*Select item*</option>
                <option v-for="item in getItemDatabase" :key="item.id" :value="item.name">{{ item.name }}</option>
              </select>

              <label for="addinvoice__itemQuantity">Item Quantity</label>
              <input
                type="number"
                :id="`addinvoice__itemQuantity${item.itemId.value}`"
                :class="{
                  'addinvoice__item-qty_valid-value': item.itemQuantity.valid === 1,
                  'addinvoice__item-qty_invalid-value': item.itemQuantity.valid === 0,
                }"
                v-model.number="item.itemQuantity.value"
                step="1"
                min="0"
                max="20"
                @input="validateAttribute('invoiceItemList')"
              />

              <label for="addinvoice__unitPrice">Unit Price</label>
              <input
                type="number"
                :id="`addinvoice__unitPrice${item.itemId.value}`"
                disabled
                v-model.number="item.unitPrice.value"
              />

              <label for="addinvoice__itemTotal">Item Total</label>
              <input
                type="number"
                :id="`addinvoice__itemTotal${item.itemId.value}`"
                disabled
                v-model.number="item.itemTotal.value"
              />
            </div>
          </transition-group>
          <svg
            @click="addNewItem"
            class="addinvoice-newitem__svg"
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="a0">
              <g id="a3">
                <path
                  id="Vector"
                  d="M15 28C11.26 28 7.74499 26.544 5.10099 23.899C0.778991 19.578 -0.247006 13.025 2.54699 7.595C2.79999 7.104 3.40199 6.911 3.89399 7.163C4.38499 7.415 4.57899 8.018 4.32599 8.51C1.93099 13.165 2.80999 18.781 6.51499 22.485C8.78099 24.752 11.794 26 15 26C18.205 26 21.219 24.752 23.485 22.485C25.751 20.218 27 17.205 27 14C27 10.794 25.752 7.781 23.485 5.515C21.218 3.249 18.206 2 15 2C11.794 2 8.78099 3.249 6.51499 5.515C6.12399 5.906 5.49199 5.906 5.10099 5.515C4.70999 5.124 4.70999 4.492 5.10099 4.101C7.74499 1.457 11.26 0 15 0C18.74 0 22.256 1.457 24.899 4.101C27.544 6.745 29 10.26 29 14C29 17.739 27.544 21.255 24.899 23.899C22.256 26.544 18.74 28 15 28Z"
                  fill="#11EF5C"
                />
              </g>
              <g id="a2">
                <path
                  id="Vector 2"
                  d="M15 20C14.448 20 14 19.553 14 19V9C14 8.448 14.448 8 15 8C15.552 8 16 8.448 16 9V19C16 19.553 15.552 20 15 20Z"
                  fill="#11EF5C"
                />
              </g>
              <g id="a1">
                <path
                  id="Vector 3"
                  d="M20 15H10C9.448 15 9 14.552 9 14C9 13.448 9.448 13 10 13H20C20.553 13 21 13.448 21 14C21 14.552 20.553 15 20 15Z"
                  fill="#11EF5C"
                />
              </g>
            </g>
          </svg>
        </div>
        <div class="addinvoice__invoiceTotal_container flex row a-center j-end">
          <label for="addinvoice__invoiceTotal">Invoice Total</label>
          <input
            type="number"
            id="addinvoice__invoiceTotal"
            v-model.number="invoice.invoiceTotal.value"
            step="0.01"
            disabled
          />
        </div>
        <div class="addinvoice__buttons flex row a-center j-end">
          <button type="button" class="addinvoice__button_item addinvoice__button_item-cancel" @click="toggleModal">
            Cancel
          </button>
          <button
            type="button"
            class="addinvoice__button_item addinvoice__button_item-draft"
            @click="createInvoice('Draft')"
          >
            Save as draft
          </button>
          <button
            type="button"
            class="addinvoice__button_item addinvoice__button_item-create"
            @click="createInvoice('Pending')"
          >
            Create invoice
          </button>
        </div>
      </form>
    </section>
    <div v-if="getDialog" class="addinvoice__confirm_wrapper">
      <div class="addinvoice__confirm" :class="{ getDialog }">
        <h3>Do you want to abandon the form? <br />Invoice will not be saved.</h3>
        <div>
          <button type="button" class="addinvoice__button_item addinvoice__button_item-leave" @click="leaveInvoice">
            Yes
          </button>
          <button type="button" class="addinvoice__button_item addinvoice__button_item-stay" @click="toggleDialog">
            No
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';

export default {
  name: 'addinvoice__wrapper',
  data() {
    return {
      invoice: null,
      grayBackground: false,
      currentId: 85129,
    };
  },
  watch: {
    paymentTerms() {
      // if (this.invoiceDate) {
      //   const date = moment(this.invoiceDate);
      //   if (value === 'Payment30') {
      //     date.add(30, 'days');
      //     this.invoice.paymentDueDate.value = date.format('YYYY-MM-DD');
      //   } else if (value === 'Payment60') {
      //     date.add(60, 'days');
      //     this.invoice.paymentDueDate.value = date.format('YYYY-MM-DD');
      //   } else {
      //     this.invoice.paymentDueDate.value = null;
      //   }
      // }
    },
    invoiceDate() {
      // this.invoice.paymentDueDate.value = null;
    },
    invoiceItemList: {
      handler() {
        if (this.invoice) {
          for (let i = 0; i < this.invoiceItemList.length; i += 1) {
            const { itemName } = this.invoiceItemList[i];
            const db = this.getItemDatabase;
            const itemIndex = db.findIndex((p) => p.name === itemName.value);
            if (itemIndex !== -1) {
              this.invoiceItemList[i].unitPrice.value = db[itemIndex].price;
              this.invoiceItemList[i].itemTotal.value = parseFloat(
                (this.invoiceItemList[i].unitPrice.value * this.invoiceItemList[i].itemQuantity.value).toFixed(2)
              );
            }
          }
          this.calculateInvoiceTotal();
        }
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters(['getDialog', 'getEditInvoice', 'getItemDatabase', 'getUniqueId']),
    paymentTerms() {
      if (this.invoice) {
        return this.invoice.paymentTerms.value;
      }
      return null;
    },
    invoiceDate() {
      if (this.invoice) {
        return this.invoice.invoiceDate.value;
      }
      return null;
    },
    invoiceItemList() {
      if (this.invoice) {
        return this.invoice.invoiceItemList;
      }
      return null;
    },
  },
  created() {
    if (this.getEditInvoice) {
      this.invoice = {
        invoiceId: this.getEditInvoice.invoiceId,
        invoiceDate: this.getEditInvoice.invoiceDate,
        clientName: this.getEditInvoice.clientName,
        clientEmail: this.getEditInvoice.clientEmail,
        clientStreetAddress: this.getEditInvoice.clientStreetAddress,
        clientCity: this.getEditInvoice.clientCity,
        clientZipCode: this.getEditInvoice.clientZipCode,
        clientCountry: this.getEditInvoice.clientCountry,
        clientNote: this.getEditInvoice.clientNote,
        paymentTerms: this.getEditInvoice.paymentTerms,
        paymentDueDate: this.getEditInvoice.paymentDueDate,
        invoiceItemList: this.getEditInvoice.invoiceItemList,
        invoiceTotal: this.getEditInvoice.invoiceTotal,
        invoiceStatus: this.getEditInvoice.invoiceStatus,
      };
    } else {
      this.invoice = {
        invoiceId: { value: this.getUniqueId, valid: null },
        invoiceDate: { value: null, valid: null },
        clientName: { value: null, valid: null },
        clientEmail: { value: null, valid: null },
        clientStreetAddress: { value: null, valid: null },
        clientCity: { value: null, valid: null },
        clientZipCode: { value: null, valid: null },
        clientCountry: { value: 'Country', valid: null },
        clientNote: { value: null, valid: null },
        paymentTerms: { value: 'Terms', valid: null },
        paymentDueDate: { value: null, valid: null },
        invoiceItemList: [
          {
            itemId: { value: 0, valid: null },
            itemName: { value: 'Item', valid: null },
            itemQuantity: { value: 0, valid: null },
            unitPrice: { value: 0, valid: null },
            itemTotal: { value: 0, valid: null },
          },
        ],
        invoiceTotal: { value: 0, valid: null },
        invoiceStatus: { value: null, valid: null },
      };
    }
  },
  methods: {
    ...mapActions(['toggleModal', 'toggleDialog', 'addInvoice', 'unsetActiveInvoice']),

    toggleDialogByOutClick(event) {
      if (event.target === this.$refs.wrapper) {
        this.toggleDialog();
      }
    },
    calculateInvoiceTotal() {
      let sum = 0;
      for (let i = 0; i < this.invoice.invoiceItemList.length; i += 1) {
        sum += this.invoice.invoiceItemList[i].itemTotal.value;
      }
      this.invoice.invoiceTotal.value = parseFloat(sum.toFixed(2));
    },
    leaveInvoice() {
      this.toggleDialog();
      this.toggleModal();
    },
    addNewItem() {
      this.invoice.invoiceItemList.push({
        itemId: { value: this.invoice.invoiceItemList.length + 1, valid: null },
        itemName: { value: 'Item', valid: null },
        itemQuantity: { value: 0, valid: null },
        unitPrice: { value: 0, valid: null },
        itemTotal: { value: 0, valid: null },
      });
    },
    createInvoice(status) {
      if (this.validateInvoice()) {
        if (!this.getEditInvoice) {
          this.addInvoice({
            invoiceId: this.invoice.invoiceId,
            invoiceDate: this.invoice.invoiceDate,
            clientName: this.invoice.clientName,
            clientEmail: this.invoice.clientEmail,
            clientStreetAddress: this.invoice.clientStreetAddress,
            clientCity: this.invoice.clientCity,
            clientZipCode: this.invoice.clientZipCode,
            clientCountry: this.invoice.clientCountry,
            clientNote: this.invoice.clientNote,
            paymentTerms: this.invoice.paymentTerms,
            paymentDueDate: this.invoice.paymentDueDate,
            invoiceItemList: this.invoice.invoiceItemList,
            invoiceTotal: this.invoice.invoiceTotal,
            invoiceStatus: { value: status, valid: 1 },
          });
        } else this.invoice.invoiceStatus.value = status;
      }
      this.toggleModal();
      this.unsetActiveInvoice();
    },
    validateAttribute(attribute) {
      switch (attribute) {
        case 'invoiceDate': {
          if (this.invoice.invoiceDate.value) {
            const date = moment(this.invoice.invoiceDate.value);
            const day = date.date();
            const month = date.month();
            const year = date.year();
            if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 1901 && year <= 2100) {
              this.invoice.invoiceDate.valid = 1;
            } else {
              this.invoice.invoiceDate.valid = 0;
            }
          } else this.invoice.invoiceDate.valid = 0;
          break;
        }
        case 'clientEmail':
        case 'clientName':
        case 'clientStreetAddress':
        case 'clientCity':
        case 'clientZipCode': {
          if (this.invoice[attribute].value) {
            if (this.invoice[attribute].value.length > 3) {
              this.invoice[attribute].valid = 1;
            } else {
              this.invoice[attribute].valid = 0;
            }
          } else this.invoice[attribute].valid = 0;
          break;
        }
        case 'clientCountry': {
          if (this.invoice.clientCountry.value !== 'Country') {
            this.invoice.clientCountry.valid = 1;
          } else {
            this.invoice.clientCountry.valid = 0;
          }
          break;
        }
        case 'paymentTerms': {
          if (this.invoice.paymentTerms.value !== 'Terms') {
            this.invoice.paymentTerms.valid = 1;
          } else {
            this.invoice.paymentTerms.valid = 0;
          }
          break;
        }
        case 'invoiceItemList': {
          if (this.invoice.invoiceItemList.length) {
            for (let i = 0; i < this.invoice.invoiceItemList.length; i += 1) {
              if (
                this.invoice.invoiceItemList[i].itemName.value &&
                this.invoice.invoiceItemList[i].itemName.value !== 'Item'
              ) {
                this.invoice.invoiceItemList[i].itemName.valid = 1;
              } else this.invoice.invoiceItemList[i].itemName.valid = 0;
              if (
                this.invoice.invoiceItemList[i].itemQuantity.value &&
                this.invoice.invoiceItemList[i].itemQuantity.value > 0 &&
                Number.isInteger(this.invoice.invoiceItemList[i].itemQuantity.value)
              ) {
                this.invoice.invoiceItemList[i].itemQuantity.valid = 1;
              } else this.invoice.invoiceItemList[i].itemQuantity.valid = 0;
            }
          }
          break;
        }
        default: {
          break;
        }
      }
    },
    validateInvoice() {
      this.validateAttribute('invoiceDate');
      this.validateAttribute('clientEmail');
      this.validateAttribute('clientName');
      this.validateAttribute('clientStreetAddress');
      this.validateAttribute('clientCity');
      this.validateAttribute('clientZipCode');
      this.validateAttribute('clientCountry');
      this.validateAttribute('paymentTerms');
      this.validateAttribute('invoiceItemList');

      const validItems = this.invoice.invoiceItemList.every((item) => item.itemName.valid && item.itemQuantity.valid);

      return (
        this.invoice.invoiceDate.valid &&
        this.invoice.clientEmail.valid &&
        this.invoice.clientName.valid &&
        this.invoice.clientStreetAddress.valid &&
        this.invoice.clientCity.valid &&
        this.invoice.clientZipCode.valid &&
        this.invoice.clientCountry.valid &&
        this.invoice.paymentTerms.valid &&
        this.invoice.clientCountry.valid &&
        validItems
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.addinvoice__wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.addinvoice {
  position: absolute;
  width: 700px;
  height: 700px;
  top: 150px;
  left: 40px;
  background: -webkit-linear-gradient(180deg, rgb(28, 78, 128), rgb(8, 39, 67));
  background: linear-gradient(180deg, rgb(28, 78, 128), rgb(8, 39, 67));
  border: 2px solid $white;
  border-radius: 5px;
  z-index: 99;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: $dark-blue;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: $white;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid $dark-blue;
    -webkit-text-fill-color: $white;
    -webkit-box-shadow: 0 0 0px 10000px $blue inset;
  }

  form {
    height: 90%;
    width: 90%;

    h2 {
      font-size: 36px;
      color: $white;
      margin-bottom: 30px;
    }

    div {
      margin-bottom: 20px;
      label {
        color: $white;
        width: 130px;
      }

      input {
        width: 200px;
        padding: 2px 5px;
        border-radius: 5px;
        border: 1px solid $dark-blue;
        background-color: $blue;
        color: $white;
        font-weight: 300;
        padding: 3px;
        &:disabled {
          color: $white;
          background-color: $dark-blue4;
        }
      }

      select {
        width: 200px;
        padding: 2px 5px;
        border-radius: 5px;
        border: 1px solid $dark-blue;
        background-color: $blue;
        color: $white;
        font-weight: 300;
        padding: 3px;
      }

      option {
        font-weight: 300;
        padding: 3px;
      }

      textarea {
        resize: none;
        padding: 2px 5px;
        border-radius: 5px;
        border: 1px solid $dark-blue;
        background-color: $blue;
        color: $white;
        font-weight: 300;
        padding: 3px;
      }

      p {
        margin-left: 15px;
      }
      .addinvoice__valid-value {
        color: $green-validation;
      }
      .addinvoice__invalid-value {
        color: $red-validation;
      }
      .addinvoice__item-name_valid-value {
        border-bottom-color: $green-validation;
      }
      .addinvoice__item-name_invalid-value {
        border-bottom-color: $red-validation;
      }
      .addinvoice__item-qty_valid-value {
        border-bottom-color: $green-validation;
      }
      .addinvoice__item-qty_invalid-value {
        border-bottom-color: $red-validation;
      }
    }

    .addinvoice__items_container {
      width: 100%;

      h3 {
        color: $white;
        font-size: 16px;
        margin-bottom: 5px;
      }

      .addinvoice__items {
        width: 100%;
        flex-flow: row wrap;
        row-gap: 5px;
        background-color: $dark-blue;
        padding: 10px 10px;
        border-radius: 15px;
        border-right: 10px solid $dark-blue;
        margin-bottom: 10px;

        label {
          width: fit-content;
          font-size: 14px;
          margin-right: 10px;
        }
        label:first-of-type {
          margin-right: 23px;
        }

        input {
          width: 70px;
          margin-right: 50px;
        }

        select {
          width: 445px;
        }
      }

      .addinvoice-newitem__svg {
        path {
          fill: $orange;
          transition: all 0.2s ease-out;
        }

        &:hover {
          cursor: pointer;
          path {
            fill: $orange-hover;
          }
        }
      }
    }

    .addinvoice__invoiceTotal_container {
      width: 100%;
    }

    .addinvoice__buttons {
      width: 100%;
      min-height: 100px;

      .addinvoice__button_item {
        border: none;
        border-radius: 10px;
        padding: 10px 20px;
        font-size: 16px;
        color: $white;
        transition: background-color 0.2s ease-out;
        &:hover {
          cursor: pointer;
        }
        white-space: nowrap;
      }

      .addinvoice__button_item-cancel {
        background-color: $red;
        margin-right: 240px;
        &:hover {
          background-color: $red-hover;
        }
      }
      .addinvoice__button_item-draft {
        background-color: $dark-gray;
        margin-right: 10px;
        &:hover {
          background-color: $dark-gray-hover;
        }
      }
      .addinvoice__button_item-create {
        background-color: $blue;
        &:hover {
          background-color: $blue-hover;
        }
      }
    }
  }
}

.addinvoice__confirm_wrapper {
  z-index: 9999;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  .addinvoice__confirm {
    z-index: 9999;
    position: absolute;
    width: 600px;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: -webkit-linear-gradient(180deg, rgb(32, 88, 145), rgb(8, 39, 67));
    background: linear-gradient(180deg, rgb(32, 88, 145), rgb(8, 39, 67));
    border: 2px solid $white;
    border-radius: 5px;
  }

  h3 {
    font-size: 24px;
    color: $white;
    text-align: center;
  }

  div {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-around;
    width: 80%;

    .addinvoice__button_item {
      padding: 5px 20px;
      margin-bottom: 20px;
      border: none;
      border-radius: 10px;
      padding: 10px 100px;
      font-size: 16px;
      color: $white;
      transition: background-color 0.2s ease-out;
      &:hover {
        cursor: pointer;
      }
    }

    .addinvoice__button_item-leave {
      background-color: $red;
      &:hover {
        background-color: $red-hover;
      }
    }
    .addinvoice__button_item-stay {
      background-color: $dark-gray;
      &:hover {
        background-color: $dark-gray-hover;
      }
    }
  }
}

.toggleDialog {
  background: $black-transparent;
}

.addinvoice__items-enter-active,
.addinvoice__items-leave-active {
  transition: all 1s ease;
}
.addinvoice__items-enter-from,
.addinvoice__items-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
