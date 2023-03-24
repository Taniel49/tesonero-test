import bigAvatar from '../../images/avatar-big.svg';
import smallAvatar from '../../images/avatar-small.svg';
import quotesHigh from '../../images/quotes-top.svg';
import quotesLow from '../../images/quotes-bottom.svg';
import quotesRight from '../../images/quotes-right.svg';
import quotesLeft from '../../images/quotes-left.svg';

function Comments() {
    return (
        <section className="comments">
            <div className="green-line"></div>
            <h2 className="comments__header">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
            <div className="comments__big-comment">
                <div className="comments__big-avatar-container">
                    <img className="comments__quotes-left" src={quotesLeft} alt={'quotes'}/>
                    <img className="comments__big-avatar" src={bigAvatar} alt={'avatar'}/>
                    <img className="comments__quotes-right" src={quotesRight} alt={'quotes'}/>
                </div>
                <img className="comments__quotes-top" src={quotesHigh} alt={'quotes'}/>
                <div className="comments__main-comment">
                    <p className="comments__text comments__text_big">Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Laboriosam
                        quas, aut consectetur
                        animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae
                        deleniti, iste nisi
                        expedita, provident excepturi officia!
                        Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi
                        error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore?
                    </p>
                    <span className="comments__text comments__author comments__text_big">Jane Doe</span>
                </div>
                <img className="comments__quotes-bottom" src={quotesLow} alt={'quotes'}/>
            </div>
            <div className="comments__small-comments">
                <div className="comments__small-comment">
                    <div>
                        <p className="comments__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Laboriosam quas, aut consectetur
                            animi autem aliquid
                        </p>
                        <span className="comments__text comments__author">Jane Doe</span>
                    </div>
                    <img src={smallAvatar} alt={'avatar'} className="comments__small-avatar"/>
                </div>
                <div className="comments__small-comment">
                    <img className="comments__small-avatar" src={smallAvatar} alt={'avatar'}/>
                    <div>
                        <p className="comments__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Laboriosam quas, aut consectetur
                            animi autem aliquid
                        </p>
                        <span className="comments__text comments__author">Jane Doe</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Comments;