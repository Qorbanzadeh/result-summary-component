function ResultScore() {
  return (
    <div
      className="py-10 px-16 text-center
    grid content-start gap-8
    rounded-bl-[2rem] rounded-br-[2rem] sm:rounded-[2rem]
   text-white text-opacity-70 bg-gradient-to-t from-gradient_light_royal_blue to-gradient_light_slate_blue"
    >
      <h1 className="text-2xl font-bold">Your result</h1>
      <p className="grid w-48 mx-auto rounded-full bg-gradient-to-b from-gradient_violet_blue to-gradient_persian_blue aspect-square place-content-center">
        <span className="block font-black text-white text-7xl">76</span> of 100
      </p>

      <div className="grid content-start gap-4">
        <p className="text-2xl font-bold text-white">Great</p>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}

export default ResultScore;
