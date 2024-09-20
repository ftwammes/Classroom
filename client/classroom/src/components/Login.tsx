'use client'
 
import React, { use, useEffect, useState } from "react";
import { Button, Checkbox, FormControlLabel, LinearProgress, TextField } from "@mui/material";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import Requester from "../utils/requester";

export default function Login() {
    const router = useRouter();

    const [isFirstStep, setIsFirstStep] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const [invalidCredential, setInvalidCredential] = useState(false);
    const [credential, setCredential] = useState("");

    const [invalidPassword, setInvalidPassword] = useState(false);
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = (event) => {
        setShowPassword(event.target.checked);
    }

    const handleCredentialChange = (event) => {
        setCredential(event.target.value);
        setInvalidCredential(false);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setInvalidPassword(false);
    }

    const handleCheckCredential = () => {
        setIsLoading(true);
        Requester.post("/user/checkCredential", {credential: credential}).then((response) => {
            if (response.status === 200) {
                setIsFirstStep(false);
            } else {
                setInvalidCredential(true);
            }
        });
    }

    const handleLogin = () => {
        setIsLoading(true);
        Requester.post("/user/login", {credential: credential, password: password}).then((response) => {
            if (response.status === 200) {
                router.push("/classroom");
            } else {
                setInvalidPassword(true);
            }
        });
    }

    useEffect(() => {
        setIsLoading(false);
    }, [isFirstStep]);

    useEffect(() => {
        setIsLoading(false);
    }, [invalidCredential]);

    return (
        <>
            {
                isLoading ? (
                    <LinearProgress />
                ) : ""
            }
            {
                isFirstStep ? (
                    <>
                        <div>
                            <svg xmlns="https://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 40 48" aria-hidden="true"><path fill="#4285F4" d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"></path><path fill="#34A853" d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"></path><path fill="#FABB05" d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"></path><path fill="#E94235" d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"></path></svg>
                            <h1>Fazer login</h1>
                            <h2>Use sua Conta do Google</h2>
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Email ou telefone" variant="outlined" onChange={handleCredentialChange} helperText={invalidCredential ? "Digite um e-mail ou número de telefone válido" : ""}/>
                            <a>Esqueceu seu e-mail?</a>
                            <p>Não está no seu computador? Use o modo visitante para fazer login com privacidade.</p>
                            <Link href="https://support.google.com/chrome/answer/6130773?hl=pt-BR">Saiba mais sobre como usar o Modo visitante</Link>
                            <div>
                                <button>Criar Conta</button>
                                <button onClick={handleCheckCredential}>Próxima</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <svg xmlns="https://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 40 48" aria-hidden="true"><path fill="#4285F4" d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"></path><path fill="#34A853" d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"></path><path fill="#FABB05" d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"></path><path fill="#E94235" d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"></path></svg>
                            <h1>Olá!</h1>
                            <div>
                                <svg aria-hidden="true" fill="currentColor" focusable="false" width="48px" height="48px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path></svg>
                                <p>{credential}</p>
                                <svg aria-hidden="true" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"></path></svg>
                            </div>
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Digite sua senha" variant="outlined" onChange={handlePasswordChange} type={showPassword ? "" : "password"} helperText={invalidPassword ? "Senha incorreta. Tente novamente ou clique em \"Esqueceu a senha?\" para escolher outra." : ""}/>
                            <FormControlLabel control={<Checkbox onClick={handleShowPassword}/>} label="Mostrar senha" />
                            <a>Esqueceu seu e-mail?</a>
                            <p>Não está no seu computador? Use o modo visitante para fazer login com privacidade.</p>
                            <Link href="https://support.google.com/chrome/answer/6130773?hl=pt-BR">Saiba mais sobre como usar o Modo visitante</Link>
                            <div>
                                <button>Esqueceu a senha?</button>
                                <button onClick={handleLogin}>Próxima</button>
                            </div>
                        </div>
                    </>
                )
            }
            
        </>
    )
};