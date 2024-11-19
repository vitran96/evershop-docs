import { useSpring, animated } from "@react-spring/web";
import React from "react";

const menus = ["New & Featured", "Men", "Women", "Kids", "Accessories"];
const products = [
  {
    name: "Nike Air Max 270",
    image: "/img/Vector-1.webp",
    price: "$150",
    originPrice: "$200",
    percent: "25%",
    category: "Men",
  },
  {
    name: "Nike Running Shoes",
    image: "/img/Vector-2.webp",
    price: "$150",
    originPrice: "$200",
    percent: "25%",
    category: "Men",
  },
  {
    name: "Adidas Superstar",
    image: "/img/Vector-3.webp",
    price: "$230",
    originPrice: "$200",
    percent: "25%",
    category: "Men",
  },
  {
    name: "Converse All Star",
    image: "/img/Vector-4.webp",
    price: "$210",
    category: "Men",
  },
  {
    name: "Nike Air Max 270",
    image: "/img/Vector-1.webp",
    price: "$180",
    category: "Men",
  },
];

const articles = [
  {
    title: "The Best Sneakers of 2021",
    image: "/img/Vector-5.webp",
    description: "The best sneakers of 2021 are here. Find out more",
  },
  {
    title: "The Best Sneakers of 2021",
    image: "/img/Vector-6.webp",
    description: "The best sneakers of 2021 are here. Find out more",
  },
  {
    title: "The Best Sneakers of 2021",
    image: "/img/Vector-7.webp",
    description: "The best sneakers of 2021 are here. Find out more",
  },
];

const Builder = () => {
  const styles = useSpring({
    from: { opacity: 0, height: "0px" },
    to: { opacity: 1, height: "500px" },
    loop: { reverse: true },
  });

  return (
    <div className="dynamic-content">
      <div className="w-[1440px] bg-white rounded-2xl scale-50 builder">
        <div className="header grid grid-cols-2 px-8 py-5 border-b-2 border-[#f8f8f8]">
          <div className="flex justify-start items-center gap-12">
            <div className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none">
                <g clip-path="url(#clip0_4805_1384)">
                  <path
                    d="M14.9046 1.19222C16.8209 0.0858499 19.1819 0.0858494 21.0982 1.19222L31.0085 6.91395C32.9248 8.02032 34.1053 10.065 34.1053 12.2777V23.7212C34.1053 25.9339 32.9248 27.9786 31.0085 29.085L21.0982 34.8067C19.1819 35.9131 16.8209 35.9131 14.9046 34.8067L4.9943 29.085C3.07801 27.9786 1.89753 25.9339 1.89753 23.7212V12.2777C1.89753 10.065 3.07801 8.02032 4.9943 6.91395L14.9046 1.19222Z"
                    fill="url(#paint0_linear_4805_1384)"
                  />
                  <path
                    d="M18.0813 7C18.0813 7.10287 18.0813 7.20574 18.0813 7.30861C18.0813 11.1148 18.0813 14.9724 18.0813 18.7786C18.0813 18.8301 18.0813 18.9329 18.0813 18.9844C18.0813 19.0358 18.0298 19.0872 17.9784 19.0872C17.6184 19.2416 17.3098 19.3959 16.9497 19.5502C16.4868 19.7559 15.9724 19.9616 15.5095 20.2188C14.9437 20.476 14.378 20.7332 13.8122 20.9903C13.3492 21.1961 12.8863 21.4018 12.4234 21.6076C11.8576 21.8647 11.2918 22.1219 10.7261 22.3791C10.2631 22.5848 9.80023 22.7906 9.28588 23.0478C8.92583 23.2021 8.51435 23.4078 8.15431 23.5621C8.10287 23.5621 8.10287 23.6135 8.05144 23.5621C8.05144 23.5621 8.05144 23.5621 8 23.5621C8.15431 23.3049 8.30861 23.0992 8.46292 22.842C9.28588 21.4533 10.1603 20.0645 10.9832 18.6758C11.8576 17.1841 12.7835 15.6925 13.6579 14.2009C14.4808 12.8122 15.3038 11.4234 16.1267 10.0861C16.744 9.0574 17.3612 8.08014 17.927 7.05144C18.0298 7.05144 18.0298 7 18.0813 7C18.0813 7 18.0298 7 18.0813 7Z"
                    fill="white"
                  />
                  <path
                    d="M8.05078 23.5625C8.05078 23.5625 8.10222 23.5625 8.05078 23.5625C8.10222 23.5625 8.10222 23.5625 8.05078 23.5625C8.05078 23.6139 8.05078 23.6139 8.05078 23.5625Z"
                    fill="#808080"
                  />
                  <path
                    d="M8.10156 23.6135C8.10156 23.5621 8.10156 23.5621 8.10156 23.6135C8.61591 23.3564 9.13026 23.1506 9.64462 22.8934C10.3133 22.5848 10.9819 22.2762 11.6506 21.9676C12.1649 21.7104 12.6793 21.5047 13.1936 21.2475C13.9137 20.8875 14.6853 20.5789 15.4053 20.2188C15.9197 20.0131 16.434 19.7559 16.9484 19.5502C17.3084 19.3959 17.6685 19.2416 18.0285 19.0358C18.08 19.0358 18.08 18.9844 18.1314 18.9844C18.1314 18.9844 18.1314 18.9844 18.1314 19.0358C18.1314 19.0872 18.1314 19.0872 18.1314 19.1387C18.1314 22.5334 18.1314 25.9281 18.1314 29.3228C18.1314 29.3743 18.1314 29.4257 18.1314 29.4771C18.08 29.5286 18.08 29.4771 18.0285 29.4771C17.8742 29.3743 17.7199 29.3228 17.6171 29.22C14.4795 27.3683 11.342 25.5166 8.20443 23.665C8.153 23.6135 8.10156 23.6135 8.10156 23.6135Z"
                    fill="#D7D7D7"
                  />
                  <path
                    d="M18.082 19.0352C18.082 18.9837 18.082 18.9323 18.082 18.9323C18.082 15.0232 18.082 11.0627 18.082 7.15365C18.082 7.10222 18.082 7.05078 18.082 7.05078C21.3739 12.5029 24.6657 17.955 27.9576 23.4071C28.009 23.4586 28.0604 23.51 28.0604 23.5614C27.8547 23.4586 27.649 23.3557 27.3918 23.2528C27.1346 23.15 26.8774 22.9957 26.6203 22.8928C26.466 22.8414 26.3116 22.7385 26.1059 22.6871C25.8487 22.5842 25.5401 22.4299 25.2829 22.327C25.1286 22.2756 24.9743 22.1727 24.82 22.1213C24.46 21.967 24.0999 21.8127 23.7399 21.6583C23.5342 21.5555 23.3798 21.504 23.1741 21.4012C22.9169 21.2983 22.6598 21.144 22.4026 21.0411C22.2483 20.9897 22.094 20.8868 21.9397 20.8354C21.5796 20.6811 21.2196 20.5268 20.8595 20.3725C20.6538 20.2696 20.4995 20.2182 20.2937 20.1153C20.0366 20.0124 19.7794 19.8581 19.5222 19.7553C19.3679 19.6524 19.1622 19.6009 19.0079 19.4981C18.6993 19.3438 18.3906 19.1895 18.082 19.0352Z"
                    fill="url(#paint1_linear_4805_1384)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_4805_1384"
                    x1="18.0014"
                    y1="-0.595703"
                    x2="18.0014"
                    y2="36.5946"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#22AFFF" />
                    <stop offset="1" stop-color="#1D41FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_4805_1384"
                    x1="20.8885"
                    y1="7.05078"
                    x2="40.6872"
                    y2="44.9419"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#192E5F" />
                  </linearGradient>
                  <clipPath id="clip0_4805_1384">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex items-center gap-8">
              {menus.map((menu) => (
                <div className="text-base text-[#1A1D1F] font-medium">
                  {menu}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex justify-start items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M18.0349 16.617L22.3179 20.899L20.9029 22.314L16.6209 18.031C15.0276 19.3082 13.0459 20.0029 11.0039 20C6.03591 20 2.00391 15.968 2.00391 11C2.00391 6.032 6.03591 2 11.0039 2C15.9719 2 20.0039 6.032 20.0039 11C20.0068 13.042 19.3121 15.0237 18.0349 16.617ZM16.0289 15.875C17.298 14.5699 18.0068 12.8204 18.0039 11C18.0039 7.132 14.8709 4 11.0039 4C7.13591 4 4.00391 7.132 4.00391 11C4.00391 14.867 7.13591 18 11.0039 18C12.8243 18.0029 14.5738 17.2941 15.8789 16.025L16.0289 15.875Z"
                  fill="#1A1D1F"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M6.50391 2H17.5039C17.6592 2 17.8123 2.03614 17.9511 2.10557C18.09 2.175 18.2108 2.2758 18.3039 2.4L21.0039 6V21C21.0039 21.2652 20.8986 21.5196 20.711 21.7071C20.5235 21.8946 20.2691 22 20.0039 22H4.00391C3.73869 22 3.48434 21.8946 3.2968 21.7071C3.10926 21.5196 3.00391 21.2652 3.00391 21V6L5.70391 2.4C5.79705 2.2758 5.91784 2.175 6.05669 2.10557C6.19555 2.03614 6.34866 2 6.50391 2ZM19.0039 8H5.00391V20H19.0039V8ZM18.5039 6L17.0039 4H7.00391L5.50391 6H18.5039ZM9.00391 10V12C9.00391 12.7956 9.31998 13.5587 9.88259 14.1213C10.4452 14.6839 11.2083 15 12.0039 15C12.7996 15 13.5626 14.6839 14.1252 14.1213C14.6878 13.5587 15.0039 12.7956 15.0039 12V10H17.0039V12C17.0039 13.3261 16.4771 14.5979 15.5394 15.5355C14.6018 16.4732 13.33 17 12.0039 17C10.6778 17 9.40605 16.4732 8.46837 15.5355C7.53069 14.5979 7.00391 13.3261 7.00391 12V10H9.00391Z"
                  fill="#1A1D1F"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M20.0039 22H18.0039V20C18.0039 19.2044 17.6878 18.4413 17.1252 17.8787C16.5626 17.3161 15.7996 17 15.0039 17H9.00391C8.20826 17 7.4452 17.3161 6.88259 17.8787C6.31998 18.4413 6.00391 19.2044 6.00391 20V22H4.00391V20C4.00391 18.6739 4.53069 17.4021 5.46837 16.4645C6.40605 15.5268 7.67782 15 9.00391 15H15.0039C16.33 15 17.6018 15.5268 18.5394 16.4645C19.4771 17.4021 20.0039 18.6739 20.0039 20V22ZM12.0039 13C11.216 13 10.4358 12.8448 9.70781 12.5433C8.97985 12.2417 8.31842 11.7998 7.76127 11.2426C7.20411 10.6855 6.76216 10.0241 6.46063 9.2961C6.1591 8.56815 6.00391 7.78793 6.00391 7C6.00391 6.21207 6.1591 5.43185 6.46063 4.7039C6.76216 3.97595 7.20411 3.31451 7.76127 2.75736C8.31842 2.20021 8.97985 1.75825 9.70781 1.45672C10.4358 1.15519 11.216 1 12.0039 1C13.5952 1 15.1213 1.63214 16.2465 2.75736C17.3718 3.88258 18.0039 5.4087 18.0039 7C18.0039 8.5913 17.3718 10.1174 16.2465 11.2426C15.1213 12.3679 13.5952 13 12.0039 13ZM12.0039 11C13.0648 11 14.0822 10.5786 14.8323 9.82843C15.5825 9.07828 16.0039 8.06087 16.0039 7C16.0039 5.93913 15.5825 4.92172 14.8323 4.17157C14.0822 3.42143 13.0648 3 12.0039 3C10.943 3 9.92562 3.42143 9.17548 4.17157C8.42533 4.92172 8.00391 5.93913 8.00391 7C8.00391 8.06087 8.42533 9.07828 9.17548 9.82843C9.92562 10.5786 10.943 11 12.0039 11Z"
                  fill="#1A1D1F"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* <div className="products px-[120px] py-12">
        <div className="mb-10">
          <div className="text-2xl text-[#272B30] font-bold leading-[34px]">
            New arrivals
          </div>
          <div className="text-base leading-[20px] text-[#6F767E] mt-3">
            We explore, discover, and express our unique style through the
            acquisition of extraordinary possessions
          </div>
          <div className="grid grid-cols-4 gap-5 mt-10">
            {products.map((product) => (
              <div className="product">
                <div className="image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="category text-sm text-[#6F767E] mt-1">
                  {product.category}
                </div>
                <div className="name text-base text-[#1A1D1F] font-medium mt-3">
                  {product.name}
                </div>
                <svg
                  width="90"
                  height="18"
                  viewBox="0 0 90 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_4805_1165)">
                    <path
                      d="M8.99969 12.75L4.59119 15.4425L5.78969 10.4175L1.86719 7.0575L7.01594 6.645L8.99969 1.875L10.9834 6.645L16.1329 7.0575L12.2097 10.4175L13.4082 15.4425L8.99969 12.75Z"
                      fill="#FDB92C"
                    />
                  </g>
                  <g clip-path="url(#clip1_4805_1165)">
                    <path
                      d="M26.9997 12.75L22.5912 15.4425L23.7897 10.4175L19.8672 7.0575L25.0159 6.645L26.9997 1.875L28.9834 6.645L34.1329 7.0575L30.2097 10.4175L31.4082 15.4425L26.9997 12.75Z"
                      fill="#FDB92C"
                    />
                  </g>
                  <g clip-path="url(#clip2_4805_1165)">
                    <path
                      d="M44.9997 12.75L40.5912 15.4425L41.7897 10.4175L37.8672 7.0575L43.0159 6.645L44.9997 1.875L46.9834 6.645L52.1329 7.0575L48.2097 10.4175L49.4082 15.4425L44.9997 12.75Z"
                      fill="#FDB92C"
                    />
                  </g>
                  <g clip-path="url(#clip3_4805_1165)">
                    <path
                      d="M62.9997 12.75L58.5912 15.4425L59.7897 10.4175L55.8672 7.0575L61.0159 6.645L62.9997 1.875L64.9834 6.645L70.1329 7.0575L66.2097 10.4175L67.4082 15.4425L62.9997 12.75Z"
                      fill="#FDB92C"
                    />
                  </g>
                  <g clip-path="url(#clip4_4805_1165)">
                    <path
                      d="M80.9997 10.992L83.1124 12.282L82.5379 9.8745L84.4182 8.26425L81.9507 8.06625L80.9997 5.781V10.992ZM80.9997 12.75L76.5912 15.4425L77.7897 10.4175L73.8672 7.0575L79.0159 6.645L80.9997 1.875L82.9834 6.645L88.1329 7.0575L84.2097 10.4175L85.4082 15.4425L80.9997 12.75Z"
                      fill="#FDB92C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4805_1165">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_4805_1165">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(18)"
                      />
                    </clipPath>
                    <clipPath id="clip2_4805_1165">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(36)"
                      />
                    </clipPath>
                    <clipPath id="clip3_4805_1165">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(54)"
                      />
                    </clipPath>
                    <clipPath id="clip4_4805_1165">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(72)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div className="flex justify-start items-center gap-2">
                  <div className="price text-base text-[#1A1D1F] font-medium mt-1">
                    {product.price}
                  </div>
                  <div className="origin-price text-base text-[#6F767E] line-through mt-1">
                    {product.originPrice}
                  </div>
                  {product.percent && (
                    <div className="percent text-base text-[#FF6A55] font-medium mt-1">
                      -{product.percent}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
        <animated.div className="products px-[120px] py-12" style={styles}>
          <div className="mb-10">
            <div className="text-2xl text-[#272B30] font-bold leading-[34px]">
              New arrivals
            </div>
            <div className="text-base leading-[20px] text-[#6F767E] mt-3">
              We explore, discover, and express our unique style through the
              acquisition of extraordinary possessions
            </div>
            <div className="grid grid-cols-5 gap-5 mt-10">
              {products.map((product) => (
                <div className="product">
                  <div className="image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="category text-sm text-[#6F767E] mt-1">
                    {product.category}
                  </div>
                  <div className="name text-base text-[#1A1D1F] font-medium mt-3">
                    {product.name}
                  </div>
                  <svg
                    width="90"
                    height="18"
                    viewBox="0 0 90 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4805_1165)">
                      <path
                        d="M8.99969 12.75L4.59119 15.4425L5.78969 10.4175L1.86719 7.0575L7.01594 6.645L8.99969 1.875L10.9834 6.645L16.1329 7.0575L12.2097 10.4175L13.4082 15.4425L8.99969 12.75Z"
                        fill="#FDB92C"
                      />
                    </g>
                    <g clip-path="url(#clip1_4805_1165)">
                      <path
                        d="M26.9997 12.75L22.5912 15.4425L23.7897 10.4175L19.8672 7.0575L25.0159 6.645L26.9997 1.875L28.9834 6.645L34.1329 7.0575L30.2097 10.4175L31.4082 15.4425L26.9997 12.75Z"
                        fill="#FDB92C"
                      />
                    </g>
                    <g clip-path="url(#clip2_4805_1165)">
                      <path
                        d="M44.9997 12.75L40.5912 15.4425L41.7897 10.4175L37.8672 7.0575L43.0159 6.645L44.9997 1.875L46.9834 6.645L52.1329 7.0575L48.2097 10.4175L49.4082 15.4425L44.9997 12.75Z"
                        fill="#FDB92C"
                      />
                    </g>
                    <g clip-path="url(#clip3_4805_1165)">
                      <path
                        d="M62.9997 12.75L58.5912 15.4425L59.7897 10.4175L55.8672 7.0575L61.0159 6.645L62.9997 1.875L64.9834 6.645L70.1329 7.0575L66.2097 10.4175L67.4082 15.4425L62.9997 12.75Z"
                        fill="#FDB92C"
                      />
                    </g>
                    <g clip-path="url(#clip4_4805_1165)">
                      <path
                        d="M80.9997 10.992L83.1124 12.282L82.5379 9.8745L84.4182 8.26425L81.9507 8.06625L80.9997 5.781V10.992ZM80.9997 12.75L76.5912 15.4425L77.7897 10.4175L73.8672 7.0575L79.0159 6.645L80.9997 1.875L82.9834 6.645L88.1329 7.0575L84.2097 10.4175L85.4082 15.4425L80.9997 12.75Z"
                        fill="#FDB92C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4805_1165">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_4805_1165">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(18)"
                        />
                      </clipPath>
                      <clipPath id="clip2_4805_1165">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(36)"
                        />
                      </clipPath>
                      <clipPath id="clip3_4805_1165">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(54)"
                        />
                      </clipPath>
                      <clipPath id="clip4_4805_1165">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(72)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="flex justify-start items-center gap-2">
                    <div className="price text-base text-[#1A1D1F] font-medium mt-1">
                      {product.price}
                    </div>
                    <div className="origin-price text-base text-[#6F767E] line-through mt-1">
                      {product.originPrice}
                    </div>
                    {product.percent && (
                      <div className="percent text-base text-[#FF6A55] font-medium mt-1">
                        -{product.percent}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center justify-items-center">
            <div className="h-10 pl-4 pr-3 py-2 rounded-xl border border-[#efefef] justify-center items-center gap-1 inline-flex">
              <div className="text-[#272b30] text-sm font-medium font-['Helvetica Neue'] leading-none">
                View all
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z"
                  fill="#777E91"
                />
              </svg>
            </div>
          </div>
        </animated.div>
        <div className="articles  px-[120px] py-12">
          <div className="text-2xl text-[#272B30] font-bold leading-[34px] mb-8">
            Articles
          </div>
          <div className="grid grid-cols-3 gap-6">
            {articles.map((article) => (
              <div className="article shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-6">
                <div className="image">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="title text-base text-[#1A1D1F] font-medium mt-3">
                  {article.title}
                </div>
                <div className="description text-sm text-[#6F767E] mt-1">
                  {article.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-80 p-6 bg-red-500 rounded-2xl setting">
        <div className="grid grid-cols-1 gap-5">
          <div className="flex justify-start items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none">
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#101828"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="font-medium text-[#101828]">Main Menu</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none">
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#101828"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="font-medium text-[#101828]">Hero Banners</span>
          </div>
          <div>
            <div className="flex justify-start items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none">
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="#101828"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="font-medium text-[#101828]">New Arrivals</span>
            </div>
            <div className="flex justify-between p-4  rounded-md bg-[#E2E2E2] mt-2">
              <div className="flex justify-start gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <path
                    d="M5.74449 7.82895H5.65676V6.09211C5.65676 3.69403 7.60079 1.75 9.99887 1.75C12.3969 1.75 14.341 3.69403 14.341 6.09211V7.82895H14.2532M9.99887 11.3026V13.0395M16.0778 12.1711C16.0778 15.5284 13.3562 18.25 9.99887 18.25C6.64156 18.25 3.91992 15.5284 3.91992 12.1711C3.91992 8.81374 6.64156 6.09211 9.99887 6.09211C13.3562 6.09211 16.0778 8.81374 16.0778 12.1711Z"
                    stroke="#727272"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-[#101828]">Status</span>
              </div>
              <div className="flex items-center">
                <button
                  id="toggleButton"
                  className="w-16 h-8 rounded-full bg-green-700 relative focus:outline-none transition-colors">
                  <span
                    id="toggleIndicator"
                    className="w-7 h-7 bg-white rounded-full absolute top-0.5 left-0.5 shadow transition-transform"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
