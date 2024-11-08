"use client";
import { Button } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button variant="contained" color="primary">
        Hello MUI
      </Button>
    </main>
  );
}
