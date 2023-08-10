import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer className="py-4 flex justify-center font-primary items-center">
      Built with <FontAwesomeIcon icon={faHeart} className="w-5 text-red-600 mx-1" /> by{' '}
      <a
        href="https://twitter.com/compolabs"
        target="_blank"
        rel="noreferrer"
        className="text-palette-primary font-bold px-1"
      >
          Composability Labs 🌴🌴
        </a>
    </footer>
  )
}

export default Footer
