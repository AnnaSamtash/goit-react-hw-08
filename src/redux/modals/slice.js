import { createSlice } from '@reduxjs/toolkit';

const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    confirmDialogIsOpen: false,
    formDialogIsOpen: false,
    contact: { id: '', name: '', number: '' },
  },
  reducers: {
    openConfirmDialog(state, action) {
      state.confirmDialogIsOpen = true;
      state.contact = action.payload;
    },
    closeConfirmDialog(state) {
      state.confirmDialogIsOpen = false;
      state.contact = { id: '', name: '', number: '' };
    },
    openFormDialogIsOpen(state, action) {
      state.formDialogIsOpen = true;
      state.contact = action.payload;
    },
    closeFormDialogIsOpen(state) {
      state.formDialogIsOpen = false;
      state.contact = { id: '', name: '', number: '' };
    },
  },
});

export const {
  openConfirmDialog,
  closeConfirmDialog,
  openFormDialogIsOpen,
  closeFormDialogIsOpen,
} = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
