import React from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

import { RoutePath } from "../../const.js";
import { postOrder } from "../../store/api-action.js";
import { adaptOrderToPost } from "../../utils.js";


const ModalCheckout = ({ isModalOpen, clickHandler }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const model = useSelector((state) => state.model);
    const city = useSelector((state) => state.city);
    const point = useSelector((state) => state.pickpoint);
    const color = useSelector((state) => state.color);
    const dateStart = useSelector((state) => state.dateStart);
    const dateFrom = useSelector((state) => state.dateFinish);
    const rate = useSelector((state) => state.rate);
    const price = useSelector((state) => state.price);
    const additionsList = useSelector((state) => state.additions);

    const getPostData = () => {
        return adaptOrderToPost(
            city.id,
            point.id,
            model.id,
            color,
            dateFrom.value,
            dateStart.value,
            rate.id,
            price,
            additionsList
        )
    }

    const confirmClickHandler = (evt) => {
        evt.preventDefault()
        dispatch(postOrder(getPostData()))
            .then((id) => {
                history.push(`${RoutePath.CHECKOUT}${id}`)
            })
    }

    return (
        <div className={`modal ${isModalOpen ? `` : `modal--closed`}`}>
            <div className="modal__wrapper">
                <h3 className="modal__title">Подтвердить заказ</h3>
                <button className="button button--modal-link" onClick={confirmClickHandler}>Подтвердить</button>
                <button className="button button--modal-close button--checkout-color" type="button" onClick={clickHandler}>Вернуться</button>
            </div>
        </div>
    )
}

ModalCheckout.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default ModalCheckout;