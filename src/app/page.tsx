'use client';
import useMousePosition from './utils/useMousePosition';
import styles from './page.module.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { PuzzleWalletProvider, PuzzleWeb3Modal, useConnect } from '@puzzlehq/sdk';

export default function Home() {
  
  const { connect, data, error, loading } = useConnect();
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <PuzzleWalletProvider>
    <main className={styles.main}>

      <motion.div className={styles.mask}
      animate={{
        WebkitMaskPosition: `${x-size/2}px ${y-size/2}px`,
        WebkitMaskSize: `${size}px`
      }}
      transition={{type: "tween", ease: "backOut"}}>
        <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
          
        
          Shadow Wizard Money Gang <span> BITCH </span>
          <p>
            <button
              onClick={() => connect()}
              disabled={loading}
            >
              <span> CONNECT WALLET </span>
            </button>
            {data && <p>you did it!</p>}
            {error && <p>error connecting: {error}</p>}
          </p>

        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          You messing with this?
        </p>
      </div>

    </main>
    <PuzzleWeb3Modal
    dAppName='Shadow Wizard Money Gang'
    dAppDescription="Lets Puzzle"
    dAppUrl='localhost:5173'
    dAppIconURL='https://walletconnect.puzzle.online/assets/logo_white-b85ba17c.png'
    />
    </PuzzleWalletProvider>
    
  )
  
}
