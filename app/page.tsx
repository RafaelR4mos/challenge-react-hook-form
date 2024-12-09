import ReactHookForm from "./components/ReactHookForm";
// import TraditionalForm from "./components/TraditionalForm";

export default function Home() {
  return (
    <main className=" p-8 min-h-[100vh] w-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl">React hook form</h1>

      <div className="flex gap-4">
        {/* <TraditionalForm /> */}
        <ReactHookForm />
      </div>
    </main>
  );
}
