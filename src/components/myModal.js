import Modal from 'react-modal';
import { useState} from 'react'

const MyModal = ( { title, subheadline, text, image }) => {
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          height                : '100%',
          width                 : '100%',
          transform             : 'translate(-50%, -50%)'
        }
      };

      // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
      Modal.setAppElement('#root')


    var subtitle;
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }

    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="blog-teaser__modal">
            <button className="blog-teaser__readmore button button--green" onClick={openModal}>Open Modal</button>
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >

              <h2 ref={_subtitle => (subtitle = _subtitle)}></h2>
              <div className="blog-teaser__modal">
                <div className="blog-post">
                  <img src={image} className="blog-post__image" alt=""></img>
                  <div className="blog-post__container">
                    <div className="blog-post__title">{title}</div>
                    <div className="blog-post__subheadline">{subheadline}</div>
                    <div className="blog-post__text">{text}</div>
                    <button className="blog-post__close" onClick={closeModal}>close</button>
                  </div>
                </div>
              </div>
            </Modal>
        </div>
    )
}

export default MyModal
