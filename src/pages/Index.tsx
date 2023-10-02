import { Link } from 'wouter';

export function Index() {
  return (
    <div
      className='w-screen h-screen flex flex-col justify-center items-center gap-10 relative p-10'
    >
      <Link
        href='/shadow'
        className='bg-emerald-600 p-14 rounded-2xl bg-gradient-to-r from-[21%] from-[#e3842b]
        to-[100%] to-[#7b2be3] shadow-[20px_20px_30px_0px_rgba(0,0,0,0.80)] text-center
        hover:shadow-[25px_25px_30px_0px_rgba(0,0,0,0.80)] transition-shadow font-bold text-2xl'
      >
        Shadow generator
      </Link>
      <Link
        href='/gradient'
        className='bg-gradient-to-r from-[21%] from-[#7b2be3] to-[100%] to-[#3dfcff] p-14
        rounded-2xl shadow-[20px_20px_30px_0px_rgba(0,0,0,0.80)] text-center
        hover:shadow-[25px_25px_30px_0px_rgba(0,0,0,0.80)] transition-shadow font-bold text-2xl'
      >
        Gradient generator
      </Link>
      <footer className='absolute p-3 bottom-0'>
        <span className='font-light'>
          by
          {' '}
          <a
            href='https://github.com/sebinllas'
            target='_blank'
            rel='noreferrer'
            className='hover:underline'
          >
            Sebinllas
          </a>
        </span>

      </footer>
    </div>
  );
}
