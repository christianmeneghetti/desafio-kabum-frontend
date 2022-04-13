import React from "react";
import { IconRigthArrow } from "../../../assets/images/IconRigthArrow";
import * as S from "./styled";

export default function Departaments(props: any) {
  const { departaments } = props;
  return (
    <S.DropDownMenu>
      <S.InnerDropDownMenu>
        <S.OuterDepartaments>
          {departaments.departaments.map((departament: any, index: any) => {
            return (
              <S.InnerDepartaments key={index} href="#">
                <S.Departaments>
                  {departament.category}
                  <IconRigthArrow />
                </S.Departaments>
              </S.InnerDepartaments>
            );
          })}
        </S.OuterDepartaments>
      </S.InnerDropDownMenu>
    </S.DropDownMenu>
  );
}
