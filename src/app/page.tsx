"use client";

import { useState } from "react";
import IntroAnimation from "../components/IntroAnimation/IntroAnimation";
import styles from "./page.module.css";

export default function Home() {
	const [showIntro, setShowIntro] = useState(true);
	const handleSkip = () => {
		setShowIntro(false);
	  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
		<div className={styles.container}>
			{showIntro && <IntroAnimation onSkip={handleSkip} />}
			{!showIntro && (
				<main className={styles.main}>
				<h1>My Projects</h1>
				{/* Render your projects here */}
				</main>
			)}
		</div>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
