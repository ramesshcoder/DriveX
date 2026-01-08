export type ToastType = 'success' | 'error' | 'info' | 'warn';
export interface ToastMessage {
  type: ToastType;
  message: string;
}
