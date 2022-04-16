import React from "react";
import Login from "./Login";
import Register from "./Register";
import * as S from "./styled";

export default function Content() {
  return (
    <S.Contents>
      <S.Sized>
        <S.DivContents>
          <Login />
          <S.Division />
          <Register />
        </S.DivContents>
      </S.Sized>
    </S.Contents>
  );
}
