import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO",
  "DOING",
  "DONE",
}

export interface IToDo {
  id: number;
  text: string;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const key = "toDos";
      const savedValue = localStorage.getItem(key);
      // init
      if (savedValue) {
        setSelf(JSON.parse(savedValue));
      } else {
        localStorage.setItem(key, JSON.stringify([]));
      }
      // update
      onSet((newValue, oldValue, isReset) => {
        if (isReset) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, JSON.stringify(newValue));
        }
      });
    },
  ],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const category = get(categoryState);
    const toDos = get(toDoState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
