import { createStore } from 'vuex';

export default createStore({
  state: {
    INVOICES: [
      {
        invoiceId: 4321,
        date: '08.03.2021',
        country: 'Poland',
        zipCode: '52-421',
        total: 523,
        status: 'Pending',
      },
      {
        invoiceId: 4322,
        date: '05.03.2021',
        country: 'France',
        zipCode: '72-421',
        total: 12,
        status: 'Paid',
      },
      {
        invoiceId: 4323,
        date: '15.03.2021',
        country: 'Spain',
        zipCode: '12-421',
        total: 1000,
        status: 'Pending',
      },
      {
        invoiceId: 4324,
        date: '22.03.2021',
        country: 'Poland',
        zipCode: '32-421',
        total: 60000,
        status: 'Draft',
      },
    ],
    FILTER_COUNTRY: 'Country',
    FILTER_STATUS: 'Status',
    SORTING_ATTRIBUTE: 'date',
    SORTING_ORDER: 'asc',
    MODAL_ON: false,
  },
  getters: {
    INVOICES_FILTERED(state, getters) {
      const invoicesSorted = getters.INVOICES_SORTED;
      if (state.FILTER_COUNTRY !== 'Country' && state.FILTER_STATUS !== 'Status') {
        return invoicesSorted.filter(
          (invoice) =>
            invoice.country === state.FILTER_COUNTRY && invoice.status === state.FILTER_STATUS
        );
      }
      if (state.FILTER_COUNTRY !== 'Country') {
        return invoicesSorted.filter((invoice) => invoice.country === state.FILTER_COUNTRY);
      }
      if (state.FILTER_STATUS !== 'Status') {
        return invoicesSorted.filter((invoice) => invoice.status === state.FILTER_STATUS);
      }
      return invoicesSorted;
    },
    INVOICES_SORTED(state) {
      if (state.SORTING_ORDER === 'asc') {
        if (state.SORTING_ATTRIBUTE === 'invoiceId') {
          return state.INVOICES.sort((a, b) => {
            if (a.invoiceId < b.invoiceId) return -1;
            if (a.invoiceId > b.invoiceId) return 1;
            return 0;
          });
        }
        if (state.SORTING_ATTRIBUTE === 'date') {
          // ZROBIC POPRAWNIE
          return state.INVOICES.sort((a, b) => {
            if (a.date < b.date) return -1;
            if (a.date > b.date) return 1;
            return 0;
          });
        }
        if (state.SORTING_ATTRIBUTE === 'country') {
          return state.INVOICES.sort((a, b) => {
            if (a.country < b.country) return -1;
            if (a.country > b.country) return 1;
            return 0;
          });
        }
        if (state.SORTING_ATTRIBUTE === 'zipCode') {
          return state.INVOICES.sort((a, b) => {
            if (a.zipCode < b.zipCode) return -1;
            if (a.zipCode > b.zipCode) return 1;
            return 0;
          });
        }
        if (state.SORTING_ATTRIBUTE === 'total') {
          return state.INVOICES.sort((a, b) => a.total - b.total);
        }
        if (state.SORTING_ATTRIBUTE === 'status') {
          return state.INVOICES.sort((a, b) => {
            if (a.status < b.status) return -1;
            if (a.status > b.status) return 1;
            return 0;
          });
        }
        return state.INVOICES;
      }

      if (state.SORTING_ATTRIBUTE === 'invoiceId') {
        return state.INVOICES.sort((a, b) => {
          if (a.invoiceId < b.invoiceId) return 1;
          if (a.invoiceId > b.invoiceId) return -1;
          return 0;
        });
      }
      if (state.SORTING_ATTRIBUTE === 'date') {
        // ZROBIC POPRAWNIE
        return state.INVOICES.sort((a, b) => {
          if (a.date < b.date) return 1;
          if (a.date > b.date) return -1;
          return 0;
        });
      }
      if (state.SORTING_ATTRIBUTE === 'country') {
        return state.INVOICES.sort((a, b) => {
          if (a.country < b.country) return 1;
          if (a.country > b.country) return -1;
          return 0;
        });
      }
      if (state.SORTING_ATTRIBUTE === 'zipCode') {
        return state.INVOICES.sort((a, b) => {
          if (a.zipCode < b.zipCode) return 1;
          if (a.zipCode > b.zipCode) return -1;
          return 0;
        });
      }
      if (state.SORTING_ATTRIBUTE === 'total') {
        return state.INVOICES.sort((a, b) => b.total - a.total);
      }
      if (state.SORTING_ATTRIBUTE === 'status') {
        return state.INVOICES.sort((a, b) => {
          if (a.status < b.status) return 1;
          if (a.status > b.status) return -1;
          return 0;
        });
      }
      return state.INVOICES;
    },
    MODAL(state) {
      return state.MODAL_ON;
    },
  },
  mutations: {
    SET_FILTER_COUNTRY(state, payload) {
      state.FILTER_COUNTRY = payload;
    },
    SET_FILTER_STATUS(state, payload) {
      state.FILTER_STATUS = payload;
    },
    SET_SORTING_ATTRIBUTE(state, payload) {
      state.SORTING_ATTRIBUTE = payload;
    },
    SET_SORTING_ORDER(state, payload) {
      state.SORTING_ORDER = payload;
    },
    TOGGLE_MODAL_ON(state) {
      state.MODAL_ON = true;
    },
    TOGGLE_MODAL_OFF(state) {
      state.MODAL_ON = false;
    },
    ADD_INVOICE(state, payload) {
      state.INVOICES.push(payload);
    },
  },
  actions: {
    SET_FILTER_COUNTRY(context, payload) {
      context.commit('SET_FILTER_COUNTRY', payload);
    },
    SET_FILTER_STATUS(context, payload) {
      context.commit('SET_FILTER_STATUS', payload);
    },
    SET_SORTING_ATTRIBUTE(context, payload) {
      context.commit('SET_SORTING_ATTRIBUTE', payload);
    },
    SET_SORTING_ORDER(context, payload) {
      context.commit('SET_SORTING_ORDER', payload);
    },
    TOGGLE_MODAL_ON(context) {
      context.commit('TOGGLE_MODAL_ON');
    },
    TOGGLE_MODAL_OFF(context) {
      context.commit('TOGGLE_MODAL_OFF');
    },
    ADD_INVOICE(context, payload) {
      context.commit('ADD_INVOICE', payload);
    },
  },
  modules: {},
});
