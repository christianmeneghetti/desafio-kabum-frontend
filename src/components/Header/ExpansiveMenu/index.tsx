import React, { useState } from "react";
import { ArrowDown } from "../../../assets/images/ArrowDown";
import Departaments from "../Departaments";
import * as S from "./styled";

export default function ExpansiveMenu(props: any) {
  const { departaments } = props;
  const [dropdown, setDropdown] = useState(false);

  return (
    <S.ExpansiveMenu>
      <S.Menus>
        <S.Items>
          <S.Departaments
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <S.DepartamentsBtn>
              <S.DepartamentsSpn>TODOS OS DEPARTAMENTOS</S.DepartamentsSpn>
              <ArrowDown />
            </S.DepartamentsBtn>
            {dropdown && <Departaments departaments={departaments} />}
          </S.Departaments>
          <S.Item>SEJA PRIME</S.Item>
          <S.Item> CENTRAL DE ATENDIMENTO</S.Item>
        </S.Items>
      </S.Menus>
    </S.ExpansiveMenu>
  );
}
