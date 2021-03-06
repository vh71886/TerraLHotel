import * as ReservationUtil from "../util/reservation_api_util"

export const RECEIVE_ALL_RESERVATIONS = "RECEIVE_ALL_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";

export const receiveAllReservations = reservations => {
    return {
        type: RECEIVE_ALL_RESERVATIONS,
        reservations
    }
}

export const receiveReservation = reservation => {
    return {
        type: RECEIVE_RESERVATION,
        reservation
    }
}

export const removeReservation = reservationId => {
    return {
        type: REMOVE_RESERVATION,
        reservationId
    }
}

export const receiveReservationErrors = errors => {
    return {
        type: RECEIVE_RESERVATION_ERRORS,
        errors
    }
}

export const requestAllReservations = () => dispatch => {
    return ReservationUtil.fetchAllReservations()
        .then( reservations => dispatch(receiveAllReservations(reservations)), 
            errors => dispatch(receiveReservationErrors(errors)))
}

export const requestReservation = reservation => dispatch => {
    return ReservationUtil.fetchReservation(reservation.id)
        .then( reservation => dispatch(receiveReservation(reservation)),
            errors => dispatch(receiveReservationErrors(errors)))
}

export const pullReservation = reservationId => dispatch => {
    return ReservationUtil.fetchReservation(reservationId)
        .then( reservation => dispatch(receiveReservation(reservation)),
            errors => dispatch(receiveReservationErrors(errors)))
}

export const makeReservation = reservation => dispatch => {
    return ReservationUtil.createReservation(reservation)
        .then( reservation => dispatch(receiveReservation(reservation)), 
            errors => dispatch(receiveReservationErrors(errors)))
}

export const editReservation = reservation => dispatch => { 
    return ReservationUtil.updateReservation(reservation)
        .then( reservation => dispatch(receiveReservation(reservation)),
            errors => dispatch(receiveReservationErrors(errors)))
}

export const cancelReservation = reservationId => dispatch => { 
    return ReservationUtil.deleteReservation(reservationId)
        .then( reservationId => dispatch(removeReservation(reservationId)),
            errors => dispatch(receiveReservationErrors(errors)))
}