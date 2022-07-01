type InitialStateProductType = typeof initialState
type InitialStateType = {
    concreteClass: string,
    averageStrength: string,
    filler: string,
    frostResistance: string,
    mobility: string,
    waterResistance: string,
    density: string
}
const initialState: InitialStateType = {
    concreteClass: "B 7,5",
    averageStrength: "125",
    filler: "Гравий",
    frostResistance: "F100",
    mobility: "П1, П2, П3, П4, П5",
    waterResistance: "W4",
    density: "2265",
}

export const productsReducer = (state = initialState, action: any): InitialStateProductType => {
    switch (action.type) {
        default:
            return state
    }
}