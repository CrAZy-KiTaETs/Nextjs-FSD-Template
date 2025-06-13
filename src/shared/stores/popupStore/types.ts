type PopupName = '' | 'header';

export type PopupState = {
  name: PopupName;
  open: (name: PopupName) => void;
  close: () => void;
  toggle: (name: PopupName) => void;
};
