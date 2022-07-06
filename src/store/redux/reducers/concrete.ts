import {v1} from "uuid";

export type ConcreteInitialStateType = typeof initialState
const initialState = [
    {
        stamp: "M100",
        class: "B7,5",
        name: "Бетон M100  B7,5 F100 W4 (Гравий)",
        price: "3 710 ₽",
        quantity: 2,
        id: v1(),
    }, {
        stamp: "M100",
        class: "B7,5",
        name: "Бетон M100  B7,5 F100 W4 (Гравий)",
        price: "3 910 ₽",
        quantity: 10,
        id: v1(),
    }, {
        stamp: "M100",
        class: "B7,5",
        name: "Бетон M100  B7,5 F100 W4 (Гравий)",
        price: "3 310 ₽",
        quantity: 0,
        id: v1(),
    }, {
        stamp: "M100",
        class: "B7,5",
        name: "Бетон M100  B7,5 F100 W4 (Гравий)",
        price: "3 310 ₽",
        quantity: 0,
        id: v1(),
    }, {
        stamp: "M100",
        class: "B7,5",
        name: "Бетон M100  B7,5 F100 W4 (Гравий)",
        price: "3 310 ₽",
        quantity: 0,
        id: v1(),
    }, {
        stamp: "M100",
        class: "B7,5",
        name: "Бетон M100  B7,5 F100 W4 (Гравий)",
        price: "3 310 ₽",
        quantity: 0,
        id: v1(),
    }, {
        stamp: "M100",
        class: "B7,5",
        name: "Бетон M100  B7,5 F100 W4 (Гравий)",
        price: "3 310 ₽",
        quantity: 0,
        id: v1(),
    }, {
        stamp: "M100",
        class: "B7,5",
        name: "Бетон M100  B7,5 F100 W4 (Гравий)",
        price: "3 310 ₽",
        quantity: 0,
        id: v1(),
    }, {
        stamp: "M100",
        class: "B7,5",
        name: "Бетон M100  B7,5 F100 W4 (Гравий)",
        price: "3 310 ₽",
        quantity: 0,
        id: v1(),
    }, {
        stamp: "M100",
        class: "B7,5",
        name: "Бетон M100  B7,5 F100 W4 (Гравий)",
        price: "3 310 ₽",
        quantity: 0,
        id: v1(),
    }, {
        stamp: "M100",
        class: "B7,5",
        name: "Бетон M100  B7,5 F100 W4 (Гравий)",
        price: "3 310 ₽",
        quantity: 0,
        id: v1(),
    }, {
        stamp: "M100",
        class: "B7,5",
        name: "Бетон M100  B7,5 F100 W4 (Гравий)",
        price: "3 310 ₽",
        quantity: 0,
        id: v1(),
    }, {
        stamp: "M100",
        class: "B7,5",
        name: "Бетон M100  B7,5 F100 W4 (Гравий)",
        price: "3 310 ₽",
        quantity: 0,
        id: v1(),
    }, {
        stamp: "M100",
        class: "B7,5",
        name: "Бетон M100  B7,5 F100 W4 (Гравий)",
        price: "3 310 ₽",
        quantity: 0,
        id: v1(),
    }, {
        stamp: "M100",
        class: "B7,5",
        name: "Бетон M100  B7,5 F100 W4 (Гравий)",
        price: "3 310 ₽",
        quantity: 0,
        id: v1(),
    }, {
        stamp: "M100",
        class: "B7,5",
        name: "Бетон M100  B7,5 F100 W4 (Гравий)",
        price: "3 310 ₽",
        quantity: 0,
        id: v1(),
    },

]
type ActionType = ChangeValueQuantityType
export const concreteReducer = (state: ConcreteInitialStateType = initialState, action: ActionType): ConcreteInitialStateType => {
    switch (action.type) {
        case "CHANGE_VALUE_QUANTITY":
            return state.map(el => el.id === action.payload.id ? {...el, quantity: action.payload.num} : el)
        default:
            return state
    }
}
type ChangeValueQuantityType = ReturnType<typeof ChangeValueQuantity>
export const ChangeValueQuantity = (num: number, id: string) => {
    return {
        type: "CHANGE_VALUE_QUANTITY",
        payload: {
            num,
            id
        }
    } as const

}