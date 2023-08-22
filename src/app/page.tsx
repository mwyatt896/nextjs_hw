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
          <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <button
              onClick={() => connect()}
              disabled={loading}
              className={styles.orangehomecwbutton}
            >
              CONNECT WALLET
            </button>
            {data && <p>you did it!</p>}
            {/* TODO -- add new page transition here or error out if they don't have Puzzle Wallet */}
            {/* First -- load account balance -- check if they already have SWMG
            If no, prompt them to buy SWMG
            If yes, take them to next step -- the quiz */}
            {error && <p>error connecting: {error}</p>}
          </div>

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
