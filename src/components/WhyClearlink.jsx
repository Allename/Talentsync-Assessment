import styled from "styled-components";
import video from "../assets/icons/video.svg";
import recording from "../assets/icons/recording.svg";
import calendar from "../assets/icons/calendar.svg";
import unlock from "../assets/icons/unlock.svg";
import rectangleImage from "../assets/icons/rectangle-image.svg";

const WhyClearlink = () => {
  const data = [
    {
      id: 1,
      image: video,
      title: "Crystal-clear HD video",
      description:
        "No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.",
    },
    {
      id: 2,
      image: recording,
      title: "Noise-cancelling audio",
      description:
        "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
    },
    {
      id: 3,
      image: calendar,
      title: "Scheduling made easy",
      description:
        "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
    },
    {
      id: 4,
      image: unlock,
      title: "Bank-grade security",
      description:
        "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
    },
  ];

  return (
    <ClearLink>
      <div className="text">
        <p className="small-title">The ClearLink Advantage</p>
        <div className="subtext">
          <p className="title">Why choose ClearLink?</p>
          <p className='description'>
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
        </div>
      </div>

      <div className='flex-items'>
        <div className='items-wrapper'>
          {data.map((item) => {
            return (
              <div key={item.id} className='item'>
                <div className='circle'>
                  <img src={item.image} alt="image" />
                </div>

                <p className='title'>{item.title}</p>
                <p className='description'>{item.description}</p>
              </div>
            )
          })}
        </div>
        <div className='image'>
          <img src={rectangleImage} alt="Rectangle Image" />
        </div>
      </div>
    </ClearLink>
  );
};

export default WhyClearlink;

const ClearLink = styled.div`
  margin: 5rem 6rem;

  .text {
    margin: 4rem 0;

    .small-title {
      margin: 1rem 0;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.blue};
    }

    .subtext {
      .title {
        font-weight: 500;
        font-size: 33px;
      }

      .description {
        width: 60%;
        margin: 1rem 0;
        font-size: 20px;
        color: ${({ theme }) => theme.colors.text2};
      }
    }
  }

  .flex-items {
    display: flex;

    .items-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      
      .item {
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .circle {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 3rem;
          height: 3rem;
          border-radius: 100px;
          border: 1px solid ${({ theme }) => theme.colors.border2};
          background-color: ${({ theme }) => theme.colors.grey};
        }

        .title {
          font-size: 18px;
          font-weight: 500;
          margin-top: 1rem;
        }

        .description {
          color: ${({ theme }) => theme.colors.text2};
        }
      }
    }

    .image { 
      width: 50%;
      height: 30%;
    }
  }
`;
