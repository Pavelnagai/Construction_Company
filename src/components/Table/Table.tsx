import React from 'react';
import './Table.scss'
import {useAppSelector} from "../../store/redux/store";
import {ChangeValueQuantity, ConcreteInitialStateType} from "../../store/redux/reducers/concrete";
import {useDispatch} from "react-redux";

const Table = () => {
    const concrete = useAppSelector<ConcreteInitialStateType>(state => state.concreteReducer)
    const dispatch = useDispatch()
    const inc = (num: number, id: string) => {
        dispatch(ChangeValueQuantity(num, id))
    }
    return (
        <div>
            <table className="table table-bordered">
                <thead className="tableShapka">
                <tr>
                    <th style={{border: "none"}} className="d-none d-sm-block" scope="col">Марка/Класс</th>
                    <th style={{border: "none"}} scope="col">Наименование</th>
                    <th style={{border: "none"}} scope="col">Цена с НДС</th>
                    <th style={{border: "none"}} scope="col">Количество кубов</th>
                </tr>
                </thead>
                <tbody>
                {
                    concrete.map(el => <tr key={el.id}>
                        <td className="d-none d-sm-block d-sm-flex justify-content-evenly">
                            <span>{el.stamp}</span><span>{el.class}</span></td>
                        <td className="text-center">{el.name}</td>
                        <td className="text-center">{el.price}</td>
                        <td className="text-center">
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-light me-1"
                                        disabled={el.quantity === 0} onClick={() => {
                                    inc(el.quantity - 1, el.id)
                                }}>-
                                </button>
                                <div
                                    className="d-flex justify-content-center align-items-center"
                                    style={{
                                        background: "#CFCFCF",
                                        minWidth: "40px",
                                        minHeight: "40px",
                                        borderRadius: "5px"
                                    }}

                                >
                                    {el.quantity}

                                </div>
                                <button className="btn btn-light ms-1" onClick={() => {
                                    inc(el.quantity + 1, el.id)
                                }}>+
                                </button>
                            </div>

                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default Table;