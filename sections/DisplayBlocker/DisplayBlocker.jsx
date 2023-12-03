const DisplayBlocker = () => {
  return (
    <div className="top-0 left-0 flex-wrap fixed max-[270px]:flex items-center justify-center w-full h-full dark:bg-black-200 bg-light-200 z-50 hidden ">
      <p className="text-black-200 font-black text-3xl dark:text-light-200 text-center flex flex-wrap">
        P l e a s e <nbps /> c h a n g e <nbps /> y o u r <nbps />s c r e e n{" "}
        <nbps /> w i d t h <nbps /> t o <nbps /> a c c e s s <nbps /> i n f o r
        m a t i o n <nbps />.
      </p>
    </div>
  );
};

export default DisplayBlocker;
