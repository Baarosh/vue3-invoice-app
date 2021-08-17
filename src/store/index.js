import { createStore } from 'vuex';
import moment from 'moment';
import itemDatabase from './dict';
import router from '../router/index';

export default createStore({
  state: {
    invoices: [
      {
        invoiceId: { value: 84332, valid: 1 },
        invoiceDate: { value: '2021-05-01', valid: 1 },
        clientName: { value: 'Norbert', valid: 1 },
        clientEmail: { value: 'norbert@gmail.com', valid: 1 },
        clientStreetAddress: { value: 'Jeczmienna', valid: 1 },
        clientCity: { value: 'Wroclaw', valid: 1 },
        clientZipCode: { value: '53-507', valid: 1 },
        clientCountry: { value: 'Poland', valid: 1 },
        clientNote: { value: null, valid: 1 },
        paymentTerms: { value: 'Payment30', valid: 1 },
        paymentDueDate: { value: '2021-06-01', valid: 1 },
        invoiceItemList: [
          {
            itemId: { value: 1, valid: 1 },
            itemName: { value: 'Black Paint', valid: 1 },
            itemQuantity: { value: 2, valid: 1 },
            unitPrice: { value: 16.99, valid: 1 },
            itemTotal: { value: 33.98, valid: 1 },
          },
        ],
        invoiceTotal: { value: 33.98, valid: 1 },
        invoiceStatus: { value: 'Paid', valid: 1 },
      },
      {
        invoiceId: { value: 84333, valid: 1 },
        invoiceDate: { value: '2021-07-11', valid: 1 },
        clientName: { value: 'Szymon', valid: 1 },
        clientEmail: { value: 'szymon@gmail.com', valid: 1 },
        clientStreetAddress: { value: 'Jeczmienna', valid: 1 },
        clientCity: { value: 'Ozimek', valid: 1 },
        clientZipCode: { value: '50-529', valid: 1 },
        clientCountry: { value: 'Poland', valid: 1 },
        clientNote: { value: null, valid: 1 },
        paymentTerms: { value: 'Payment60', valid: 1 },
        paymentDueDate: { value: '2021-09-13', valid: 1 },
        invoiceItemList: [
          {
            itemId: { value: 1, valid: 1 },
            itemName: { value: 'Black Paint', valid: 1 },
            itemQuantity: { value: 2, valid: 1 },
            unitPrice: { value: 14.99, valid: 1 },
            itemTotal: { value: 43.98, valid: 1 },
          },
          {
            itemId: { value: 1, valid: 1 },
            itemName: { value: 'White Paint', valid: 1 },
            itemQuantity: { value: 1, valid: 1 },
            unitPrice: { value: 56.99, valid: 1 },
            itemTotal: { value: 23.98, valid: 1 },
          },
          {
            itemId: { value: 1, valid: 1 },
            itemName: { value: 'White Paint', valid: 1 },
            itemQuantity: { value: 3, valid: 1 },
            unitPrice: { value: 36.99, valid: 1 },
            itemTotal: { value: 43.98, valid: 1 },
          },
        ],
        invoiceTotal: { value: 33.98, valid: 1 },
        invoiceStatus: { value: 'Paid', valid: 1 },
      },
    ],
    filterCountry: 'Country',
    filterStatus: 'Status',
    sortingAttribute: 'date',
    sortingOrder: 'asc',
    modal: false,
    dialog: false,
    activeInvoice: null,
    editInvoice: null,
    itemDatabase: itemDatabase(),
    uniqueId: 82519,
  },
  getters: {
    getInvoicesFiltered(state, getters) {
      const invoicesSorted = getters.getInvoicesSorted;
      if (state.filterCountry !== 'Country' && state.filterStatus !== 'Status') {
        return invoicesSorted.filter(
          (invoice) =>
            invoice.clientCountry.value === state.filterCountry && invoice.invoiceStatus.value === state.filterStatus
        );
      }
      if (state.filterCountry !== 'Country') {
        return invoicesSorted.filter((invoice) => invoice.clientCountry.value === state.filterCountry);
      }
      if (state.filterStatus !== 'Status') {
        return invoicesSorted.filter((invoice) => invoice.invoiceStatus.value === state.filterStatus);
      }
      return invoicesSorted;
    },
    getInvoicesSorted(state) {
      if (state.sortingOrder === 'asc') {
        if (state.sortingAttribute === 'invoiceId') {
          return state.invoices.sort((a, b) => {
            if (a.invoiceId.value < b.invoiceId.value) return -1;
            if (a.invoiceId.value > b.invoiceId.value) return 1;
            return 0;
          });
        }
        if (state.sortingAttribute === 'date') {
          return state.invoices.sort((a, b) => {
            if (moment(a.invoiceDate.value) < moment(b.invoiceDate.value)) return -1;
            if (moment(a.invoiceDate.value) > moment(b.invoiceDate.value)) return 1;
            return 0;
          });
        }
        if (state.sortingAttribute === 'country') {
          return state.invoices.sort((a, b) => {
            if (a.clientCountry.value < b.clientCountry.value) return -1;
            if (a.clientCountry.value > b.clientCountry.value) return 1;
            return 0;
          });
        }
        if (state.sortingAttribute === 'zipCode') {
          return state.invoices.sort((a, b) => {
            if (a.clientZipCode.value < b.clientZipCode.value) return -1;
            if (a.clientZipCode.value > b.clientZipCode.value) return 1;
            return 0;
          });
        }
        if (state.sortingAttribute === 'total') {
          return state.invoices.sort((a, b) => a.invoiceTotal.value - b.invoiceTotal.value);
        }
        if (state.sortingAttribute === 'status') {
          return state.invoices.sort((a, b) => {
            if (a.invoiceStatus.value < b.invoiceStatus.value) return -1;
            if (a.invoiceStatus.value > b.invoiceStatus.value) return 1;
            return 0;
          });
        }
        return state.invoices;
      }

      if (state.sortingAttribute === 'invoiceId') {
        return state.invoices.sort((a, b) => {
          if (a.invoiceId.value < b.invoiceId.value) return 1;
          if (a.invoiceId.value > b.invoiceId.value) return -1;
          return 0;
        });
      }
      if (state.sortingAttribute === 'date') {
        return state.invoices.sort((a, b) => {
          if (moment(a.invoiceDate.value) < moment(b.invoiceDate.value)) return 1;
          if (moment(a.invoiceDate.value) > moment(b.invoiceDate.value)) return -1;
          return 0;
        });
      }
      if (state.sortingAttribute === 'country') {
        return state.invoices.sort((a, b) => {
          if (a.clientCountry.value < b.clientCountry.value) return 1;
          if (a.clientCountry.value > b.clientCountry.value) return -1;
          return 0;
        });
      }
      if (state.sortingAttribute === 'zipCode') {
        return state.invoices.sort((a, b) => {
          if (a.clientZipCode.value < b.clientZipCode.value) return 1;
          if (a.clientZipCode.value > b.clientZipCode.value) return -1;
          return 0;
        });
      }
      if (state.sortingAttribute === 'total') {
        return state.invoices.sort((a, b) => b.invoiceTotal.value - a.invoiceTotal.value);
      }
      if (state.sortingAttribute === 'status') {
        return state.invoices.sort((a, b) => {
          if (a.invoiceStatus.value < b.invoiceStatus.value) return 1;
          if (a.invoiceStatus.value > b.invoiceStatus.value) return -1;
          return 0;
        });
      }
      return state.invoices;
    },
    getDialog(state) {
      return state.dialog;
    },
    getModal(state) {
      return state.modal;
    },
    getActiveInvoice(state) {
      return state.activeInvoice;
    },
    getEditInvoice(state) {
      return state.editInvoice;
    },
    getItemDatabase(state) {
      return state.itemDatabase;
    },
    getUniqueId(state) {
      state.uniqueId += 1;
      return state.uniqueId;
    },
  },
  mutations: {
    setFilterCountry(state, payload) {
      state.filterCountry = payload;
    },
    setFilterStatus(state, payload) {
      state.filterStatus = payload;
    },
    setSorting(state, payload) {
      state.sortingAttribute = payload.sortingAttribute;
      state.sortingOrder = payload.sortingOrder;
    },
    toggleDialog(state) {
      state.dialog = !state.dialog;
    },
    toggleModal(state) {
      state.modal = !state.modal;
    },
    addInvoice(state, payload) {
      state.invoices.push(payload);
      state.editInvoice = null;
      state.activeInvoice = null;
    },
    setActiveInvoice(state, payload) {
      const foundInvoice = state.invoices.filter((invoice) => invoice.invoiceId.value === Number(payload));
      if (foundInvoice.length > 0) {
        // eslint-disable-next-line prefer-destructuring
        state.activeInvoice = foundInvoice[0];
      }
    },
    setInvoiceStatus(state, payload) {
      const activeInvoice = state.invoices.findIndex(
        (inv) => inv.invoiceId.value === state.activeInvoice.invoiceId.value
      );

      if (activeInvoice !== -1) {
        state.invoices[activeInvoice].invoiceStatus.value = payload;
        state.activeInvoice = state.invoices[activeInvoice];
      }
    },
    modifyInvoice(state) {
      state.editInvoice = state.activeInvoice;
      router.push({ name: 'Home' });
      state.modal = true;
    },
    unsetActiveInvoice(state) {
      state.editInvoice = null;
      state.activeInvoice = null;
    },
  },
  actions: {
    setFilterCountry(context, payload) {
      context.commit('setFilterCountry', payload);
    },
    setFilterStatus(context, payload) {
      context.commit('setFilterStatus', payload);
    },
    setSorting(context, payload) {
      context.commit('setSorting', payload);
    },
    toggleDialog(context) {
      context.commit('toggleDialog');
    },
    toggleModal(context) {
      setTimeout(() => {
        context.commit('toggleModal');
      }, 100);
    },
    addInvoice(context, payload) {
      setTimeout(() => {
        context.commit('addInvoice', payload);
      }, 400);
    },
    setActiveInvoice(context, payload) {
      context.commit('setActiveInvoice', payload);
    },
    setInvoiceStatus(context, payload) {
      context.commit('setInvoiceStatus', payload);
    },
    modifyInvoice(context) {
      context.commit('modifyInvoice');
    },
    unsetActiveInvoice(context) {
      context.commit('unsetActiveInvoice');
    },
  },
});
