/* eslint-disable react/prop-types */
const ImgCard = (props) => {
  const { PhonePic } = props;
  return (
    <>
      <picture className="md:flex md:items-center md:justify-center md:mt-0 pb-5">
        <img
          src={`${PhonePic}`}
          alt="phone3b"
          className="h-[144px] w-[144px] md:h-[260px] md:w-[260px] pb-5"
        />
      </picture>
    </>
  );
};

export default ImgCard;
