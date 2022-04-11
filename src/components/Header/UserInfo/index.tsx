import { useRouter } from "next/router";
import React from "react";
import { IconLogged } from "../../../assets/images/IconLogged";
import { IconUser } from "../../../assets/images/IconUser";
import { useAuth } from "../../../hooks/useAuth";
import * as S from "./styled";

export default function UserInfo() {
  const auth = useAuth();
  const router = useRouter();

  const onLogout = () => {
    auth.logout();
    router.reload();
  };

  return (
    <S.UserInfo>
      {!auth.email ? (
        <>
          <IconUser />
          <S.User>
            <S.Span>
              Faça
              <S.Login href="/LoginPage"> Login </S.Login>
              ou
              <br /> crie seu
              <S.Register href="/LoginPage"> Cadastro </S.Register>
            </S.Span>
          </S.User>
        </>
      ) : (
        <>
          <IconLogged />
          <S.User>
            <S.Welcome>Olá, Luis Henrique</S.Welcome>
            <S.AccountOut>
              <S.Account href="#">MINHA CONTA</S.Account>
              <S.SpanPipe> | </S.SpanPipe>
              <S.Out onClick={onLogout}> SAIR</S.Out>
            </S.AccountOut>
          </S.User>
        </>
      )}
    </S.UserInfo>
  );
}
