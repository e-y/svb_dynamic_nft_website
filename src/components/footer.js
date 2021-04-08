import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
    const AnchorElement = <AnchorLink href="blog">Things</AnchorLink>

    return (
        <div class="footer">
            2022<br/>
            <AnchorLink href='#blog' offset='80'>Things</AnchorLink>
        </div>
    )
}

export default Footer
