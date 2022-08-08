import { Link } from "react-router-dom";

type Props = {};

//TODO ADD ANIMATED ITEMS - CENTER ITEMS

const UserComponent = (props: Props) => {
  return (
    <div className="flex item-center">
      <Link to="/login" className="flex item-center mr-4">
        Login
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 2C8.49445 2 8.9778 2.14662 9.38893 2.42133C9.80005 2.69603 10.1205 3.08648 10.3097 3.54329C10.4989 4.00011 10.5484 4.50277 10.452 4.98773C10.3555 5.47268 10.1174 5.91814 9.76777 6.26777C9.41814 6.6174 8.97268 6.8555 8.48773 6.95196C8.00277 7.04843 7.50011 6.99892 7.04329 6.8097C6.58648 6.62048 6.19603 6.30005 5.92133 5.88893C5.64662 5.4778 5.5 4.99445 5.5 4.5C5.5 3.83696 5.76339 3.20107 6.23223 2.73223C6.70108 2.26339 7.33696 2 8 2ZM8 1C7.30777 1 6.63108 1.20527 6.05551 1.58986C5.47993 1.97444 5.03133 2.52107 4.76642 3.16061C4.50152 3.80015 4.4322 4.50388 4.56725 5.18282C4.7023 5.86175 5.03564 6.48539 5.52513 6.97487C6.01461 7.46436 6.63825 7.7977 7.31719 7.93275C7.99612 8.0678 8.69985 7.99848 9.33939 7.73358C9.97893 7.46867 10.5256 7.02007 10.9101 6.4445C11.2947 5.86892 11.5 5.19223 11.5 4.5C11.5 3.57174 11.1313 2.6815 10.4749 2.02513C9.8185 1.36875 8.92826 1 8 1Z"
            fill="white"
          />
          <path
            d="M13 15H12V12.5C12 12.1717 11.9353 11.8466 11.8097 11.5433C11.6841 11.24 11.4999 10.9644 11.2678 10.7322C11.0356 10.5001 10.76 10.3159 10.4567 10.1903C10.1534 10.0647 9.8283 10 9.5 10H6.5C5.83696 10 5.20107 10.2634 4.73223 10.7322C4.26339 11.2011 4 11.837 4 12.5V15H3V12.5C3 11.5717 3.36875 10.6815 4.02513 10.0251C4.6815 9.36875 5.57174 9 6.5 9H9.5C10.4283 9 11.3185 9.36875 11.9749 10.0251C12.6313 10.6815 13 11.5717 13 12.5V15Z"
            fill="white"
          />
        </svg>
      </Link>

      <Link to="/wishlist" className="flex items-center mr-4">
        Wishlist
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4401 3.07329C12.7323 2.3653 11.7939 1.93484 10.7956 1.86021C9.79726 1.78558 8.8053 2.07173 8.0001 2.66662C7.15187 2.03572 6.0961 1.74963 5.04538 1.86598C3.99467 1.98233 3.02706 2.49248 2.33742 3.29368C1.64777 4.09488 1.28732 5.12764 1.32864 6.18397C1.36996 7.2403 1.80998 8.24174 2.5601 8.98662L7.52677 13.9533C7.58874 14.0158 7.66248 14.0654 7.74372 14.0992C7.82496 14.1331 7.91209 14.1505 8.0001 14.1505C8.08811 14.1505 8.17525 14.1331 8.25649 14.0992C8.33773 14.0654 8.41146 14.0158 8.47344 13.9533L13.4401 8.98662C13.8285 8.59844 14.1367 8.13752 14.3469 7.6302C14.5571 7.12288 14.6654 6.57911 14.6654 6.02996C14.6654 5.4808 14.5571 4.93703 14.3469 4.42971C14.1367 3.92239 13.8285 3.46147 13.4401 3.07329ZM12.5001 8.04662L8.0001 12.54L3.5001 8.04662C3.10355 7.64842 2.83342 7.14199 2.72359 6.59085C2.61376 6.03971 2.66912 5.46841 2.88274 4.94862C3.09635 4.42883 3.4587 3.98369 3.92433 3.66904C4.38996 3.35439 4.93814 3.18425 5.5001 3.17996C6.25084 3.1818 6.97017 3.48151 7.5001 4.01329C7.56208 4.07578 7.63581 4.12537 7.71705 4.15922C7.79829 4.19306 7.88543 4.21049 7.97344 4.21049C8.06144 4.21049 8.14858 4.19306 8.22982 4.15922C8.31106 4.12537 8.38479 4.07578 8.44677 4.01329C8.99232 3.54055 9.6971 3.29272 10.4185 3.31997C11.1398 3.34723 11.8239 3.64752 12.3322 4.16008C12.8405 4.67264 13.1352 5.35918 13.1564 6.08075C13.1777 6.80232 12.924 7.50502 12.4468 8.04662H12.5001Z"
            fill="white"
          />
        </svg>
      </Link>

      <Link to="/cart">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 4.25C2.5 4.05109 2.57902 3.86032 2.71967 3.71967C2.86032 3.57902 3.05109 3.5 3.25 3.5H3.808C4.758 3.5 5.328 4.139 5.653 4.733C5.87 5.129 6.027 5.588 6.15 6.004C6.18327 6.00137 6.21663 6.00004 6.25 6H18.748C19.578 6 20.178 6.794 19.95 7.593L18.122 14.002C17.9581 14.5769 17.6114 15.0827 17.1343 15.4428C16.6572 15.803 16.0758 15.9979 15.478 15.998H9.53C8.92749 15.998 8.34165 15.8002 7.86252 15.4349C7.3834 15.0696 7.0375 14.557 6.878 13.976L6.118 11.204L4.858 6.956L4.857 6.948C4.701 6.381 4.555 5.85 4.337 5.454C4.128 5.069 3.96 5 3.809 5H3.25C3.05109 5 2.86032 4.92098 2.71967 4.78033C2.57902 4.63968 2.5 4.44891 2.5 4.25ZM7.573 10.84L8.324 13.579C8.474 14.121 8.967 14.498 9.53 14.498H15.478C15.7497 14.498 16.014 14.4095 16.2309 14.2458C16.4478 14.0821 16.6054 13.8523 16.68 13.591L18.417 7.5H6.585L7.559 10.787L7.573 10.84Z"
            fill="white"
          />
          <path
            d="M11 19C11 19.5304 10.7893 20.0391 10.4142 20.4142C10.0391 20.7893 9.53043 21 9 21C8.46957 21 7.96086 20.7893 7.58579 20.4142C7.21071 20.0391 7 19.5304 7 19C7 18.4696 7.21071 17.9609 7.58579 17.5858C7.96086 17.2107 8.46957 17 9 17C9.53043 17 10.0391 17.2107 10.4142 17.5858C10.7893 17.9609 11 18.4696 11 19ZM9.5 19C9.5 18.8674 9.44732 18.7402 9.35355 18.6464C9.25979 18.5527 9.13261 18.5 9 18.5C8.86739 18.5 8.74021 18.5527 8.64645 18.6464C8.55268 18.7402 8.5 18.8674 8.5 19C8.5 19.1326 8.55268 19.2598 8.64645 19.3536C8.74021 19.4473 8.86739 19.5 9 19.5C9.13261 19.5 9.25979 19.4473 9.35355 19.3536C9.44732 19.2598 9.5 19.1326 9.5 19Z"
            fill="white"
          />
          <path
            d="M18 19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21C15.4696 21 14.9609 20.7893 14.5858 20.4142C14.2107 20.0391 14 19.5304 14 19C14 18.4696 14.2107 17.9609 14.5858 17.5858C14.9609 17.2107 15.4696 17 16 17C16.5304 17 17.0391 17.2107 17.4142 17.5858C17.7893 17.9609 18 18.4696 18 19ZM16.5 19C16.5 18.8674 16.4473 18.7402 16.3536 18.6464C16.2598 18.5527 16.1326 18.5 16 18.5C15.8674 18.5 15.7402 18.5527 15.6464 18.6464C15.5527 18.7402 15.5 18.8674 15.5 19C15.5 19.1326 15.5527 19.2598 15.6464 19.3536C15.7402 19.4473 15.8674 19.5 16 19.5C16.1326 19.5 16.2598 19.4473 16.3536 19.3536C16.4473 19.2598 16.5 19.1326 16.5 19Z"
            fill="white"
          />
        </svg>
      </Link>
    </div>
  );
};

export default UserComponent;
