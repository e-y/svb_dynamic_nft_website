import Faq from 'react-faq-component'
import SectionTop from './section-top'

const FaqAccordion = () => {
    const data = {
      rows: [
        {
          title: "What´s the Blockchain?",
          content: "The blockchain is a development in computer science. It is essentially a ledger, which can never be hacked, and once information is entered into a ‘block’ (for example, This is SVB Soccer digitale card #1) the information can never be altered. This means that we can now trace the ownership, and sale, of digital files and assets from their creator, through the ‘chain,’ to their current owner. The ledger, or blockchain, is decentralized and distributed, meaning to alter the information you would have to hack millions of devices, at the same time, across the world, within 6 minutes."
        },
        {
          title: "What´s Metamask?",
          content: "MetaMask is a crypto wallet that supports browser extensions and you can find in in the app store of iOS and Android. The wallet, trusted by over one million of users worldwide, acts as a gateway to many decentralized applications includingNFT marketplaces. The Metamask wallet is an extension for Chrome, Firefox and Brave that offers a wallet on the Ethereum network."
        },
        {
          title: "What is OpenSea?",
          content: "OpenSea is the first (and largest) decentralized marketplace for crypto goods & collectables (just like Ebay but than for crypto) which also includes game items and other virtual goods secured by a blockchain. On OpenSea you can find Unique art and anyone can buy or sell these items through an smart contract. These goods can have different categories, and the only rule is that they are Non Fungable digital tokens and that they are 100% yours once you pay for them, as the transactions and proof of ownership are stored forever on the blockchain."
        },
        {
          title: "What is a non-fungible token?",
          content: "The Ethereum blockchain brought a whole new digital world where digital assets could be tracked for uniqueness and scarcity, providing the perfect platform to create a one-of-a-kind type of digital asset. These assets are known as non-fungible tokens, or NFTs. These tokens are built on a cryptocurrency platform in compliance with Ethereum's ERC-721, ERC-1155 and ERC-1337 token standards. NFTs are units of value which are non-fungible, unique and digitally scarce. They cannot be replaced by another equal part or quantity. What are the benefits of NFTs?"
        },
        {
          title: "What is a cryptocurrency?",
          content: "Cryptocurrencys are based digital assets, or files that are distributed as a digital token. This token is encrypted, and encoded with all the information pertaining to that asset i.e. a digital collectible or artwork and more."
        },
        {
          title: "What is a NFT?",
          content: "The Ethereum blockchain brought a whole new digital world where digital assets could be tracked for uniqueness and scarcity, providing the perfect platform to create a one-of-a-kind type of digital asset. These assets are known as non-fungible tokens, or NFTs with Ethereum's ERC-721, ERC-1155 and ERC-1337 token standards."
        },
        {
          title: "What can i do with a NFT?",
          content: "With NFTs, users  benefit from true digital ownership, trading, security, immutability and cross-platform interoperability."
        },
        {
          title: "Where can i see my NFT?",
          content: "Once your purchase is verified and complete, your NFT shows up in your metamask wallet; wish you loads of fun and joy!"
        },
        {
          title: "Where can i buy NFT's?",
          content: "OpenSea is the first and largest marketplace for user-owned digital goods, which include collectibles, gaming items, domain names, digital art, and other assets backed by a blockchain. On this platform you can buy and sell your favourite collectables."
        },
        {
          title: "Is there a limited of how much NFT's there are and how much i can own?",
          content: "NFTs are units of value which are non-fungible, unique and digitally scarce. They cannot be replaced by another equal part or quantity. Once the amount of an asset is minted, this can never change again deviding NFT's from common-uncommon-rare-super rare and more."
        },
        {
          title: "What does SVB means?",
          content: "Surinaamse Voetbal Bond."
        },
        {
          title: "Why do I need a cryptocurrency wallet to get my SVB collectible?",
          content: "Once you got a crypto wallet; you are now upgrading to a new and future generation: interaction with finance, ownership, transaction and upgrading to the internet of decentralization; where you are the true owner of your wallet."
        },
        {
          title: "What wallet can I use to register for The SVB collectible?",
          content: "The Metamask wallet is trusted by over one million of users worldwide and acts as a gateway to many decentralized applications including NFT marketplaces."
        },
        {
          title: "What is Bitcoin?",
          content: "Bitcoin was the first cryptocurrency, announced in 2008 (and launched in 2009). Bitcoin is a digital form of cash. But unlike the regular ''fiat'' currencies you’re used to, there is no central bank controlling it. Instead, the financial system in Bitcoin is run by thousands of computers distributed around the world. It provides users with the ability to send and receive digital money. What makes it so attractive is that it can’t be censored, funds can’t be spent more than once, and transactions can be made at any time, from anywhere."
        },
        {
          title: "How do i know if my card is Legit?",
          content: "...."
        },
        {
          title: "Can i see my card in my VR glasses?",
          content: "...."
        },
        {
          title: "How do i know if my card is rare or super rare common or uncommon?",
          content: "...."
        },
        {
          title: "Can i keep my card forever?",
          content: "...."
        },
        {
          title: "Where can i display my card?",
          content: "...."
        },
        {
          title: "Where can i stay up to date for new cards?",
          content: "...."
        }
      ],
    },
    styles = {
      // bgColor: 'white',
      // titleTextSize: '48px',
      rowTitleTextSize: '1.5em',
      // rowContentColor: 'grey',
      rowContentTextSize: '16px',
      rowContentPaddingTop: '.5em',
      rowContentPaddingBottom: '.5em',
      rowContentPaddingLeft: '3em',
      rowContentPaddingRight: '3em',
      // arrowColor: "red",
      // transitionDuration: "1s",
      // timingFunc: "ease"
    }

    return (
        <section className="section faq" id="faq">
            <SectionTop title='FAQ' subtitle='Frequently Asked' badge={true} badge_icon='icon-question' />
            <Faq data={data} styles={styles}/>
        </section>
    )
}

export default FaqAccordion
