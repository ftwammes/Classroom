"use client";

import React, { useState } from "react";
import Link from 'next/link';
import Login from "../components/Login";

export default function Home() {
  return (
    <div>
      <div>
        <Login />
      </div>
      <div>
        <div>
          <select>
            <option>Português (Brasil)</option>
          </select>
        </div>
        <div>
          <Link href="https://support.google.com/accounts?hl=pt-BR&p=account_iph">Ajuda</Link>
          <Link href="https://accounts.google.com/TOS?loc=BR&hl=pt-BR&privacy=true">Privacidade</Link>
          <Link href="https://accounts.google.com/TOS?loc=BR&hl=pt-BR">Termos</Link>
        </div>
      </div>
    </div>
  );
}
