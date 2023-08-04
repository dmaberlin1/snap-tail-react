
const Wrapper = ({children}) => {
  return (
    <div className={'container mx-auto bg-gradient-to-br  from-gray-300/10 to-almost-white; py-4 px-6 min-h-screen'} >
      {children}
    </div>
  );
};

export default Wrapper;
