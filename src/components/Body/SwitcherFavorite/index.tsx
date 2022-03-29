/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { IconFavoriteOffer } from "../../../assets/images/IconFavoriteOffer";
import { IconFavoriteOfferFilled } from "../../../assets/images/IconFavoriteOfferFIlled";
import * as S from "./styled";

const unfilled = <IconFavoriteOffer />;
const filled = <IconFavoriteOfferFilled />;

export default ({ favorite }: any) => (favorite ? filled : unfilled);
