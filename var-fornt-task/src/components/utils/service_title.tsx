type Title = {
  main: string;
  sub: string;
};

export default function ServiceTitle(title: Title) {
  return (
    <div className='flex  gap-4'>
      <span className='content w-2 h-16 bg-primary'></span>
      <div className='flex flex-col justify-between'>
        <h3 className='text-3xl'>{title.main}</h3>
        <span className='text-sm'>{title.sub}</span>
      </div>
    </div>
  );
}
