import React from "react";
import { ArrowDown } from "../../../assets/images/ArrowDown";
import * as S from "./styled";

export default function ExpansiveMenu() {
  return (
    <S.ExpansiveMenu>
      <S.Menus>
        <S.Items>
          <S.Departaments>
            <S.DepartamentsBtn>
              <S.DepartamentsSpn>TODOS OS DEPARTAMENTOS</S.DepartamentsSpn>
              <ArrowDown />
            </S.DepartamentsBtn>
          </S.Departaments>
          <S.Item>SEJA PRIME</S.Item>
          <S.Item> CENTRAL DE ATENDIMENTO</S.Item>
        </S.Items>
      </S.Menus>
    </S.ExpansiveMenu>
  );
}
