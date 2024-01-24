import { useState } from "react"
import styled from "styled-components"

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const accordionItems = [
    {
      title: 'How many participants can join a ClearLink video conference?',
      content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
    },
    {
      title: 'Can I use ClearLink on multiple devices?',
      content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
    },
    {
      title: 'Is ClearLink compatible with other video conferencing platforms?',
      content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
    },
    {
      title: 'How does ClearLink ensure the security of my video conferences?',
      content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
    },
    {
      title: 'Do I need to download any software to use ClearLink?',
      content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
    },
    {
      title: 'What kind of customer support does ClearLink provide?',
      content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
    },
  ]

  return (
    <FAQView>
      <section>
        <div className="left">
          <p className='title'>Support</p>

          <p className='faq'>FAQs</p>

          <p className='description'>
          Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please <a href="#">chat to our friendly team</a>.
          </p>
        </div>

        <div className="right">
          <div className="accordion">
            {accordionItems.map((item, index) => {
              return (
                <div key={index} className={`accordion-item ${openIndex === index ? 'open' : ''}`}>
                  <div className='accordion-header'>
                    <p>{item.title}</p>
                    {openIndex === index ? (
                      <button onClick={() => setOpenIndex(null)}>-</button>
                      
                    ) : (
                      <button onClick={() => setOpenIndex(index)}>+</button>
                    )}
                  </div>
                  {openIndex === index && (
                    <div className="accordion-content">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </FAQView>
  )
}

export default FAQs

const FAQView = styled.div`
  margin: 0 6rem;

  section {
    padding: 4rem 0;
    display: flex;
    justify-content: space-between;
    gap: 4rem;

    .left {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .title {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.blue};
      }

      .faq {
        font-size: 33px;
        font-weight: 600;
      }

      .description {
        width: 90%;
        font-size: 20px;
        color: ${({ theme }) => theme.colors.text};

        a {
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }

    .right {
      width: 60%;

      .accordion {
        
        .accordion-item {
          margin-bottom: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid ${({ theme }) => theme.colors.border1};

          .accordion-body {
            padding: 0 1rem;
            border-radius: 10px;
            background-color: ${({ theme }) => theme.colors.grey};
          }

          .accordion-header {
            display: flex;
            justify-content: space-between;

            p {
              font-weight: 600;
              font-size: 15px;
            }

            button {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 1rem;
              height: 1rem;
              border-radius: 100px;
              cursor: pointer;
              background: transparent;
              border: 1px solid ${({ theme }) => theme.colors.text};
              color: ${({ theme }) => theme.colors.text};
            }
          }

          .accordion-content {
            padding: 0 1rem;
            padding-bottom: 2rem;
            border-radius: 0 0 10px 10px;
            border-top: none;
            border-left: 1px solid ${({ theme }) => theme.colors.border2};
            border-right: 1px solid ${({ theme }) => theme.colors.border2};
            border-bottom: 1px solid ${({ theme }) => theme.colors.border2};
            background-color: ${({ theme }) => theme.colors.grey};

            p {
              width: 96%;
              line-height: 24px;
              color: ${({ theme }) => theme.colors.text};
            }
          }

          &.open {
            .accordion-header {
              border-radius: 10px 10px 0 0;
              padding: 1.2rem 1rem;
              background-color: ${({ theme }) => theme.colors.grey};
              border: 1px solid ${({ theme }) => theme.colors.border2};
              border-bottom: none;
            }
            border-bottom: none;
          }
        }
      }
    }

  }
`;