function ResultHeader() {
  return (
    <div className="w-full sm:rounded-[2rem] rounded-b-[2rem] bg-gradient-to-t from-gradient_light_royal_blue to-gradient_light_slate_blue py-4">
      <h1 className="text-xl font-semibold text-center opacity-70">
        Your Result
      </h1>
      <div className="flex items-center justify-center mt-8">
        <div className="p-8 rounded-full bg-gradient-to-b from-gradient_violet_blue to-gradient_persian_blue w-36 h-36">
          <div className="text-5xl font-bold text-center ">76</div>
          <div className="text-lg font-medium text-center opacity-50">
            of 100
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-8">
        <div className="text-2xl font-bold text-center ">Great</div>
        <div className="px-4 mt-2 text-lg font-medium text-center opacity-80">
          You scored higher than 65% of the people who have taken these tests.
        </div>
      </div>
    </div>
  );
}

export default ResultHeader;
