import { EnumActionType } from '../enumActionType/enumActionType';

export const addCategories = (name: string) =>
  ({
    type: EnumActionType.addCategories,
    payload: { name },
  } as const);
