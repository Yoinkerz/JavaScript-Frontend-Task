import React from 'react'
import supportImg from '../assets/images/customer-support.svg'
import paymentImg from '../assets/images/secured-payment.svg'
import deliveryImg from '../assets/images/free-home-delivery.svg'

const PolicySection = () => {
  return (
    <section className='policyinfo container'>
        <div className='policies'>
            <div className='support'>
                <img src={supportImg} alt='Support' />
                <h2>Customer Support</h2>
                <p>Village did removed enjoyed </p>
                <p>explain talking.</p>
            </div>
            <div className='secured-payment'>
                <img src={paymentImg} alt='Secured-Payment' />
                <h2>Secured Payment</h2>
                <p>Village did removed enjoyed </p>
                <p>explain talking.</p>
            </div>
            <div className='home-delivery'>
                <img src={deliveryImg} alt='Home-Delivery' />
                <h2>Secured Payment</h2>
                <p>Village did removed enjoyed </p>
                <p>explain talking.</p>
            </div>
            <div className='returns'>
                <img src={deliveryImg} alt='Returns' />
                <h2>Secured Payment</h2>
                <p>Village did removed enjoyed </p>
                <p>explain talking.</p>
            </div>
        </div>
    </section>
  )
}

export default PolicySection