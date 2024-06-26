import { createSlice } from '@reduxjs/toolkit';

const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    ConfirmDialogIsOpen: false,
    FormDialogIsOpen: false,
  },
  reducers: {
    openConfirmDialog(state) {
      state.ConfirmDialogIsOpen = true;
    },
    closeConfirmDialog(state) {
      state.ConfirmDialogIsOpen = false;
    },
    openFormDialogIsOpen(state) {
      state.FormDialogIsOpen = true;
    },
    closeFormDialogIsOpen(state) {
      state.FormDialogIsOpen = false;
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
