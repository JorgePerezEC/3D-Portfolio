import { luffy_happy, luffy_sad } from "../assets/images";

const Alert = ({ type, text }) => {
  return (
    <div className='absolute top-12 left-0 right-0 flex justify-center items-center flex-col animate-breathe'>
      <div
        className={`${
          type === "danger" ? "danger-container" : "success-container"
        } p-2 text-white leading-none lg:rounded-3xl flex flex-col lg:inline-flex justify-center items-center`}
        role='alert'
      >
        <p
          className={`${
            type === "danger" ? "bg-red-600" : "bg-green-600"
          } flex rounded-full uppercase px-2 py-1 font-semibold text-xs mb-2`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <img
          src={type === "danger" ? luffy_sad : luffy_happy}
          alt='Luffy'
          className='w-32 h-38'
        />
        <p
          className='mr-10 ml-10 text-left text-center'
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  );
};

export default Alert;
