import React from "react";
import { render } from "react-dom";

import { YMaps, Map, GeoObject } from "react-yandex-maps";

class MapBasics extends React.Component {
    constructor(props) {
        super(props)

        this.counter = 0;
        this.state = {};
        this.state.list = [];
        this.referencesList = {};
    }

    appendItem() {
        this.setState(state => {
            state.list.push(this.counter++);
            return state;
        })
        console.clear();
    }

    removeItem() {
        this.setState(state => {
            state.list.shift();
            return state;
        })
        console.clear();
    }

    listReferences() {
        console.clear();

        console.log(this.referencesList)

        Object.keys(this.referencesList).forEach(key => {
            if (this.referencesList[key]) {
                console.log(
                    key,
                    this.referencesList[key],
                    this.referencesList[key].getMap()
                )
            }
        })
    }

    render() {
        const mapState = { center: [55.72, 37.44], zoom: 10 };

        return (
            <div>
                <button onClick={() => this.appendItem()}>+</button>
                <button onClick={() => this.removeItem()}>-</button>
                <button onClick={() => this.listReferences()}>list references</button>
                <YMaps>
                    <Map state={mapState}>
                        {
                            this.state.list.map(item => <GeoObject
                                key={item}
                                geometry={{
                                    type: 'LineString',
                                    coordinates: [[55.8, 37.5], [55.7, 37.4]],
                                }}
                                properties={{
                                    hintContent: 'Я геообъект',
                                    balloonContent: 'Меня можно перетащить',
                                }}
                                options={{
                                    draggable: true,
                                    strokeColor: '#FFFF00',
                                    strokeWidth: 5,
                                }}
                                instanceRef={ref => {
                                    this.referencesList[item] = ref;
                                }}
                            />)
                        }
                    </Map>
                </YMaps>
            </div>
        );
    }
}

render(<MapBasics />, document.getElementById("root"));
