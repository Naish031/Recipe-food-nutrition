import React from 'react'

export const BasicText = () => {
  return (
    <div>
        <div className='flex justify-center items-center h-20'>
            <h1 className='text-black text-center text-2xl font-semibold pb-1'>Frequently Asked Questions</h1>
        </div>

        <div className='flex flex-col'>
            <div className='mx-[15%]'>

                <h3 className='font-bold text-lg text-black text-left'>Is my parent information secure?</h3>
                <p className='text-left text-sm text-black pb-3'>Credit cards are processed through a PC compliant banking partner.</p>

                <h3 className='font-bold text-lg text-black text-left'>Why do you require a credit card for a freemium API?</h3>
                <p className='text-left text-sm text-black pb-3'>We work directly with API providers to implement clear trasnparent pricing for developers. The Provider may require a credit card if a plan has a quote with an average fee. If you would be no longer like to use the API you can unsubscribe from the plan at anytime by clicking the "unsubscribe" button under the Billing section of the RapidAPI Dashboard.</p>

                <h3 className='font-bold text-lg text-black text-left'>What if I exceed my plan limits?</h3>
                <p className='text-left text-sm text-black pb-3'>Depending on your plasn specification you will either incur average charges or be suspended.</p>

                <h3 className='font-bold text-lg text-black text-left'>When will I be billed?</h3>
                <p className='text-left text-sm text-black pb-3'>We charge your credit card upon subscription to an API's plan and at the next recurring interval.</p>

                <h3 className='font-bold text-lg text-black text-left'>How are refunds handled?</h3>
                <p className='text-left text-sm text-black pb-3'>For refund requests, please contact us at support@rapidapi.com</p>

            </div>
        </div>

    </div>
  )
}
