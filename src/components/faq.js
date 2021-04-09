import Faq from 'react-faq-component'
import SectionTop from './section-top'

const FaqAccordion = () => {
    const data = {
      rows: [
        {
          title: "Lorem ipsum dolor sit amet,",
          content: "Lorem ipsum dolor sit amet, consectetur "
        },
        {
          title: "Nunc maximus, magna at ultricies elementum",
          content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
        },
        {
          title: "Curabitur laoreet, mauris vel blandit fringilla",
          content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
        },
        {
          title: "What is the package version",
          content: "v1.0.5"
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
            <SectionTop title='FAQ' subtitle='Frequently Asked' badge={true} badge_title='NFT' />
            <Faq data={data} styles={styles}/>
        </section>
    )
}

export default FaqAccordion
