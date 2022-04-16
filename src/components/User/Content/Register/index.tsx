import { useRouter } from "next/router";
import React, { useState } from "react";
import { IconRegister } from "../../../../assets/images/IconRegister";
import { useAuth } from "../../../../hooks/useAuth";
import * as S from "./styled";
import * as SS from "../styled";
import { Error } from "../../../../assets/images/IconError";
import { clrRed } from "../../../../UI/variables";

export default function Register() {
  const router = useRouter();
  const [errorP, setErrorP] = useState("");
  const [{ email, password, repeatPassword }, setCredentials] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const auth = useAuth();

  const onRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password == "" || repeatPassword == "" || email == "") {
      setErrorP("Preencha todos os campos!");
    } else {
      if (password == repeatPassword) {
        try {
          await auth.register(email, password);
          router.push("/");
        } catch (error) {
          setErrorP("Senhas não conferem ou usuário não passivel de criação.");
        }
      }
    }
  };

  const clr = clrRed;

  return (
    <S.Register>
      <S.FormRegister onSubmit={onRegister}>
        <S.FormH2>QUERO ME CADASTRAR</S.FormH2>
        <S.DivRegister>
          <S.DivCamp>
            <S.DivInp>
              <S.DivForm>
                <S.Input
                  theme={errorP ? "border-color: " + clr : ""}
                  type="text"
                  id="inputUserEmail"
                  value={email}
                  onChange={(event) =>
                    setCredentials({
                      email: event.target.value,
                      password,
                      repeatPassword,
                    })
                  }
                ></S.Input>
                <S.Label theme={errorP ? "color: " + clr : ""}>E-mail</S.Label>
              </S.DivForm>
            </S.DivInp>
          </S.DivCamp>

          <S.DivCamp>
            <S.DivInp>
              <S.DivForm>
                <S.Input
                  theme={errorP ? "border-color:" + clr : ""}
                  type="password"
                  id="inputUserPassword"
                  value={password}
                  onChange={(event) =>
                    setCredentials({
                      email,
                      password: event.target.value,
                      repeatPassword,
                    })
                  }
                ></S.Input>
                <S.Label theme={errorP ? "color: " + clr : ""}>
                  Crie sua senha *
                </S.Label>
              </S.DivForm>
            </S.DivInp>
          </S.DivCamp>

          <S.DivCamp>
            <S.DivInp>
              <S.DivForm>
                <S.Input
                  theme={errorP ? "border-color: " + clr : ""}
                  type="password"
                  id="inputUserRepeatPassword"
                  value={repeatPassword}
                  onChange={(event) =>
                    setCredentials({
                      email,
                      password,
                      repeatPassword: event.target.value,
                    })
                  }
                ></S.Input>
                <S.Label theme={errorP ? "color:" + clr : ""}>
                  Confirme sua senha *
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
        </S.DivRegister>

        <S.DivButton>
          <S.Button type="submit">
            <S.DivSvg>
              <IconRegister />
            </S.DivSvg>
            Cadastrar
          </S.Button>
        </S.DivButton>
      </S.FormRegister>
    </S.Register>
  );
}
