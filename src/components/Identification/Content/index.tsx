import React from "react";
import Login from "./Login";
import Register from "./Register";
import * as S from "./styled";

export default function Content(props: any) {
  const { onLogin } = props;
  return (
    <S.Contents>
      <S.Sized>
        <S.DivContents>
          <Login onLogin={onLogin} />
          <S.Division />
          <Register />
        </S.DivContents>
      </S.Sized>
    </S.Contents>
  );
}
