import { CanActivateChildFn } from '@angular/router';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
