import Image from "next/image";

const NotFound: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center -mt-16">
      <Image src="/deepseeknot.png" width={420} height={100} alt="Not Found" />
      <div className="flex flex-col gap-3 text-center">
        <p className="md:ml-14">Our website is currently under maintenance.</p>
        <p>We apologize for the inconvenience, we will be back shortly.</p>
      </div>
    </div>
  );
};

export default NotFound;