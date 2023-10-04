import Image from "next/image";
import Button from "./button";

type ServiceListProps = {
  title: string;
  description: string;
  path: string;
  image: string;
};

type Props = {
  services: ServiceListProps[];
};

export default function ServiceList({ services }: Props) {
  return (
    <>
      {services.map((service, index) => (
        <div
          key={index}
          className='mt-10 space-y-2 grid  gap-2 sm:grid-flow-col sm:grid-rows-3  sm:gap-x-16'
        >
          <Image
            src={service.image}
            width={480}
            height={270}
            alt={service.title}
            className={
              index % 2
                ? "rounded-lg  sm:row-start-1 sm:row-end-4 sm:col-span-2 md:order-2"
                : "rounded-lg sm:row-start-1 sm:row-end-4 sm:col-span-2"
            }
          />
          <h4 className='text-2xl leading-9 gap-y-4 row-start-1 self-center '>
            {service.title.split(" ")[0]}
            <br />
            {service.title.split(" ")[1]}
          </h4>
          <p>{service.description}</p>
          <Button
            path={service.path}
            text='詳しく見る'
            isPrimary={true}
            className='sm:row-start-3 row-start-5'
          />
        </div>
      ))}
    </>
  );
}
