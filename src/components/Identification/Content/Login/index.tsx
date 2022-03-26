import React, { useState } from "react";
import { IconEnter } from "../../../../assets/images/IconEnter";
import { onLogin } from "../../../../auth/auth.api";
import * as S from "./styled";

export default function Login() {
  const [{ email, password }, setCredentials] = useState({
    email: "",
    password: "",
  });

  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await onLogin({
      email,
      password,
    });
  };

  return (
    <S.Login>
      <S.FormLogin onSubmit={login}>
        <S.FormH2>JÁ TENHO CADASTRO</S.FormH2>
        <S.DivLogin>
          <S.DivCamp>
            <S.DivInp>
              <S.DivForm>
                <S.Input
                  type="text"
                  id="inputUserEmail"
                  value={email}
                  onChange={(event) =>
                    setCredentials({
                      email: event.target.value,
                      password,
                    })
                  }
                ></S.Input>
                <S.Label htmlFor="inputUserEmail">E-mail</S.Label>
              </S.DivForm>
            </S.DivInp>
          </S.DivCamp>
          <S.DivCamp>
            <S.DivInp>
              <S.DivForm>
                <S.Input
                  type="password"
                  id="inputUserPassword"
                  value={password}
                  onChange={(event) =>
                    setCredentials({
                      email,
                      password: event.target.value,
                    })
                  }
                ></S.Input>
                <S.Label htmlFor="inputUserPassword">Senha</S.Label>
              </S.DivForm>
            </S.DivInp>
          </S.DivCamp>
        </S.DivLogin>

        <S.DivButton>
          <S.Button type="submit">
            <S.DivSvg>
              <IconEnter />
            </S.DivSvg>
            ENTRAR
          </S.Button>
        </S.DivButton>
      </S.FormLogin>
    </S.Login>
  );
}
