import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center p-3 text-center text-sm sm:h-screen sm:text-xl ">
      <p> !hello!</p>
      <p>
        I aM a coMputer science engineer Majored in Artificial intelligence with
        a great love for photography!
      </p>
      <br />
      <p> this is the gear that i use:</p>
      <p> sony α6400</p>
      <p> sony 35 f/1.8 OSS</p>
      <p> iphone 13 pRo MaX</p>
      <p> dji Mini 2</p>
      <br />
      <br />
      <br />
      <p>
        {" "}
        Thank you for taking soMe tiMe to have a look at My portfolio and feel
        free to reach out to Me on social Media!
      </p>
      <div className="mr-5 flex w-full items-center justify-center">
        <Link href="https://www.instagram.com/pintodigitaljournal">
          <svg
            width="50"
            height="50"
            viewBox="0 0 145 145"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M72.5001 40C63.6736 40 62.5668 40.0374 59.1003 40.1955C55.641 40.3534 53.2785 40.9028 51.2112 41.7061C49.074 42.5367 47.2616 43.648 45.4549 45.4548C43.648 47.2615 42.5367 49.0741 41.7062 51.2113C40.9027 53.2785 40.3535 55.641 40.1954 59.1003C40.0373 62.5668 40 63.6736 40 72.5001C40 81.3264 40.0373 82.4332 40.1954 85.8997C40.3535 89.359 40.9027 91.7215 41.7062 93.7887C42.5368 95.9259 43.6481 97.7383 45.4549 99.5452C47.2617 101.352 49.074 102.463 51.2112 103.294C53.2785 104.097 55.641 104.647 59.1003 104.804C62.5668 104.963 63.6736 105 72.5001 105C81.3264 105 82.4332 104.963 85.8997 104.804C89.359 104.647 91.7215 104.097 93.7887 103.294C95.9259 102.463 97.7383 101.352 99.5452 99.5452C101.352 97.7383 102.463 95.9259 103.294 93.7887C104.097 91.7215 104.647 89.359 104.804 85.8997C104.963 82.4332 105 81.3264 105 72.5001C105 63.6736 104.963 62.5668 104.804 59.1003C104.647 55.641 104.097 53.2785 103.294 51.2113C102.463 49.0741 101.352 47.2615 99.5452 45.4548C97.7383 43.648 95.9259 42.5367 93.7887 41.7061C91.7215 40.9028 89.359 40.3534 85.8997 40.1955C82.4332 40.0374 81.3264 40 72.5001 40ZM72.5001 45.8558C81.1778 45.8558 82.2058 45.889 85.6328 46.0454C88.8016 46.1898 90.5224 46.7193 91.6675 47.1644C93.1846 47.754 94.2673 48.4582 95.4044 49.5955C96.5418 50.7327 97.246 51.8154 97.8356 53.3324C98.2807 54.4776 98.8102 56.1985 98.9546 59.3672C99.111 62.7942 99.1442 63.8222 99.1442 72.5C99.1442 81.1778 99.111 82.2058 98.9546 85.6328C98.8102 88.8016 98.2807 90.5224 97.8356 91.6675C97.246 93.1846 96.5418 94.2673 95.4044 95.4044C94.2673 96.5418 93.1845 97.246 91.6676 97.8356C90.5224 98.2807 88.8015 98.8102 85.6328 98.9546C82.2063 99.111 81.1785 99.1442 72.5 99.1442C63.8215 99.1442 62.7938 99.111 59.3672 98.9545C56.1984 98.8102 54.4776 98.2807 53.3325 97.8356C51.8153 97.246 50.7327 96.5418 49.5956 95.4044C48.4583 94.2673 47.754 93.1845 47.1644 91.6676C46.7193 90.5224 46.1899 88.8015 46.0454 85.6328C45.889 82.2058 45.8558 81.1778 45.8558 72.5C45.8558 63.8222 45.889 62.7942 46.0454 59.3672C46.1899 56.1984 46.7193 54.4776 47.1644 53.3325C47.754 51.8153 48.4583 50.7327 49.5955 49.5956C50.7327 48.4582 51.8154 47.754 53.3324 47.1644C54.4776 46.7193 56.1985 46.1898 59.3672 46.0454C62.7942 45.889 63.8222 45.8558 72.5 45.8558"
              fill="#776B5D"
            />
            <path
              d="M72.5001 83.3335C66.5169 83.3335 61.6666 78.4832 61.6666 72.5002C61.6666 66.517 66.5169 61.6667 72.5001 61.6667C78.4831 61.6667 83.3334 66.517 83.3334 72.5002C83.3334 78.4832 78.4831 83.3335 72.5001 83.3335ZM72.5001 55.8109C63.2828 55.8109 55.8108 63.2829 55.8108 72.5002C55.8108 81.7173 63.2828 89.1893 72.5001 89.1893C81.7172 89.1893 89.1892 81.7173 89.1892 72.5002C89.1892 63.2829 81.7172 55.8109 72.5001 55.8109V55.8109ZM93.7486 55.1515C93.7486 57.3055 92.0025 59.0515 89.8486 59.0515C87.6948 59.0515 85.9486 57.3055 85.9486 55.1515C85.9486 52.9976 87.6948 51.2515 89.8486 51.2515C92.0025 51.2515 93.7486 52.9976 93.7486 55.1515"
              fill="#776B5D"
            />
          </svg>
        </Link>
        <Link href="mailto:rodrigoalexandrepereiraepinto@gmail.com">
          <svg
            width="30"
            height="40"
            viewBox="0 0 75 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M68.4082 0H6.5918C2.95122 0 0 2.86802 0 6.40597V43.4182C0 46.9562 2.95122 49.8242 6.5918 49.8242H68.4082C72.0488 49.8242 75 46.9562 75 43.4182V6.40597C75 2.86802 72.0488 0 68.4082 0ZM63.1336 36.6409C62.2099 37.4046 60.8227 37.2964 60.0363 36.3977L47.3543 21.907L38.5888 26.7668C37.914 27.1409 37.0859 27.1408 36.4113 26.7668L27.6459 21.907L14.9637 36.3976C14.1779 37.2955 12.7909 37.405 11.8664 36.6407C10.9419 35.8767 10.83 34.5292 11.6162 33.6308L23.7617 19.7534L12.9738 13.7723C11.9197 13.188 11.5528 11.8838 12.154 10.8595C12.7554 9.83501 14.0972 9.47856 15.1513 10.0628C16.0453 10.5583 36.4919 21.8945 37.5 22.4535C38.5069 21.8952 58.9523 10.5597 59.8487 10.0628C60.9023 9.47841 62.2446 9.83501 62.846 10.8595C63.4472 11.8838 63.0804 13.1879 62.0262 13.7723L51.2383 19.7534L63.3838 33.6308C64.17 34.5293 64.0581 35.8767 63.1336 36.6409Z"
              fill="#776B5D"
            />
          </svg>
        </Link>
      </div>
      <p> see you on the field! :)</p>
    </div>
  );
}
