import React, { useState } from "react";
import { IconEnter } from "../../../../assets/images/IconEnter";
import { useAuth } from "../../../../hooks/useAuth";
import * as S from "./styled";
import * as SS from "./../styled";
import { useRouter } from "next/router";
import { Error } from "../../../../assets/images/Error";

export default function Login(props: any) {
  const [errorP, setErrorP] = useState("");
  const router = useRouter();
  const [{ email, password }, setCredentials] = useState({
    email: "",
    password: "",
  });

  const auth = useAuth();

  const onLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await auth.authenticate(email, password);
      router.push("/");
    } catch (error) {
      console.log(error);
      setErrorP("Senha ou usuário invalido.");
    }
  };

  return (
    <S.Login>
      <S.FormLogin onSubmit={onLogin}>
        <S.FormH2>JÁ TENHO CADASTRO</S.FormH2>
        <S.DivLogin>
          <S.DivCamp>
            <S.DivInp>
              <S.DivForm>
                <S.Input
                  theme={errorP ? "border-color: red;" : ""}
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
                <S.Label
                  theme={errorP ? "color: red;" : ""}
                  htmlFor="inputUserEmail"
                >
                  E-mail
                </S.Label>
              </S.DivForm>
            </S.DivInp>
          </S.DivCamp>
          <S.DivCamp>
            <S.DivInp>
              <S.DivForm>
                <S.Input
                  theme={errorP ? "border-color: red;" : ""}
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
                <S.Label
                  theme={errorP ? "color: red;" : ""}
                  htmlFor="inputUserPassword"
                >
                  Senha
                </S.Label>
              </S.DivForm>
            </S.DivInp>
          </S.DivCamp>
          {errorP ? (
            <SS.Error>
              <Error />
              {errorP}
            </SS.Error>
          ) : (
            ""
          )}
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
