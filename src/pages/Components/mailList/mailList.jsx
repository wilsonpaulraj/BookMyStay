import './MailList.css';

const mailList = () => {
  return (
    <div className='mail'>
        <h1 className="mainTitle">Save Time, Save Money!</h1>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your email' />
            <button className="subscribe">Subscribe</button>
        </div>
    </div>
  )
}

export default mailList;