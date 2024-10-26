// Server actions
import { handleEmailForm } from "./actions";

const HomePage: React.FC = async () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form
        action={handleEmailForm}
        method="POST"
        className="flex flex-col gap-y-4"
      >
        <input
          className="bg-slate-400 block p-2 placeholder:text-slate-500"
          type="text"
          placeholder="Título del e-mail"
          name="title"
        />
        <input
          className="bg-slate-400 block p-2 placeholder:text-slate-500"
          type="email"
          placeholder="Para"
          name="to"
        />
        <textarea
          className="bg-slate-400 block p-2 placeholder:text-slate-500"
          name="content"
          placeholder="Escriba su e-mail aquí..."
        ></textarea>
        <button className="bg-green-500 text-white p-2 rounded-md hover:bg-slate-600">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default HomePage;
