"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigation = (pageName) => {
    router.push(pageName);
  };
  return (
    <main className={styles.main}>
      <h1>Basic Routing | Make New Page</h1>
      <Link href="/login">Login Page</Link>
      <Link href="/about">About Page</Link>
      <button onClick={() => navigation("/login")}>Go to Login Page</button>
      <button onClick={() => navigation("/about")}>Go to About Page</button>
    </main>
  );
  // const [name, setName] = useState("Nitesh");
  // const func = (para) => {
  //   setName("Saini");
  // };
  // const InnerComp = () => {
  //   return <h1>This is Inner Component</h1>;
  // };
  // return (
  //   <main className={styles.main}>
  //     Events, Function and States {name}
  //     <button onClick={() => func("MyFunc")}>Click Me</button>
  //     {/* <InnerComp /> */}
  //     {InnerComp()}
  //   </main>
  // );
}
