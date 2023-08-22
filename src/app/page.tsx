'use client';
import useMousePosition from './utils/useMousePosition';
import { shortenAddress } from './utils/utils';
import styles from './page.module.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { PuzzleWalletProvider, PuzzleWeb3Modal, useConnect, useAccount } from '@puzzlehq/sdk';
import { useRouter } from 'next/navigation';

export default function Home() {
  
  const router = useRouter();
  const { connect, data, error, loading } = useConnect();
  const { account } = useAccount();
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
            <button
              onClick={async () => {await connect();}}
              disabled={loading}
              className={styles.orangehomecwbutton}
            >
              {/* {account ? shortenAddress(account.address, true, 10): 'R u puzzled'} */}
              {account ? router.push('/buy'): 'R u puzzled'}
            </button>
            {/* {data && <p>you did it!</p>}
            TODO -- add new page transition here or error out if they don't have Puzzle Wallet
            First -- load account balance -- check if they already have SWMG
            If no, prompt them to buy SWMG
            If yes, take them to next step -- the quiz
            {error && <p>error connecting: {error}</p>} */}

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
