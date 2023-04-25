export default function TODO() {
  return (
    <div className="w-full h-screen bg-gray-200 grid place-items-center relative">
      <div className="bg-[url('/image/bg-mobile-light.jpg')] w-full h-[300px] bg-cover bg-top absolute top-0 left-0 z-10"></div>
      <div
        id="app"
        className="border w-[80%] md:w-[35%] min-h-[600px] border-gray-900 z-20"
      >
        <div className="w-full flex justify-between py-4">
          <h1>Todo</h1>
          <button>DARK/LIGHT</button>
        </div>
        <div className="w-full flex p-4 border ">
          <input type="text" className="w-full bg-transparent" />
        </div>
      </div>
    </div>
  );
}
